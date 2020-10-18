import React from 'react';
import { Button } from 'react-bootstrap';

const Btn = (props) => {
	return (
		<div key={props.id} className="f-btn">
			<Button variant="outline-dark" onClick={props.OnClickFunk}>
				{props.title}
			</Button>
		</div>
	);
};

export default Btn;
