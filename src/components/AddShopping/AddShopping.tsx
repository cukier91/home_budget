import React from 'react';
import { doc, setDoc } from 'firebase/firestore';
import { db } from 'src/config/firebase-config';
import money from '../../img/money.jpg'
// Add a new document in collection "cities"

export default function AddShopping() {
	async function test() {
		await setDoc(doc(db, 'user_id', '28.07.2022 - 28.08.2022'), {
			expense: {
				auto: [],
				foodShopping: [],
				insurance: [],
				chemicalShopping: [],
				clothes: [],
				pets: [],
				restaurants: [],
				entertainment: [],
			},
			income: 7500,
			savings: 0,
		});
	}
	return (
		<div className="grid grid-cols-3 gap-2">
			<div className="col-span-1 h-screen">Jestem bocznym elementem</div>
			<div className="col-span-2 h-screen">
				<section className="relative bg-white">
					<img
						className="absolute inset-0 object-[75%] sm:object-[25%] object-cover w-full h-full opacity-85 sm:opacity-100"
						src={money}
						alt="Couple on a bed with a dog"
					/>

					<div className="hidden sm:block sm:inset-0 sm:absolute sm:bg-gradient-to-r sm:from-white sm:to-transparent"></div>

					<div className="relative max-w-screen-xl px-4 py-32 mx-auto lg:h-screen lg:items-center lg:flex">
						<div className="max-w-xl justify-center sm:text-left">
							<h1 className="text-3xl font-extrabold sm:text-5xl">
								Wyznacz nowy cel i zacznij oszczędzać		
							</h1>

							<p className="max-w-lg mt-4 sm:leading-relaxed sm:text-xl">
								Wybierz zakres dat i kontroluj wydatki, aby zrealizować plany krok po kroku. 
							</p>

							<div className="flex mt-8 justify-left">

								<button
									className="px-5 py-2.5 text-sm font-medium text-white bg-indigo-600 rounded-md shadow"

								>
									Wybierz daty 
								</button>
							</div>
						</div>
					</div>
				</section>
			</div>
		</div>
	);
}
