import React, { useContext } from 'react';
import { Navbar, Nav, Button, Image } from 'react-bootstrap';
import logo from '../brainster_space_logo.svg';
import { Context } from '../Context/CardContext';

const NavBar = () => {
	const { handleShow } = useContext(Context);

	return (
		<div className="NavBar">
			<Navbar bg="light" expand="lg">
				<Nav.Link href="https://brainster.co/" target="_blank">
					<Image src={logo} />
				</Nav.Link>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="ml-auto">
						<Nav.Link href="#" target="_blank" className="nav-link">
							Академии
						</Nav.Link>
						<Nav.Link href="#" target="_blank" className="nav-link">
							Тест за кариера
						</Nav.Link>
						<Nav.Link href="#" target="_blank" className="nav-link">
							Блог
						</Nav.Link>
						<Button variant="primary" arget="_blank" className="btn-nav" onClick={handleShow}>
							Приклучи се <span>!!!</span>
						</Button>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</div>
	);
};

export default NavBar;
