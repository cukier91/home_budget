import React from 'react';
import 'chart.js/auto';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import style from '../ChartComponent/ChartComponent.module.css';

ChartJS.register(ArcElement, Tooltip, Legend);
export default function ChartComponent() {
	return (
		<div className={style.chart_wrapper}>
			<div className={style.chart}>
				<h1>Wydatki miesięczne </h1>
				<Doughnut
					data={{
						labels: [
							'Transport',
							'Rozrywka',
							'Yellow',
							'Green',
							'Purple',
							'Orange',
						],
						datasets: [
							{
								data: [12, 19, 3, 5, 2, 3],
								backgroundColor: [
									'rgba(255, 99, 132, 0.2)',
									'rgba(54, 162, 235, 0.2)',
									'rgba(255, 206, 86, 0.2)',
									'rgba(75, 192, 192, 0.2)',
									'rgba(153, 102, 255, 0.2)',
									'rgba(255, 159, 64, 0.2)',
								],
								borderColor: [
									'rgba(255, 99, 132, 1)',
									'rgba(54, 162, 235, 1)',
									'rgba(255, 206, 86, 1)',
									'rgba(75, 192, 192, 1)',
									'rgba(153, 102, 255, 1)',
									'rgba(255, 159, 64, 1)',
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
