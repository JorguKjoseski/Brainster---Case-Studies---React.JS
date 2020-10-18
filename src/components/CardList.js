import React, { useContext } from 'react';
import { Context } from '../Context/CardContext';
import Card from './Card';

const CardList = () => {
	const { filterCard } = useContext(Context);
	const { filterB } = useContext(Context);

	return (
		<div className="container-fluid">
			<div className="row">
				{filterB.map((el, i) => (
					<div className="col-lg-4 col-md-6 col-sm-12" key={i}>
						<Card
							title={el.title}
							body={el.desc}
							url={require(`../img/${el.url}`)}
							id={el.id}
							key={i}
							lect={el.lection}
							kat={el.cat}
							cat={el.se}
							funkClick={() => filterCard(el.id)}
						/>
					</div>
				))}
			</div>
		</div>
	);
};

export default CardList;
