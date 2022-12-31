/* eslint-disable react/prop-types */
import React from 'react';
import car from '../assets/videos/Car1.mp4';
import racer from '../assets/videos/Racer1.MP4';
import '../styles/nft.css';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';


import { selectRacer, selectCar } from './nftSlice';


const NFTCard = ({type, nft}) =>{
	
	const carNum = useSelector(state => state.nftSelector.carSelected);
	const racerNum = useSelector(state => state.nftSelector.racerSelected);
	const dispatching = useDispatch();
	const selectedCar = type === 0 && carNum == nft.Name && carNum > 0;
	const selectedRacer = type === 1 && racerNum == nft.Name && racerNum > 0;


	const barPerc = (per) => {
		return ((per * 100)/10000);
	};
	
	return(	
		<>
			<div
				key={nft.Name}
				className="card bg-secondary d-flex justify-content-center align-items-center"
			>
				<div className="card-body bg-secondary">
					<h5 className="card-title text-center mb-3 fontAutoSized">
						{nft.Name}
					</h5>
					<video
						src={type === 0 ? car : racer}
						muted
						loop
						autoPlay
						className="nft1"
					>
                      Your browser does not support the video tag.
					</video>
					{
						<div className='d-flex justify-content-start flex-column m-3'>
							<div className='d-flex align-items-center justify-content-start flex-column'>
								<span>{type === 0 ? 'MaximumSpeed:' : 'Experience'}</span> 	
								<div className="progress ms-1 w-100" style={{height: '2.3vh'}}>
									<div className="progress-bar bar-progress progress-bar-striped progress-bar-animated" role="progressbar" aria-label="Example with label" style={{width:`${barPerc(type === 0 ? nft.MaximumSpeed : nft.Experience)}%`}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"><span>{type === 0 ? nft.MaximumSpeed : nft.Experience}</span></div>
								</div>
							</div>
							<div className='d-flex align-items-center justify-content-start flex-column'>
								<span>{type === 0 ? 'Acceleration:' : 'Aggressiveness'}</span> 
								<div className="progress ms-1 w-100" style={{height: '2.3vh'}}>
									<div className="progress-bar bar-progress progress-bar-striped progress-bar-animated" role="progressbar" aria-label="Example with label" style={{width:`${barPerc(type === 0 ? nft.Acceleration : nft.Aggressiveness)}%`}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"><span>{type === 0 ? nft.Acceleration : nft.Aggressiveness}</span></div>
								</div>
							</div>
							<div className='d-flex align-items-center justify-content-start flex-column'>
								<span>{type === 0 ? 'Cornering:' : 'Reflexes'}</span> 
								<div className="progress ms-1 w-100" style={{height: '2.3vh'}}>
									<div className="progress-bar bar-progress progress-bar-striped progress-bar-animated" role="progressbar" aria-label="Example with label" style={{width:`${barPerc(type === 0 ? nft.Cornering : nft.Reflexes)}%`}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"><span>{type === 0 ? nft.Cornering : nft.Reflexes}</span></div>
								</div>
							</div>
							<div className='d-flex align-items-center justify-content-start flex-column'>
								<span>{type === 0 ? 'Aerodynamics:' : 'Luck'}</span> 
								<div className="progress ms-1 w-100" style={{height: '2.3vh'}}>
									<div className="progress-bar bar-progress progress-bar-striped progress-bar-animated" role="progressbar" aria-label="Example with label" style={{width:`${barPerc(type === 0 ? nft.Aerodynamics : nft.Luck)}%`}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"><span>{type === 0 ? nft.Aerodynamics : nft.Luck}</span></div>
								</div>
							</div>
						</div>
					}
				</div>
				<button data-bs-target={type===0 ? '#exampleModalToggle3':'#exampleModalToggle2' } disabled={selectedCar || selectedRacer ? true : false} data-bs-toggle="modal" data-bs-dismiss="modal" onClick={() => dispatching(type === 0 ? selectCar(nft.Name) : selectRacer(nft.Name))} className="btn btn-dark buy-btn mb-3">
					<h6>{selectedCar || selectedRacer ? 'Selected' : 'Select'}</h6>
				</button>
			</div>
		
				

		</>

	);
};

export default NFTCard;

