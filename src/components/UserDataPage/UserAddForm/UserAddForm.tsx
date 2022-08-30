import React, { useState } from 'react';
import style from '../UserAddForm/UserAddForm.module.css';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { db } from 'src/config/firebase-config';
import { useParams } from 'react-router-dom';
import { useAuthContext } from 'src/context/AuthContext';
import InfoComponent from 'src/components/InfoComponent/InfoComponent';

export default function UserAddForm({ setKey }: { setKey: any }) {
	const { budgetId } = useParams();
	const { userId } = useAuthContext();
	const [select, setSelect] = useState('Inne');
	const [inputValue, setInputValue] = useState(0.0);
	const [inputIncomeValue, setInputIncomeValue] = useState<number>(0.0);
	const [addIncomeStatus, setAddIncomeStatus] = useState<boolean>(false);
	const [inputSum, setInputSum] = useState<number>(0);
	const [infoStatus, setInfoStatus] = useState<boolean | string>(false);
	const [userChoice, setUserChoice] = useState({
		'Alkohol i papierosy': 0,
		Chemia: 0,
		Inne: 0,
		Jedzenie: 0,
		Kredyty: 0,
		Restauracje: 0,
		Rozrywka: 0,
		Słodycze: 0,
		Transport: 0,
		'Ubezpieczenia i rachunki': 0,
		Zwierzęta: 0,
	});

	const resetExpense = () => {
		setInputSum(0);
		setUserChoice({
			'Alkohol i papierosy': 0,
			Chemia: 0,
			Inne: 0,
			Jedzenie: 0,
			Kredyty: 0,
			Restauracje: 0,
			Rozrywka: 0,
			Słodycze: 0,
			Transport: 0,
			'Ubezpieczenia i rachunki': 0,
			Zwierzęta: 0,
		});
	};

	const handleAddExpense = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		setUserChoice((prev) => ({
			...prev,
			[select]: prev[select as keyof typeof prev] + inputValue,
		}));
		setInputSum(inputSum + inputValue);
		setInputValue(0.0);
	};

	const sendExpense = async (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		let expense: any = {};
		const newDate = new Date().toISOString();
		for (const [key, value] of Object.entries(userChoice)) {
			if (value === 0) {
				continue;
			} else {
				expense[key] = { [newDate]: parseFloat(value.toFixed(2)) };
			}
		}
		const dataRef = doc(db, `${userId}`, `${budgetId}`);

		if (Object.entries(expense).length === 0) {
			setInfoStatus('red');
			window.scrollTo(0, 0);
		} else {
			await setDoc(dataRef, { expense: expense }, { merge: true });
			setInfoStatus('green');
			window.scrollTo(0, 0);
		}
		resetExpense();
		setKey((prev: any) => prev + 1);
	};

	const sendIncome = async (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		const newDate = new Date().toISOString();
		const dataRef = doc(db, `${userId}`, `${budgetId}`);
		if (inputIncomeValue === 0) {
			setInfoStatus('red');
			window.scrollTo(0, 0);
		} else {
			await setDoc(
				dataRef,
				{ Zarobki: { [newDate]: inputIncomeValue } },
				{ merge: true }
			);
			setInfoStatus('green');
			setInputIncomeValue(0);
			window.scrollTo(0, 0);
			setKey((prev: any) => prev + 1);
		}
	};

	return (
		<>
			<InfoComponent info={infoStatus} />

			<div className={style.User_add_wrapper}>
				<div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
					<>
						<div className="flex items-center justify-between mb-4">
							<button
								className="inline-block px-3 py-1 ml-3 text-sm font-medium text-blue-500 bg-white rounded-lg border-2 border-blue-500 hover:text-blue-700"
								onClick={() => setAddIncomeStatus(!addIncomeStatus)}
							>
								{addIncomeStatus?"Dodaj wydatki": "Dodaj dochody"}
							</button>
						</div>

						{addIncomeStatus ? (
							<div className="max-w-lg mx-auto text-center mb-12">
								<h1 className="text-2xl font-bold sm:text-3xl">
									Dodaj dochody
								</h1>
								<p className="mt-4 text-gray-500">
									Poniżej podaj swój dochód netto i zatwierdź przyciskiem dodaj. Dane te zostaną przetworzone w sekcji podsumowanie.
								</p>
								<form
									action=""
									className="max-w-md mx-auto mt-8 mb-0 space-y-4"
								>
									<div>
										<div className="relative">
											<input
												type="number"
												step="0.01"
												value={inputIncomeValue}
												className="w-full p-2 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
												placeholder="Podaj kwotę..."
												onChange={(e) =>
													setInputIncomeValue(parseFloat(e.target.value))
												}
											/>
										</div>
									</div>

									<div className="flex items-center justify-between">
										<button
											className="inline-block px-5 py-2 ml-3 text-sm font-medium text-white bg-blue-500 rounded-lg"
											onClick={sendIncome}
										>
											Dodaj
										</button>
									</div>
								</form>
							</div>
						) : null}
					</>
					
					<div className="max-w-lg mx-auto text-center">
						<h1 className="text-2xl font-bold sm:text-3xl">Dodaj wydatki</h1>

						<p className="mt-4 text-gray-500">
							Poniżej wybierz kategorię swoich wydatków i podaj kwotę. Sprawdź
							na podglądzie tabeli czy wszystkie wprowadzone koszty sa
							prawidłowe i zatwierdź przyciskiem wyślij.
						</p>
					</div>

					<form action="" className="max-w-md mx-auto mt-8 mb-0 space-y-4">
						<div>
							<div className="relative">
								<select
									className="w-full p-2 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
									defaultValue={select}
									onChange={(e) => setSelect(e.target.value)}
								>
									{Object.keys(userChoice).map((element) => {
										return <option key={element}>{element}</option>;
									})}
								</select>
							</div>
						</div>

						<div>
							<div className="relative">
								<input
									type="number"
									step="0.01"
									value={inputValue}
									className="w-full p-2 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
									placeholder="Podaj kwotę..."
									onChange={(e) => setInputValue(parseFloat(e.target.value))}
								/>
							</div>
						</div>

						<div className="flex items-center justify-between">
							<button
								className="inline-block px-5 py-2 ml-3 text-sm font-medium text-white bg-blue-500 rounded-lg"
								onClick={handleAddExpense}
							>
								Dodaj
							</button>
						</div>
					</form>
				</div>
				<div className={style.table_wrapp}>
					<table className={style.table}>
						<tbody>
							{Object.entries(userChoice).map((element) => {
								return (
									<tr key={element[0]}>
										<th>{element[0]}</th>
										<td>{element[1].toFixed(2)}</td>
									</tr>
								);
							})}
							<tr>
								<th className={style.border_sum}>Suma</th>
								<td>{inputSum.toFixed(2)}</td>
							</tr>
						</tbody>
					</table>
				</div>
				<div className={style.buttons}>
					<div className="mt-2.5 flex items-center justify-between">
						<button
							className="inline-block px-5 py-2 ml-3 text-sm font-medium text-white bg-blue-500 rounded-lg"
							onClick={sendExpense}
						>
							Wyślij
						</button>
						<button
							className="inline-block px-5 py-2 ml-3 text-sm font-medium text-white bg-red-500 rounded-lg"
							onClick={resetExpense}
						>
							Reset
						</button>
					</div>
				</div>
			</div>
		</>
	);
}
