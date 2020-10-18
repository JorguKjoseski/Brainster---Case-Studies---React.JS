import React from 'react';
import { A } from 'hookrouter';

const Card = (props) => {
	return (
		<div className="cardI">
			<A
				href={`/carddetails/${props.id}`}
				className="card"
				style={{ color: 'black', textDecoration: 'none' }}
				onClick={props.funkClick}
			>
				<img src={props.url} className="card-img-top" alt="piture" />
				<div className="card-body text-center">
					<h2>{props.title}</h2>
					<p className="card-text text-left">{props.body}</p>
				</div>
				<div className="card-footer text-center">
					<span className="text-muted">{props.lect}</span>
				</div>
			</A>
		</div>
	);
};

export default Card;
