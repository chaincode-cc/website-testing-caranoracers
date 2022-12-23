import React from 'react';
import gif from '../assets/videos/Car1.mp4';
import '../styles/nft.css';

export const NFTCard = (nft) =>{
   
	return(
		<div>					
			{nft.map( nft => 
				<div key={nft.Name} className="card bg-secondary d-flex justify-content-center align-items-center flex-column">
					<div className="card-body bg-secondary d-flex justify-content-center align-items-center flex-column">
						<div className="card-title fontAutoSized d-flex justify-content-center align-items-center flex-column">
							<h3>{nft.Name}</h3>
						</div>
						<video
							src={gif}
							muted
							loop
							autoPlay
							className="nft1"
						>
                      Your browser does not support the video tag.
						</video>
					</div>
					{
						<div className='d-flex justify-content-start align-items-left flex-column m-3' style={{margin:'0'}}>
							<span>MaximumSpeed: {nft.MaximumSpeed}</span>
							<span>Acceleration: {nft.Acceleration}</span>
							<span>Cornering: {nft.Cornering}</span>
							<span>Aerodynamics: {nft.Aerodynamics} km</span>
						</div>
					}
					<button className="btn btn-dark buy-btn mb-3">
						<h6>SELECT</h6>
					</button>
				</div>)}
		</div>
	);
};


export const circuitNFTCard = (nft) =>{
	return(
		<div>					
			{<div className="card bg-secondary d-flex justify-content-center align-items-center flex-column">
				<div className="card-body bg-secondary d-flex justify-content-center align-items-center flex-column">
					<div className="card-title fontAutoSized d-flex justify-content-center align-items-center flex-column">
						<h1>Racing circuit</h1>
						<div>Name</div>
					</div>
					<video
						src={gif}
						muted
						loop
						autoPlay
						className="nft1"
						style={{ width: '100px',
							height: '100px'}}
					>
                      Your browser does not support the video tag.
					</video>
				</div>
				{nft.raceMap && (
					<div className='d-flex justify-content-start align-items-left flex-column m-3' style={{margin:'0'}}>
						<span>Weather: {nft.RaceWeather}</span  >
						<span>Straigthaways: {nft.raceMap.straigthaways}</span>
						<span>Turns: {nft.raceMap.turns}</span>
						<span>Lap length: {nft.raceMap.lapLength.toFixed(2)} km</span>
					</div>
				)}
			</div>}
		</div>

	);
};
