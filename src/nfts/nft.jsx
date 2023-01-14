import React, { useEffect, useState } from 'react';
import '../styles/nft.css';
import CountDown from '../components/countdown';
// import car1Nft from '../assets/videos/Car1.mp4';
import car1Nft from '../assets/videos/Mercedes Benz.mp4';
import car2Nft from '../assets/videos/McLaren.mp4';
import car3Nft from '../assets/videos/Space-Racecar.mp4';
import car4Nft from '../assets/videos/Truck.mp4';
import car5Nft from '../assets/videos/Mazda.mp4';
import car6Nft from '../assets/videos/NASCAR.mp4';
import car7Nft from '../assets/videos/Ferrari.mp4';
import car8Nft from '../assets/videos/SUV.mp4';
import car9Nft from '../assets/videos/Alfo_Romeo.mp4';
import car10Nft from '../assets/videos/Porsche_Singer.mp4';
import car11Nft from '../assets/videos/Nissan_GTR.mp4';
import car12Nft from '../assets/videos/Mini_Cooper.mp4';





import nft2 from '../assets/videos/Racer1.MP4';

let carOne = {
	id: 0,
	title: 'Mercedes Benz',
	ribon: 'common',
	image: car1Nft,
};
let carTwo = {
	id: 1,
	title: 'McLaren',
	ribon: 'rare',
	image: car2Nft,
};
let carThree = {
	id: 2,
	title: 'Space Race Car',
	ribon: 'epic',
	image: car3Nft,
};
let carFour = {
	id: 3,
	title: 'Truck',
	ribon: 'epic',
	image: car4Nft,
};
let car5 = {
	id: 3,
	title: 'Mazda',
	ribon: 'rare',
	image: car5Nft,
};	
let car6 = {
	id: 3,
	title: 'NASCAR',
	ribon: 'epic',
	image: car6Nft,
};	
let car7 = {
	id: 3,
	title: 'Ferrari',
	ribon: 'rare',
	image: car7Nft,
};	
let car8 = {
	id: 3,
	title: 'SUV',
	ribon: 'common',
	image: car8Nft,
};	
let car9 = {
	id: 3,
	title: 'Alfo Romeo',
	ribon: 'rare',
	image: car9Nft,
};	
let car10 = {
	id: 3,
	title: 'Porsche Singer',
	ribon: 'epic',
	image: car10Nft,
};	
let car11 = {
	id: 3,
	title: 'Nissan GTR',
	ribon: 'epic',
	image: car11Nft,
};	
let car12 = {
	id: 3,
	title: 'Mini Cooper',
	ribon: 'rare',
	image: car12Nft,
};	

