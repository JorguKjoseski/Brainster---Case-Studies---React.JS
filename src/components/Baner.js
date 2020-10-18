import React from 'react';

const Baner = () => {
	return (
		<div>
			<div className="container baner">
				<div className="col-md-12 jumbotron " style={{ backgroundColor: '#5E5AF5' }}>
					<h1 className="display-10 text-center">
						Приклучи се на 1.305 ентузијасти и учи дигитални вештини Бесплатно.
					</h1>
					<form>
						<input
							type="email"
							className="input-baner"
							placeholder="Enter email"
							style={{ backgroundColor: '#4747CD' }}
						/>
						<button className="btn btn-light btn-baner">Пријави се</button>
					</form>
					<h5 className="lead text-center">Можеш да се исклучиш од листата на меилови во секое време!</h5>
				</div>
			</div>
		</div>
	);
};

export default Baner;
