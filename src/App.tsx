import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import NaviBar from './components/NaviBar/NaviBar';
import Foot from './components/Foot/Foot';
import RegisterPage from './components/RegisterPage/RegisterPage';
import { BrowserRouter as Routers, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';

function App() {
	return (
		<>
			<Routers>
				<NaviBar />
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="register" element={<RegisterPage />} />
				</Routes>
				<Foot />
			</Routers>
		</>
	);
}

export default App;
