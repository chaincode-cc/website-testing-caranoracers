import React, { useEffect, useState } from 'react';
import '../styles/nft.css';
import CountDown from '../components/countdown';
import Zoom from 'react-medium-image-zoom';
import axios from 'axios';
import '../styles/zoom.css';





let carOne = {
	id: 0,
	title: 'Mercedes Benz',
	ribon: 'common',
	image: null,
};
let carTwo = {
	id: 1,
	title: 'McLaren',
	ribon: 'rare',
	image: null,
};
let carThree = {
	id: 2,
	title: 'Space Race Car',
	ribon: 'epic',
	image: null,
};
let carFour = {
	id: 3,
	title: 'Truck',
	ribon: 'epic',
	image: null,
};
let car5 = {
	id: 3,
	title: 'Mazda',
	ribon: 'rare',
	image: null,
};	
let car6 = {
	id: 3,
	title: 'NASCAR',
	ribon: 'epic',
	image: null,
};	
let car7 = {
	id: 3,
	title: 'Ferrari',	
	ribon: 'rare',
	image: null,
};	
let car8 = {
	id: 3,
	title: 'SUV',
	ribon: 'common',
	image: null,
};	
let car9 = {
	id: 3,
	title: 'Alfo Romeo',
	ribon: 'rare',
	image: null,
};	
let car10 = {
	id: 3,
	title: 'Porsche Singer',
	ribon: 'epic',
	image: null,
};	
let car11 = {
	id: 3,
	title: 'Nissan GTR',
	ribon: 'epic',
	image: null,
};	
let car12 = {
	id: 3,
	title: 'Mini Cooper',
	ribon: 'rare',
	image: null,
};	

let cars = [carOne, carTwo, carThree, carFour, car5, car6, car7, car8, car9, car10, car11, car12];

let racerOne = {
	id: 0,
	title: 'Orange',
	ribon: 'common',
	image: null,
};
let racerTwo = {
	id: 1,
	title: 'Average',
	ribon: 'rare',
	image: null,
};
let racerThree = {
	id: 2,
	title: 'Bombshell',
	ribon: 'epic',
	image: null,
};
let racerFour = {
	id: 3,
	title: 'Muscles',
	ribon: 'common',
	image: null,
};
let racerFive = {
	id: 4,
	title: 'Doughnut',
	ribon: 'rare',
	image: null,
};

