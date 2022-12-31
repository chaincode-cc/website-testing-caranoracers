import React, { useEffect, useState } from 'react';
import '../styles/nft.css';
import CountDown from '../components/countdown';
import nft1 from '../assets/videos/Car1.mp4';
import nft2 from '../assets/videos/Racer1.MP4';

let carOne = {
	id: 0,
	title: 'Normal Car',
	ribon: 'common',
	image: nft1,
};
let carTwo = {
	id: 1,
	title: 'Cool Car',
	ribon: 'rare',
	image: nft1,
};
let carThree = {
	id: 2,
	title: 'Crazy Car',
	ribon: 'epic',
	image: nft1,
};

let cars = [carOne, carTwo, carThree];

let racerOne = {
	id: 0,
	title: 'Normal Racer',
	ribon: 'common',
	image: nft2,
};
let racerTwo = {
	id: 1,
	title: 'Cool Racer',
	ribon: 'rare',
	image: nft2,
};
let racerThree = {
	id: 2,
	title: 'Crazy Racer',
	ribon: 'epic',
	image: nft2,
};

let racers = [racerOne, racerTwo, racerThree];

const NFTS = () => {
	const [carsList, setCars] = useState();
	const [racersList, setRacers] = useState();

	useEffect(() => {
		setCars(cars);
		setRacers(racers);
	}, []);
	console.log('List ALL', carsList);

	function styling(ribbon) {
		if (ribbon === 'rare') {
			return { backgroundColor: 'purple' };
		} else if (ribbon === 'epic') {
			return { backgroundColor: '#e1ad21' };
		} else if (ribbon === 'common') {
			return { backgroundColor: '#3498db' };
		} else return { backgroundColor: '#e1ad21' };
	}

	const THREE_DAYS_IN_MS = 2 * 24 * 60 * 60 * 1000;
	const NOW_IN_MS = new Date().getTime();
	const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS;

	// JSX

	return (
		<>
			<h1 className='mt-5'>Have a look at our latest collection!</h1>
			<div className="d-flex justify-content-center align-items-center flex-row text-center card-container ">
				{carsList && (
					<div
						id="carouselCarControl"
						className="carousel slide me-5"
						data-bs-touch="true"
						data-bs-ride="true"
					>
						<h3 className="mt-5">CARS</h3>	
						<div className="carousel-indicators">
							<button
								type="button"
								data-bs-target="#carouselCarControl"
								data-bs-slide-to="0"
								className="active"
								aria-current="true"
								aria-label="Slide 1"
							></button>
							<button
								type="button"
								data-bs-target="#carouselCarControl"
								data-bs-slide-to="1"
								aria-label="Slide 2"
							></button>
							<button
								type="button"
								data-bs-target="#carouselCarControl"
								data-bs-slide-to="2"
								aria-label="Slide 3"
							></button>
						</div>
						<div className="carousel-inner">
							<div className="carousel-item mb-5 active">
								<div
									key={carsList[0].title}
									className="card bg-secondary d-flex justify-content-center align-items-center"
								>
									<div className="card-body bg-secondary">
										<div className="ribbon ribbon-top-right">
											<span style={styling(carsList[0].ribon)}>
												{carsList[0].ribon}
											</span>
										</div>
										<h5 className="card-title fontAutoSized">
											{carsList[0].title}
										</h5>
										<video
											src={carsList[0].image}
											muted
											loop
											autoPlay
											className="nft1"
										>
                      Your browser does not support the video tag.
										</video>
									</div>
									<button className="btn btn-dark buy-btn">
										<h6>Buy</h6>
									</button>
								</div>
							</div>
							<div className="carousel-item mb-5 ">
								<div
									key={carsList[1].title}
									className="card bg-secondary d-flex justify-content-center align-items-center"
								>
									<div className="card-body bg-secondary">
										<div className="ribbon ribbon-top-right">
											<span style={styling(carsList[1].ribon)}>
												{carsList[1].ribon}
											</span>
										</div>
										<h5 className="card-title fontAutoSized">
											{carsList[1].title}
										</h5>
										<video
											src={carsList[1].image}
											muted
											loop
											autoPlay
											className="nft1"
										>
                      Your browser does not support the video tag.
										</video>
									</div>
									<button className="btn btn-dark buy-btn">
										<h6>Buy</h6>
									</button>
								</div>
							</div>
							<div className="carousel-item mb-5">
								<div
									key={carsList[2].title}
									className="card bg-secondary d-flex justify-content-center align-items-center"
								>
									<div className="card-body bg-secondary">
										<div className="ribbon ribbon-top-right">
											<span style={styling(carsList[2].ribon)}>
												{carsList[2].ribon}
											</span>
										</div>
										<h5 className="card-title fontAutoSized">
											{carsList[2].title}
										</h5>
										<video
											src={carsList[2].image}
											muted
											loop
											autoPlay
											className="nftvideo"
										>
                      Your browser does not support the video tag.
										</video>
									</div>
									<button className="btn btn-dark buy-btn">
										<h6>Buy</h6>
									</button>
								</div>
							</div>
						</div>
						<button
							className="carousel-control-prev"
							type="button"
							data-bs-target="#carouselCarControl"
							data-bs-slide="prev"
						>
							<span
								className="carousel-control-prev-icon"
								aria-hidden="true"
							></span>
							<span className="visually-hidden">Previous</span>
						</button>
						<button
							className="carousel-control-next"
							type="button"
							data-bs-target="#carouselCarControl"
							data-bs-slide="next"
						>
							<span
								className="carousel-control-next-icon"
								aria-hidden="true"
							></span>
							<span className="visually-hidden">Next</span>
						</button>
					</div>








				)}

			

				{racersList && (
					<div
						id="carouselRacerControl"
						className="carousel slide ms-5"
						data-bs-touch="true"
						data-bs-ride="true"
					>
						<h3 className="mt-5">DRIVERS</h3>
						<div className="carousel-indicators">
							<button
								type="button"
								data-bs-target="#carouselRacerControl"
								data-bs-slide-to="0"
								className="active"
								aria-current="true"
								aria-label="Slide 1"
							></button>
							<button
								type="button"
								data-bs-target="#carouselRacerControl"
								data-bs-slide-to="1"
								aria-label="Slide 2"
							></button>
							<button
								type="button"
								data-bs-target="#carouselRacerControl"
								data-bs-slide-to="2"
								aria-label="Slide 3"
							></button>
						</div>
						<div className="carousel-inner">
							<div className="carousel-item mb-5 active">
								<div
									key={racersList[0].title}
									className="card bg-secondary d-flex justify-content-center align-items-center"
								>
									<div className="card-body bg-secondary">
										<div className="ribbon ribbon-top-right">
											<span style={styling(racersList[0].ribon)}>
												{racersList[0].ribon}
											</span>
										</div>
										<h5 className="card-title fontAutoSized">
											{racersList[0].title}
										</h5>
										<video
											src={racersList[0].image}
											muted
											loop
											autoPlay
											className="nft1"
										>
                      Your browser does not support the video tag.
										</video>
									</div>
									<button className="btn btn-dark buy-btn">
										<h6>Buy</h6>
									</button>
								</div>
							</div>
							<div className="carousel-item mb-5 ">
								<div
									key={racersList[1].title}
									className="card bg-secondary d-flex justify-content-center align-items-center"
								>
									<div className="card-body bg-secondary">
										<div className="ribbon ribbon-top-right">
											<span style={styling(racersList[1].ribon)}>
												{racersList[1].ribon}
											</span>
										</div>
										<h5 className="card-title fontAutoSized">
											{racersList[1].title}
										</h5>
										<video
											src={racersList[1].image}
											muted
											loop
											autoPlay
											className="nft1"
										>
                      Your browser does not support the video tag.
										</video>
									</div>
									<button className="btn btn-dark buy-btn">
										<h6>Buy</h6>
									</button>
								</div>
							</div>
							<div className="carousel-item mb-5">
								<div
									key={racersList[2].title}
									className="card bg-secondary d-flex justify-content-center align-items-center"
								>
									<div className="card-body bg-secondary">
										<div className="ribbon ribbon-top-right">
											<span style={styling(racersList[2].ribon)}>
												{racersList[2].ribon}
											</span>
										</div>
										<h5 className="card-title fontAutoSized">
											{racersList[2].title}
										</h5>
										<video
											src={racersList[2].image}
											muted
											loop
											autoPlay
											className="nft1"
										>
                      Your browser does not support the video tag.
										</video>
									</div>
									<button className="btn btn-dark buy-btn">
										<h6>Buy</h6>
									</button>
								</div>
							</div>
						</div>
						<button
							className="carousel-control-prev"
							type="button"
							data-bs-target="#carouselRacerControl"
							data-bs-slide="prev"
						>
							<span
								className="carousel-control-prev-icon"
								aria-hidden="true"
							></span>
							<span className="visually-hidden">Previous</span>
						</button>
						<button
							className="carousel-control-next"
							type="button"
							data-bs-target="#carouselRacerControl"
							data-bs-slide="next"
						>
							<span
								className="carousel-control-next-icon"
								aria-hidden="true"
							></span>
							<span className="visually-hidden">Next</span>
						</button>
					</div>
				)}
			</div>
			<CountDown targetDate={dateTimeAfterThreeDays} />
			<button
				type="button"
				className="btn mt-3 btn-secondary"
				data-bs-toggle="tooltip"
				data-bs-placement="top"
				data-bs-title="This top tooltip is themed via CSS variables."
			>
        WHOLE COLLECTION
			</button>
			
		
		</>
	);
};

export default NFTS;
