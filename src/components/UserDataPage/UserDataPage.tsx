import React, { useEffect, useState } from 'react';
import style from '../UserDataPage/UserDataPage.module.css';
import { useParams } from 'react-router-dom';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { db } from 'src/config/firebase-config';
import { useAuthContext } from 'src/context/AuthContext';

export default function UserDataPage() {
	const [userData, setUserData] = useState<object>();
	const { budgetId } = useParams();
	const { userId } = useAuthContext();
	const [select, setSelect] = useState<string>('other');
	const [inputValue, setInputValue] = useState<number>(0.00);
	const [userChoice, setUserChoice] = useState<object>({
		auto: 0,
		clothes: 0,
		entertainment: 0,
		foodShopping: 0,
		insurance: 0,
		other: 0,
		pets: 0,
		restaurants: 0,
	});

	console.log(select, inputValue);

	const options = [
		{ value: 'auto', label: 'auto' },
		{ value: 'clothes', label: 'clothes' },
		{ value: 'entertainment', label: 'entertainment' },
		{ value: 'foodShopping', label: 'food' },
		{ value: 'insurance', label: 'insurance' },
		{ value: 'other', label: 'other' },
		{ value: 'pets', label: 'pets' },
		{ value: 'restaurants', label: 'restaurants' },
	];

	async function getSingleData() {
		if (budgetId) {
			const docRef = doc(db, userId, budgetId);
			const docSnap = await getDoc(docRef);
			if (docSnap.exists()) {
				const userData = docSnap.data();
				setUserData(userData);
			} else {
				// doc.data() will be undefined in this case
				console.log('No such document!');
			}
		}
	}

	useEffect(() => {
		userId ? getSingleData() : console.log('Where is user');
		//eslint-disable-next-line
	}, [userId]);

	function testData() {
		const newDate = new Date().toISOString();
		const dataRef = doc(db, `${userId}`, `${budgetId}`);
		setDoc(
			dataRef,
			{ expense: { auto: { [newDate]: 32122 } } },
			{ merge: true }
		);
		getSingleData();
	}

	return (
		<div>
			{userId ? (
				<div>
					<button onClick={testData} className={style.btn}>
						I want to merge my data
					</button>

					<form>
						<select
							defaultValue={'other'}
							onChange={(e) => setSelect(e.target.value)}
						>
							{options.map((option) => {
								return <option key={option.value}>{option.label}</option>;
							})}
						</select>
						<div>
							<label htmlFor="price">Amount</label>
							<input
								id="price"
								type="number"
								step="0.01"
								value={inputValue}
								placeholder="tap the number"
								onChange={(e) => setInputValue(parseFloat(e.target.value))}
							></input>
						</div>
					</form>
				</div>
			) : (
				<div>loading...</div>
			)}
		</div>
	);
}
