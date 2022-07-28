import React from 'react';

export default function Foot() {
	return (
		<footer className="text-center mt-12">
			<div className="max-w-screen-xl px-4 py-12 mx-auto sm:px-6 lg:px-8">
				<div className="max-w-3xl mx-auto space-y-6">
					<div className="flex justify-center space-x-6">
						<a
							className="text-blue-500 hover:text-opacity-75"
							href="https://linkedin.com/in/bartosz-konarowski"
							target="_blank"
							rel="noopener noreferrer"
							aria-label="Linkedin"
						>
							<svg
								className="w-8 h-8"
								xmlns="http://www.w3.org/2000/svg"
								height="72"
								viewBox="0 0 72 72"
								width="72"
							>
								<g fill="none" fill-rule="evenodd">
									<path
										d="M8,72 L64,72 C68.418278,72 72,68.418278 72,64 L72,8 C72,3.581722 68.418278,-8.11624501e-16 64,0 L8,0 C3.581722,8.11624501e-16 -5.41083001e-16,3.581722 0,8 L0,64 C5.41083001e-16,68.418278 3.581722,72 8,72 Z"
										fill="#007EBB"
									/>
									<path
										d="M62,62 L51.315625,62 L51.315625,43.8021149 C51.315625,38.8127542 49.4197917,36.0245323 45.4707031,36.0245323 C41.1746094,36.0245323 38.9300781,38.9261103 38.9300781,43.8021149 L38.9300781,62 L28.6333333,62 L28.6333333,27.3333333 L38.9300781,27.3333333 L38.9300781,32.0029283 C38.9300781,32.0029283 42.0260417,26.2742151 49.3825521,26.2742151 C56.7356771,26.2742151 62,30.7644705 62,40.051212 L62,62 Z M16.349349,22.7940133 C12.8420573,22.7940133 10,19.9296567 10,16.3970067 C10,12.8643566 12.8420573,10 16.349349,10 C19.8566406,10 22.6970052,12.8643566 22.6970052,16.3970067 C22.6970052,19.9296567 19.8566406,22.7940133 16.349349,22.7940133 Z M11.0325521,62 L21.769401,62 L21.769401,27.3333333 L11.0325521,27.3333333 L11.0325521,62 Z"
										fill="#FFF"
									/>
								</g>
							</svg>
						</a>

						<a
							className="text-gray-900 hover:text-opacity-75"
							href="https://github.com/cukier91"
							target="_blank"
							rel="noopener noreferrer"
							aria-label="GitHub"
						>
							<svg
								className="w-8 h-8"
								fill="currentColor"
								viewBox="0 0 24 24"
								aria-hidden="true"
							>
								<path
									fillRule="evenodd"
									d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
									clipRule="evenodd"
								></path>
							</svg>
						</a>
					</div>

					<p className="max-w-lg mx-auto text-xs text-gray-500 text-justify">
						Podanie przez Państwa danych na potrzeby funkcjonowania aplikacji
						jest dobrowolne. Mają Państwo prawo dostępu do treści swoich danych
						oraz prawo ich sprostowania, usunięcia, ograniczenia przetwarzania.
						Szczegółowe informacje dotycznące RODO znajdą Państwo poniżej.
						<a
							className="block mt-1 text-pink-600 underline decoration-wavy decoration-pink-500 hover:opacity-75 text-center"
							href="/rodo"
							target="_blank"
							rel="noopener noreferrer"
						>
							RODO
						</a>
					</p>
					<p className="text-xs font-medium">2022 Your Home Budget</p>
				</div>
			</div>
		</footer>
	);
}
