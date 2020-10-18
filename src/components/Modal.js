import React, { useContext } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import { Context } from '../Context/CardContext';
import Rocket from '../img/348812671446_e768a879f309640e6ba1_512.png';

const ModalC = () => {
	const { handleClose } = useContext(Context);
	const { show } = useContext(Context);

	return (
		<div>
			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title
						style={{
							color: 'blue',
							fontsize: '20px',
							marginLeft: '40px',
							fontSize: '30px',
							textDecoration: 'underline',
							fontWeight: 'bold'
						}}
					>
						Приклучи се !!!<img src={Rocket} alt="rocket" style={{ marginLeft: '50px' }} />
					</Modal.Title>
				</Modal.Header>
				<Modal.Body className="text-center">
					<Form>
						<Form.Group controlId="formBasicEmail">
							<Form.Label style={{ color: 'blue', textDecoration: 'underline' }}>
								Име и Презиме
							</Form.Label>
							<Form.Control type="text" placeholder="Внесете Име и Презиме" />
							<Form.Label style={{ color: 'blue', textDecoration: 'underline' }}>Имеил Адреса</Form.Label>
							<Form.Control type="email" placeholder="Внесете Ваш имеил" />
							<Form.Text className="text-muted">
								Ние никогаш нема да го споделиме Вашиот имеил со други.
							</Form.Text>
						</Form.Group>
					</Form>
				</Modal.Body>
				<Modal.Footer>
					<Button variant="danger" onClick={handleClose}>
						Close
					</Button>
					<Button variant="primary" onClick={handleClose}>
						Submit
					</Button>
				</Modal.Footer>
			</Modal>
		</div>
	);
};

export default ModalC;
