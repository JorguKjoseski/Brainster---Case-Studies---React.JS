import React from 'react';
import NavBar from './NavBar';
import CardList from './CardList';
import Baner from './Baner';
import Footer from './Footer';
import Buttons from './Buttons';
import ModalC from './Modal';
import Text from './Text';

const HomePage = () => {
	return (
		<div>
			<NavBar />
			<Baner />
			<Text />
			<ModalC />
			<Buttons />
			<CardList />
			<Footer />
		</div>
	);
};

export default HomePage;
