import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import error from '../img/error_404.jpg';
import { A } from 'hookrouter';

const NotFoundPage = () => {
	return (
		<div>
			<NavBar />
			<div className="container-fluid wallImg">
				<div className="row">
					<div className="col-md-12">
						<img src={error} alt="pic" />
						<A href="/">
							<button className="btn btn-success">Back Home</button>
						</A>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default NotFoundPage;
