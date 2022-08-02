import React, { useEffect, useState } from 'react';
import 'chart.js/auto';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import style from '../ChartComponent/ChartComponent.module.css';
import { useParams } from 'react-router-dom';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { db } from 'src/config/firebase-config';
import { useAuthContext } from 'src/context/AuthContext';

ChartJS.register(ArcElement, Tooltip, Legend);
export default function ChartComponent() {
	const [chartData, setChartData] = useState({});
	// const [valueData, setValueData] = useState<any>([]);
	//eslint-disable-next-line

	const [userData, setUserData] = useState<object>({});
	const { budgetId } = useParams();
	const { userId } = useAuthContext();

	const createChart = async () => {
		if (userId) {
			const userData = await getSingleData();
			const arr: any = [];
			if (userData) {
				for (const [key, value] of Object.entries(userData)) {
					if (key === 'expense') {
						setChartData(sumDataSplitter(value));
					}
				}
			}
		}
	};

	useEffect(() => {
		createChart();
	}, []);

	function sumDataSplitter(data: Object) {
		const notNullArray: object | any = {};

		const splitedData = Object.entries(data);
		for (const [key, value] of splitedData) {
			if (Object.entries(value).length > 0) {
				// notNullArray.push({
				// 	[key]: Object.values(value).reduce((a: any, b: any) => a + b, 0),
				// });
				notNullArray[key] = Object.values(value).reduce(
					(a: any, b: any) => a + b
				);
			}
		}
		return notNullArray;
	}


	async function getSingleData() {
		if (budgetId) {
			const docRef = doc(db, userId, budgetId);
			const docSnap = await getDoc(docRef);
			if (docSnap.exists()) {
				const userData = docSnap.data();
				return userData;
			} else {
				// doc.data() will be undefined in this case
				console.log('No such document!');
			}
		}
	}

	return (
		<div className={style.chart_wrapper}>
			<div className={style.chart}>
				<h1 className="md:text-2xl sm:text-m">Wydatki miesięczne </h1>
				<Doughnut
					width="400"
					height="400"
					data={{
						labels: !chartData ? ['red'] : Object.keys(chartData),
						datasets: [
							{
								data: !chartData ? [] : Object.values(chartData),
								backgroundColor: [
									'rgba(255, 99, 132, 0.2)',
									'rgba(54, 162, 235, 0.2)',
									'rgba(255, 206, 86, 0.2)',
									'rgba(75, 192, 192, 0.2)',
									'rgba(153, 102, 255, 0.2)',
									'rgba(255, 159, 64, 0.2)',
									'rgba(199, 21, 133, 0.2)',
									'rgba(255, 69, 0, 0.2)',
									'rgba(0, 128, 0, 0.2)',
									'rgba(0, 139, 139, 0.2)',
									'rgba(0, 191, 255, 0.2)',
									'rgba(139, 69, 19, 0.2)',
								],
								borderColor: [
									'rgba(255, 99, 132, 1)',
									'rgba(54, 162, 235, 1)',
									'rgba(255, 206, 86, 1)',
									'rgba(75, 192, 192, 1)',
									'rgba(153, 102, 255, 1)',
									'rgba(255, 159, 64, 1)',
									'rgba(199, 21, 133, 1)',
									'rgba(255, 69, 0, 1)',
									'rgba(0, 128, 0, 1)',
									'rgba(0, 139, 139, 1)',
									'rgba(0, 191, 255, 1)',
									'rgba(139, 69, 19, 1)',
								],
								borderWidth: 1,
							},
						],
					}}
					options={{
						responsive: true,
						// scales: {
						// 	y: {
						// 		beginAtZero: true,
						// 	},
						// },
						maintainAspectRatio: true,
						aspectRatio: 2,
						plugins: {
							legend: {
								display: true,
								position: 'bottom',
								labels: {
									padding: 40,
								},
							},
						},
					}}
				/>
			</div>
		</div>
	);
}
