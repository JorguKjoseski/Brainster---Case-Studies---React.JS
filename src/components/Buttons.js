import React, { useContext } from 'react';
import { Context } from '../Context/CardContext';
import Btn from './Button';

const Buttons = () => {
	const { infoBtn } = useContext(Context);
	const { filterBtn } = useContext(Context);
	const { allCards } = useContext(Context);

	return (
		<div className="f-btn">
			{infoBtn.map((el, i) => (
				<div className="container-fluid" key={i}>
					<div className="btn-fil">
						{/* <div className='col-lg-4 col-md-6 col-sm-12' > */}
						<Btn
							title={el.title}
							id={el.id}
							category={el.cat}
							OnClickFunk={() => {
								filterBtn(el.cat);
								allCards(el.cat);
							}}
						/>
					</div>
				</div>
				//</div>
			))}
		</div>
	);
};

export default Buttons;
