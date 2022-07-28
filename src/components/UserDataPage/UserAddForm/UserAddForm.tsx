import React, { useState } from 'react';
import style from '../UserAddForm/UserAddForm.module.css';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { db } from 'src/config/firebase-config';

export default function UserAddForm({
	userId,
	budgetId,
}: {
	userId: string | undefined;
	budgetId: string | undefined;
}) {
	const [select, setSelect] = useState('Inne');
	const [inputValue, setInputValue] = useState(0.0);
	const [userChoice, setUserChoice] = useState({
		Transport: 0,
		Ubrania: 0,
		Rozrywka: 0,
		Jedzenie: 0,
		Ubezpieczenia: 0,
		Inne: 0,
		Zwierzęta: 0,
		Restauracje: 0,
		Chemia: 0,
		Rachunki: 0,
		Kredyty: 0,
	});

	console.log(Object.entries(userChoice));

	console.log(select, inputValue);

	const resetExpense = () => {
		setUserChoice({
			Transport: 0,
			Ubrania: 0,
			Rozrywka: 0,
			Jedzenie: 0,
			Ubezpieczenia: 0,
			Inne: 0,
			Zwierzęta: 0,
			Restauracje: 0,
			Chemia: 0,
			Rachunki: 0,
			Kredyty: 0,
		});
	};

	const handleAddExpense = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		setUserChoice((prev) => ({
			...prev,
			[select]: prev[select as keyof typeof prev] + inputValue,
		}));
		setInputValue(0.0);
	};

	const sendExpense = () => {
		let expense: any = {};
		const newDate = new Date().toISOString();
		for (const [key, value] of Object.entries(userChoice)) {
			if (value === 0) {
				continue;
			} else {
				expense[key] = { [newDate]: value.toFixed(2) };
			}
		}
		const dataRef = doc(db, `${userId}`, `${budgetId}`);

		setDoc(dataRef, { expense: expense }, { merge: true });
		resetExpense();
	};

	return (
		<div className={style.User_add_wrapper}>
			<div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
				<div className="max-w-lg mx-auto text-center">
					<h1 className="text-2xl font-bold sm:text-3xl">Dodaj wydatki</h1>

					<p className="mt-4 text-gray-500">
						Poniżej wybierz kategorię swoich wydatków i podaj kwotę. Sprawdź na
						podglądzie tabeli czy wszystkie wprowadzone koszty sa prawidłowe i
						zatwierdź przyciskiem wyślij.
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
	);
}
