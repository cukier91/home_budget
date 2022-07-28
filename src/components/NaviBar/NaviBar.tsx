import style from './NaviBar.module.css';
import wallet from '../../img/wallet.png';
import { Link } from 'react-router-dom';
import { auth } from 'src/config/firebase-config';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useAuthContext } from '../../context/AuthContext';

export default function NaviBar() {
	const { userId, setUserId } = useAuthContext();

	onAuthStateChanged(auth, (currentUser) => {
		currentUser ? setUserId(currentUser.uid) : setUserId('');
	});

	const logout = async () => {
		await signOut(auth);
	};

	return (
		<header className="bg-gray-900">
			<div className="max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8">
				<div className="flex items-center justify-between h-16">
					<div className="md:flex md:items-center md:gap-12">
						<a className="block text-teal-300" href="/">
							<span className="sr-only">Home</span>
							<div className="h-8">
								<img className={style.img_logo} src={wallet} alt="wallet" />
							</div>
						</a>
					</div>

					<div className="hidden md:block">
						<nav aria-labelledby="header-navigation">
							<h2 className="sr-only" id="header-navigation">
								Header navigation
							</h2>

							<ul className="flex items-center gap-6 text-sm">
								<li>
									<Link className={style.link_name} to="/add-shopping">
										Wydatki
									</Link>
								</li>
								<li>
									<Link className={style.link_name} to="/about">
										O nas
									</Link>
								</li>
								<li>
									<Link className={style.link_name} to="/">
										Kontakt
									</Link>
								</li>
								<li>
									<Link
										className={style.link_name}
										to=""
									>
										Profil
									</Link>
								</li>
							</ul>
						</nav>
					</div>

					<div className="flex items-center gap-4">
						{userId ? (
							<div className="sm:gap-4 sm:flex">
								<a
									className="px-5 py-2.5 text-sm font-medium text-white bg-indigo-600 rounded-md shadow"
									href="/"
									onClick={logout}
								>
									Logout
								</a>
							</div>
						) : (
							<div className="sm:gap-4 sm:flex">
								<a
									className="px-5 py-2.5 text-sm font-medium text-white bg-indigo-600 rounded-md shadow"
									href="/login"
								>
									Login
								</a>

								<div className="hidden sm:flex">
									<a
										className="px-5 py-2.5 text-sm font-medium text-white bg-gray-800 rounded-md"
										href="/register"
									>
										Register
									</a>
								</div>
							</div>
						)}

						<div className="block md:hidden">
							<button className="p-2 text-white transition bg-gray-800 rounded hover:text-white/75">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="w-5 h-5"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									strokeWidth="2"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M4 6h16M4 12h16M4 18h16"
									/>
								</svg>
							</button>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
}
