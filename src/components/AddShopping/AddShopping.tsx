import React, { useState, useEffect } from 'react';
import { doc, setDoc, collection, getDocs } from 'firebase/firestore';
import { auth, db } from 'src/config/firebase-config';
import money from '../../img/money.jpg';
import style from '../AddShopping/AddShopping.module.css';
import { onAuthStateChanged } from 'firebase/auth';
import { v4 as uuidv4} from 'uuid';

// Add a new document in collection "cities"

export default function AddShopping() {
	const [documents, setDocuments] = useState<any>('');
	const [startDate, setStartDate] = useState<number | string>('');
	const [endDate, setEndDate] = useState<number | string>('');
	const [selector, setSelector] = useState<boolean | undefined>(false);
	const [userState, setUserState] = useState<string | null>('');
	onAuthStateChanged(auth, (user) => {
		user ? setUserState(user.uid) : setUserState(null);
	});

	async function addSavings() {
		await setDoc(doc(db, `${userState}`, `${startDate} - ${endDate}`), {
			expense: {
				auto: [],
				foodShopping: [],
				insurance: [],
				chemicalShopping: [],
				clothes: [],
				pets: [],
				restaurants: [],
				entertainment: [],
				other: [],
			},
			income: 0,
			savings: 0,
		});
		setStartDate('');
		setEndDate('');
		setSelector(false);
	}

	useEffect(() => {
		const listOfData: Array<string> = [];
		async function fetcher() {
			const querySnapshot = await getDocs(collection(db, `${userState}`));
			querySnapshot.forEach((doc) => {
				listOfData.push(doc.id);
			});
			setDocuments(listOfData);
		}
		userState?(fetcher()) : (console.log("Czekam na usera..."));
	});
	return (
		<div className="grid grid-cols-3 gap-2">
			<div className="col-span-1 h-screen">
				{documents ? (
					<div>
						{documents.map((doc: any) => {
							return (
								<li key={uuidv4()}>
									<a  href="#">
										{doc}
									</a>
								</li>
							);
						})}
					</div>
				) : (
					<div>loading</div>
				)}
			</div>
			<div className="col-span-2 h-screen">
				<section className="relative bg-white">
					<img
						className="absolute inset-0 object-[75%] sm:object-[25%] object-cover w-full h-full opacity-85 sm:opacity-100"
						src={money}
						alt="savings pig and some coins"
					/>

					<div className="hidden sm:block sm:inset-0 sm:absolute sm:bg-gradient-to-r sm:from-white sm:to-transparent"></div>

					<div className="relative max-w-screen-xl px-4 py-32 mx-auto lg:h-screen lg:items-center lg:flex">
						<div className="max-w-xl justify-center sm:text-left">
							<h1 className="text-3xl font-extrabold sm:text-5xl">
								Wyznacz nowy cel i zacznij oszczędzać
							</h1>

							<p className="max-w-lg mt-4 sm:leading-relaxed sm:text-xl">
								Wybierz zakres dat i kontroluj wydatki, aby zrealizować plany
								krok po kroku.
							</p>

							<div className="flex mt-8 justify-left">
								<button
									onClick={() =>
										selector === false ? setSelector(true) : setSelector(false)
									}
									className="px-5 py-2.5 text-sm font-medium text-white bg-indigo-600 rounded-md shadow hover:bg-blue-700"
								>
									Wybierz daty
								</button>
							</div>
							{selector ? (
								<div className={style.date_form}>
									<form className={style.form_general}>
										<label htmlFor="startDate">
											<h6>Start date:</h6>
										</label>
										<input
											className={style.form_input}
											id="startDate"
											type="date"
											value={startDate}
											onChange={(e) => {
												setStartDate(e.target.value);
											}}
										/>
										<label htmlFor="endDate">
											<h6>End date:</h6>
										</label>
										<input
											className={style.form_input}
											id="endDate"
											type="date"
											value={endDate}
											onChange={(e) => {
												setEndDate(e.target.value);
											}}
										/>
									</form>
									<button
										onClick={addSavings}
										className=" mt-1.5 px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md shadow hover:bg-blue-700"
									>
										Wyślij
									</button>
								</div>
							) : null}
						</div>
					</div>
				</section>
			</div>
		</div>
	);
}