let cars = [carOne, carTwo, carThree, carFour, car5, car6, car7, car8, car9, car10, car11, car12];

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
							<button
								type="button"
								data-bs-target="#carouselCarControl"
								data-bs-slide-to="3"
								aria-label="Slide 4"
							></button>
							<button
								type="button"
								data-bs-target="#carouselCarControl"
								data-bs-slide-to="4"
								aria-label="Slide 5"
							></button>
							<button
								type="button"
								data-bs-target="#carouselCarControl"
								data-bs-slide-to="5"
								aria-label="Slide 6"
							></button>
							<button
								type="button"
								data-bs-target="#carouselCarControl"
								data-bs-slide-to="6"
								aria-label="Slide 7"
							></button>
							<button
								type="button"
								data-bs-target="#carouselCarControl"
								data-bs-slide-to="7"
								aria-label="Slide 8"
							></button>
							<button
								type="button"
								data-bs-target="#carouselCarControl"
								data-bs-slide-to="8"
								aria-label="Slide 9"
							></button>
							<button
								type="button"
								data-bs-target="#carouselCarControl"
								data-bs-slide-to="9"
								aria-label="Slide 10"
							></button>
							<button
								type="button"
								data-bs-target="#carouselCarControl"
								data-bs-slide-to="10"
								aria-label="Slide 11"
							></button>
							<button
								type="button"
								data-bs-target="#carouselCarControl"
								data-bs-slide-to="11"
								aria-label="Slide 12"
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
									key={carsList[3].title}
									className="card bg-secondary d-flex justify-content-center align-items-center"
								>
									<div className="card-body bg-secondary">
										<div className="ribbon ribbon-top-right">
											<span style={styling(carsList[3].ribon)}>
												{carsList[3].ribon}
											</span>
										</div>
										<h5 className="card-title fontAutoSized">
											{carsList[3].title}
										</h5>
										<video
											src={carsList[3].image}
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
									key={carsList[4].title}
									className="card bg-secondary d-flex justify-content-center align-items-center"
								>
									<div className="card-body bg-secondary">
										<div className="ribbon ribbon-top-right">
											<span style={styling(carsList[4].ribon)}>
												{carsList[4].ribon}
											</span>
										</div>
										<h5 className="card-title fontAutoSized">
											{carsList[4].title}
										</h5>
										<video
											src={carsList[4].image}
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
									key={carsList[5].title}
									className="card bg-secondary d-flex justify-content-center align-items-center"
								>
									<div className="card-body bg-secondary">
										<div className="ribbon ribbon-top-right">
											<span style={styling(carsList[5].ribon)}>
												{carsList[5].ribon}
											</span>
										</div>
										<h5 className="card-title fontAutoSized">
											{carsList[5].title}
										</h5>
										<video
											src={carsList[5].image}
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
									key={carsList[6].title}
									className="card bg-secondary d-flex justify-content-center align-items-center"
								>
									<div className="card-body bg-secondary">
										<div className="ribbon ribbon-top-right">
											<span style={styling(carsList[6].ribon)}>
												{carsList[6].ribon}
											</span>
										</div>
										<h5 className="card-title fontAutoSized">
											{carsList[6].title}
										</h5>
										<video
											src={carsList[6].image}
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
									key={carsList[7].title}
									className="card bg-secondary d-flex justify-content-center align-items-center"
								>
									<div className="card-body bg-secondary">
										<div className="ribbon ribbon-top-right">
											<span style={styling(carsList[7].ribon)}>
												{carsList[7].ribon}
											</span>
										</div>
										<h5 className="card-title fontAutoSized">
											{carsList[7].title}
										</h5>
										<video
											src={carsList[7].image}
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
									key={carsList[8].title}
									className="card bg-secondary d-flex justify-content-center align-items-center"
								>
									<div className="card-body bg-secondary">
										<div className="ribbon ribbon-top-right">
											<span style={styling(carsList[8].ribon)}>
												{carsList[8].ribon}
											</span>
										</div>
										<h5 className="card-title fontAutoSized">
											{carsList[8].title}
										</h5>
										<video
											src={carsList[8].image}
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
									key={carsList[9].title}
									className="card bg-secondary d-flex justify-content-center align-items-center"
								>
									<div className="card-body bg-secondary">
										<div className="ribbon ribbon-top-right">
											<span style={styling(carsList[9].ribon)}>
												{carsList[9].ribon}
											</span>
										</div>
										<h5 className="card-title fontAutoSized">
											{carsList[9].title}
										</h5>
										<video
											src={carsList[9].image}
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
									key={carsList[10].title}
									className="card bg-secondary d-flex justify-content-center align-items-center"
								>
									<div className="card-body bg-secondary">
										<div className="ribbon ribbon-top-right">
											<span style={styling(carsList[10].ribon)}>
												{carsList[10].ribon}
											</span>
										</div>
										<h5 className="card-title fontAutoSized">
											{carsList[10].title}
										</h5>
										<video
											src={carsList[10].image}
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
									key={carsList[11].title}
									className="card bg-secondary d-flex justify-content-center align-items-center"
								>
									<div className="card-body bg-secondary">
										<div className="ribbon ribbon-top-right">
											<span style={styling(carsList[11].ribon)}>
												{carsList[11].ribon}
											</span>
										</div>
										<h5 className="card-title fontAutoSized">
											{carsList[11].title}
										</h5>
										<video
											src={carsList[11].image}
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
