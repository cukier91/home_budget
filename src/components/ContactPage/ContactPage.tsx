import React, { useState } from 'react';

export default function ContactPage() {
	const [showMessageForm, setShowMessageForm] = useState<boolean>(false);

	return (
		<>
			<section className="bg-gray-50">
				<div className="max-w-screen-xl px-4 py-20 mx-auto lg:h-screen lg:items-center lg:flex">
					<div className="max-w-xl mx-auto text-center">
						<h1 className="text-3xl font-extrabold sm:text-5xl">
							Masz pytania lub pomysły?
							<strong className="font-extrabold text-blue-700 sm:block">
								Napisz do nas!
							</strong>
						</h1>

						<p className="mt-4 sm:leading-relaxed sm:text-xl">
							Jeżeli masz pytania dotyczące aplikacji, lub pomysły na jej rozwój
							skorzystaj z formularza kontaktowego i napisz do nas.
						</p>

						<div className="flex flex-wrap justify-center gap-4 mt-8">
							<button
								onClick={() => setShowMessageForm(!showMessageForm)}
								className="block w-full px-12 py-3 text-sm font-medium text-white bg-blue-500 rounded shadow sm:w-auto active:bg-blue-400 hover:bg-blue-700 focus:outline-none focus:ring"
							>
								Napisz do nas
							</button>
						</div>
					</div>
					{showMessageForm ? (
						<div className="flex w-full py-5 items-center justify-center flex-col">
							<div className="mb-3 xl:w-5/6">
								<div className="mb-4">
									<label
										htmlFor="exampleFormControlTextarea1"
										className="form-label inline-block mb-2 text-gray-700 font-semibold "
									>
										Tytuł twojej wiadomości
									</label>
									<input
										type="text"
										className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
										id="exampleFormControlInput1"
										placeholder="Tytuł..."
									/>
								</div>
								<label
									htmlFor="exampleFormControlTextarea1"
									className="form-label inline-block mb-2 text-gray-700 font-semibold"
								>
									Twoja Wiadomość
								</label>
								<textarea
									className="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
									id="exampleFormControlTextarea1"
									rows={6}
									placeholder="Wiadomość..."
								></textarea>
								<div className="flex w-full justify-center pt-3.5">
									<button
										type="submit"
										className="block w-full px-12 py-3 text-sm font-medium text-white bg-blue-500 rounded shadow sm:w-auto active:bg-blue-400 hover:bg-blue-700 focus:outline-none focus:ring"
									>
										Wyślij
									</button>
								</div>
							</div>
						</div>
					) : null}
				</div>
			</section>
		</>
	);
}
