import React, { createContext, useState } from 'react';
import info from '../library';
import infoBtn from '../btn_source';

export const Context = createContext({});

export const Provider = (props) => {
	const [ filterB, setFilterB ] = useState(info);
	const [ filterC, setFilterC ] = useState({});
	const [ show, setShow ] = useState(false);

	//filtriranje kartici preku BTN
	const filterBtn = (catFromInfoBtn) => {
		const filterBtns = info.filter((el) => catFromInfoBtn === el.cat);
		setFilterB(filterBtns);
	};

	//filtriranje na click za carddetails
	const filterCard = (idFromCard) => {
		const filterCard = info.filter((el) => idFromCard === el.id);
		setFilterC(filterCard);
	};

	//prikazuvanje na site kartici na click na BTN ALL
	const allCards = (catFromBtn) => {
		if (catFromBtn.includes('all')) {
			setFilterB(info);
		}
	};

	const handleClose = () => {
		setShow(false);
	};

	const handleShow = () => {
		setShow(true);
	};

	let obj = {
		info,
		infoBtn,
		filterBtn,
		filterB,
		filterCard,
		filterC,
		allCards,
		handleClose,
		handleShow,
		show,
	};

	return (
		<Context.Provider value={obj}>
			{props.children}
		</Context.Provider>
	);
};
