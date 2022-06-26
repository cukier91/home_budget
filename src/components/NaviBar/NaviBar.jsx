import React from 'react';
import style from './NaviBar.module.css';
import wallet from '../../img/wallet.png';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';

export default function NaviBar() {
	return (
		<Navbar bg="light" expand="lg">
			<Container className={style.container}>
				<img src={wallet} className={style.img_logo} />
				<Navbar.Brand href="#home" className={style.logo_name}>YMB</Navbar.Brand>
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
							<NavDropdown.Item href="#action/3.4">
								Separated link
							</NavDropdown.Item>
						</NavDropdown>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}
