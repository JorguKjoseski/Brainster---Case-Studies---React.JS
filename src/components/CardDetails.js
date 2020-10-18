import React, { useContext } from 'react';
import NavBar from './NavBar';
import Baner from './Baner';
import Footer from './Footer';
import CardContent from './CardContent';
import { Context } from '../Context/CardContext';
import ModalC from './Modal';

const CardDetails = () => {
	const { filterC } = useContext(Context);
	//console.log(filterC);
	return (
		<div>
			<NavBar />
			<ModalC />
			<Baner />
			<CardContent filterCard={filterC} />
			<Footer />
		</div>
	);
};

export default CardDetails;
