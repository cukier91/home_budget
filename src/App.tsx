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
import RodoPage from './components/RodoPage/RodoPage';
import UserProfilPage from './components/UserProfilPage/UserProfilPage';
import AboutPage from './components/AboutPage/AboutPage';
import ContactPage from './components/ContactPage/ContactPage';

//ToDo onAuthChange dodać do protected rout

function App() {
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
							path="add-shopping"
							element={
								<Protected>
									<AddShopping />
								</Protected>
							}
						/>
						<Route path="budget" element={<UserDataPage />}>
							<Route path=":budgetId" element={<UserDataPage />} />
						</Route>
						<Route path="rodo" element={<RodoPage />} />
						<Route path="profil" element={<UserProfilPage />} />
						<Route path="about" element={<AboutPage />} />
						<Route path="contact" element={<ContactPage />} />
					</Routes>
					<Foot />
				</AuthProvider>
			</Routers>
		</>
	);
}

export default App;
