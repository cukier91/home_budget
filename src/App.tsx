import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import NaviBar from './components/NaviBar/NaviBar';
import Foot from './components/Foot/Foot';
import LoginPage from './components/LoginPage/LoginPage';
import AddShopping from './components/AddShopping/AddShopping';
import UserDataPage from './components/UserDataPage/UserDataPage';
import { Protected } from './utils/Protected';
import { BrowserRouter as Routers, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import RegisterPage from './components/RegisterPage/RegisterPage';
import { AuthProvider } from './context/AuthContext';
import { auth } from './config/firebase-config';
import { onAuthStateChanged } from 'firebase/auth';

//ToDo onAuthChange dodać do protected rout

function App() {
	const [userState, setUserState] = useState<string | null>('');
	onAuthStateChanged(auth, (user) => {
		user ? setUserState(user.email) : setUserState(null);
	});

	return (
		<>
			<Routers>
				<AuthProvider>
					<NaviBar />
					<Routes>
						<Route path="/" element={<HomePage />} />
						<Route path="login" element={<LoginPage />} />
						<Route path="register" element={<RegisterPage />} />
						<Route
							path="addShopping"
							element={
								<Protected isLoggedIn={userState !== null ? true : false}>
									<AddShopping />
								</Protected>
							}
						/>
						<Route path="budget" element={<UserDataPage />}>
							<Route path=":budgetId" element={<UserDataPage />} />
						</Route>
					</Routes>
					<Foot />
				</AuthProvider>
			</Routers>
		</>
	);
}

export default App;
