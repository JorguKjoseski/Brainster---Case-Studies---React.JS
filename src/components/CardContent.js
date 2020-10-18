import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { A } from 'hookrouter';

const CardContent = (props) => {
	return (
		<div className="container-fluid text-center main">
			{props.filterCard.map((el, i) => (
				<div key={i}>
					<h1>{el.title}</h1>
					<div className="row">
						<div className="col-md-8 offset-2 text-center cardSpan card1">
							<Card>
								<Card.Header>
									<h2>
										<span>{el.hash1}</span>
										{el.lection1title} <img src={require(`../img/${el.img1}`)} alt="slika" />
									</h2>
								</Card.Header>
								<Card.Body>
									<blockquote className="blockquote mb-0">
										<p className="text-left">{el.lection1desc}</p>
										<Button variant="outline-primary">
											<a
												href={el.link1}
												target="_blank"
												rel="noopener noreferrer"
												style={{ textDecoration: 'none', color: 'black' }}
											>
												Learn More
											</a>
										</Button>
									</blockquote>
								</Card.Body>
							</Card>
						</div>
					</div>
					<div className="row">
						<div className="col-md-8 offset-2 text-center cardSpan">
							<Card>
								<Card.Header>
									<h3>
										<span>{el.hash2}</span>
										{el.lection2title} <img src={require(`../img/${el.img2}`)} alt="slika" />
									</h3>
								</Card.Header>
								<Card.Body>
									<blockquote className="blockquote mb-0">
										<p className="text-left">{el.lection2desc}</p>
										<Button variant="outline-primary">
											<a
												href={el.link2}
												target="_blank"
												rel="noopener noreferrer"
												style={{ textDecoration: 'none', color: 'black' }}
											>
												Learn More
											</a>
										</Button>
									</blockquote>
								</Card.Body>
							</Card>
						</div>
					</div>
				</div>
			))}
			<div className="container btn-c-detail">
				<A href="/">
					<Button
						variant="outline-primary"
						size="lg"
						block
						style={{ textDecoration: 'none', color: 'black' }}
					>
						Back Home
					</Button>
				</A>
			</div>
		</div>
	);
};

export default CardContent;
