import React from 'react';

export default function ContactPage() {
	return (
        
		<div className="flex w-full h-screen items-center justify-center flex-col">
			<div className="mb-3 xl:w-2/6 h-1/3">
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
			</div>
			<div className='flex w-2/6 justify-center'>
				<button
					type="submit"
					className="inline-block w-full py-3 ml-3 text-sm font-medium text-white bg-blue-500 rounded-lg"
				>
					Wyślij
				</button>
			</div>
		</div>
	);
}
