import React, { useState } from 'react';
import style from './NaviBar.module.css';
import wallet from '../../img/wallet.png';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { auth } from 'src/config/firebase-config';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import { useAuthContext } from 'src/context/AuthContext';

export default function NaviBar() {
	//const { isAuthorized } = useAuthContext();
	const [user,setUser]=useState(null)

	onAuthStateChanged(auth, (currentUser) => {
		console.log("currentUser",currentUser)
	currentUser?setUser(currentUser.email): setUser(null)
	})

	const logout = async () => {
		await signOut(auth);
		localStorage.setItem("user",false)
	};

	//console.log('user', isAuthorized);

	return (
		<Navbar bg="dark" expand="lg" variant="dark">
			<Container className={style.container}>
				<img src={wallet} alt="Wallet" className={style.img_logo} />
				<Navbar.Brand href="/" className={style.logo_name}>
					Your Home Budget
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="me-auto">
						<Nav.Link href="#home">Home</Nav.Link>
						<Nav.Link href="#link">Link</Nav.Link>
						<NavDropdown title="Dropdown" id="basic-nav-dropdown">
							<NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
							<NavDropdown.Item href="#action/3.2">
								Another action
							</NavDropdown.Item>
							<NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
							<NavDropdown.Divider />
							<NavDropdown.Item onClick={logout}>Logout</NavDropdown.Item>
						</NavDropdown>
						<Nav.Link href="/login">Login</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}