let racers = [racerOne, racerTwo, racerThree, racerFour, racerFive];
const policy = '63399e872d85c369cebc775611ecd32a834891f907e9e0b25370c372';
const NFTS = () => {
	const [carsList, setCars] = useState();
	const [racersList, setRacers] = useState();
	const [ assets, setAsset ] = useState([]);
	const [ assetNames, setAddr ] = useState([]);
	


	useEffect(() => {
		const getAddr = async () => {
			try {
				const { data } = await axios.post('https://preprod.koios.rest/api/v0/address_assets', {
					'_addresses': [
						'addr_test1vq2zcwyyl3n7aqfrjrp8kt75w9wz26l706g7femgtkhtcggcxxr84'
					]
				});
				let names = data.map(x => x.asset_list).map(x=>x.filter((x)=> {return x.policy_id === policy;})).map(x=>x.map(x=>x.asset_name));
				setAddr(names);
				console.log(names);
				for (let i = 0; i< names.length; i++){
					try { 
						{
							const { data } = await axios.get(`https://preprod.koios.rest/api/v0/asset_info?_asset_policy=63399e872d85c369cebc775611ecd32a834891f907e9e0b25370c372&_asset_name=${names[0]}`);
							setAsset(oldArray => [...oldArray, data]);
						}
					
					} catch (err) {
						console.log(err);
					}
				}
			} catch (err) {
				console.log(err);
			}
		};
		getAddr(); 
	}, []);

	// useEffect(() => {
	
	
	// 	const getMetaData = async () => {
	// 		for (let i = 0; i< assetNames.length; i++){
	// 			try { 
	// 				{
	// 					const { data } = await axios(`https://preprod.koios.rest/api/v0/asset_info?_asset_policy=63399e872d85c369cebc775611ecd32a834891f907e9e0b25370c372&_asset_name=${assetNames[i]}`);
	// 					setAsset(oldArray => [...oldArray, data]);
	// 				}
				
	// 			} catch (err) {
	// 				console.log(err);
	// 			}
	// 		}
	// 	};
	// 	getMetaData(); 
	// }, []);

	
	console.log('adsfsfsefg', assetNames);
 
	console.log('THIS', assets);
	

		

	useEffect(() => {
		setCars(cars);
		setRacers(racers);
	}, []);

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
											{carsList[0].title} THIS ONE
										</h5>
										<Zoom>
											<img
												src={carsList[0].image}
												className="nft1"
											/>
										</Zoom>
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
										<Zoom>
											<img
												src={carsList[1].image}
												className="nft1"
											/>
										</Zoom>
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
										<Zoom>
											<img
												src={carsList[2].image}
												className="nft1"
											/>
										</Zoom>
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
										<Zoom>
											<img
												src={carsList[3].image}
												className="nft1"
											/>
										</Zoom>
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
										<Zoom>
											<img
												src={carsList[4].image}
												className="nft1"
											/>
										</Zoom>
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
										<Zoom>
											<img
												src={carsList[5].image}
												className="nft1"
											/>
										</Zoom>
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
										<Zoom>
											<img
												src={carsList[6].image}
												className="nft1"
											/>
										</Zoom>
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
										<Zoom>
											<img
												src={carsList[7].image}
												className="nft1"
											/>
										</Zoom>
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
										<Zoom>
											<img
												src={carsList[8].image}
												className="nft1"
											/>
										</Zoom>
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
										<Zoom>
											<img
												src={carsList[9].image}
												className="nft1"
											/>
										</Zoom>
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
										<Zoom>
											<img
												src={carsList[10].image}
												className="nft1"
											/>
										</Zoom>
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
										<Zoom>
											<img
												src={carsList[11].image}
												className="nft1"
											/>
										</Zoom>
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
							<button
								type="button"
								data-bs-target="#carouselRacerControl"
								data-bs-slide-to="3"
								aria-label="Slide 4"
							></button>
							<button
								type="button"
								data-bs-target="#carouselRacerControl"
								data-bs-slide-to="4"
								aria-label="Slide 5"
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
										<Zoom>
											<img
												src={racersList[0].image}
												className="nft1"
											/>
										</Zoom>
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
										<Zoom>
											<img
												src={racersList[1].image}
												className="nft1"
											/>
										</Zoom>
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
										<Zoom>
											<img
												src={racersList[2].image}
												className="nft1"
											/>
										</Zoom>
									</div>
									<button className="btn btn-dark buy-btn">
										<h6>Buy</h6>
									</button>
								</div>
							</div>
							<div className="carousel-item mb-5 active">
								<div
									key={racersList[3].title}
									className="card bg-secondary d-flex justify-content-center align-items-center"
								>
									<div className="card-body bg-secondary">
										<div className="ribbon ribbon-top-right">
											<span style={styling(racersList[3].ribon)}>
												{racersList[3].ribon}
											</span>
										</div>
										<h5 className="card-title fontAutoSized">
											{racersList[3].title}
										</h5>
										<Zoom>
											<img
												src={racersList[3].image}
												className="nft1"
											/>
										</Zoom>
									</div>
									<button className="btn btn-dark buy-btn">
										<h6>Buy</h6>
									</button>
								</div>
							</div>
							<div className="carousel-item mb-5 active">
								<div
									key={racersList[4].title}
									className="card bg-secondary d-flex justify-content-center align-items-center"
								>
									<div className="card-body bg-secondary">
										<div className="ribbon ribbon-top-right">
											<span style={styling(racersList[4].ribon)}>
												{racersList[4].ribon}
											</span>
										</div>
										<h5 className="card-title fontAutoSized">
											{racersList[4].title}
										</h5>
										<Zoom>
											<img
												src={racersList[4].image}
												className="nft1"
												style={{
													backgroundColor: 'black',
												}}
											/>
										</Zoom>
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
