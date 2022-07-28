import React, { useEffect, useState } from 'react';
import style from '../UserDataPage/UserDataPage.module.css';
import { useParams } from 'react-router-dom';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { db } from 'src/config/firebase-config';
import { useAuthContext } from 'src/context/AuthContext';
import UserAddForm from './UserAddForm/UserAddForm';

export default function UserDataPage() {
	const [userData, setUserData] = useState<object>();
	const { budgetId } = useParams();
	const { userId } = useAuthContext();

	console.log(userData)

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
				<>
					<UserAddForm userId={userId} budgetId={budgetId} />
				</>
			) : (
				<div>loading...</div>
			)}
		</div>
	);
}
