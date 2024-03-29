/* eslint-disable react/prop-types */
import React from 'react';

import '../styles/nft.css';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';


import { selectRacer, selectCar } from './nftSlice';


const NFTCard = ({type, nft}) =>{
	
	const carNum = useSelector(state => state.nftSelector.carSelected);
	const racerNum = useSelector(state => state.nftSelector.racerSelected);
	const dispatching = useDispatch();
	const selectedCar = carNum && type === 0 && carNum === nft.id;
	const selectedRacer = racerNum && type === 1 && racerNum === nft.id;



	const barPerc = (per) => {
		return ((per * 100)/10000);
	};
	
	return(	
		<>
			<div
				key={nft.name}
				className="card bg-secondary d-flex justify-content-center align-items-center"
			>
				<div className="card-body bg-secondary">
					<h5 className="card-title text-center mb-3 fontAutoSized">
						{nft.name}
					</h5>
					<img className="nft1" src={`https://ipfs.io/ipfs/${nft.image.slice(7)}`}></img>
					{
						<div className='d-flex justify-content-start flex-column m-3'>
							<div className='d-flex align-items-center justify-content-start flex-column'>
								<span>{type === 0 ? 'MaximumSpeed:' : 'Experience'}</span> 	
								<div className="progress ms-1 w-100" style={{height: '2.3vh'}}>
									<div className="progress-bar bar-progress progress-bar-striped progress-bar-animated" role="progressbar" aria-label="Example with label" style={{width:`${barPerc(type === 0 ? nft.maximumspeed : nft.experience)}%`}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"><span>{type === 0 ? nft.MaximumSpeed : nft.Experience}</span></div>
								</div>
							</div>
							<div className='d-flex align-items-center justify-content-start flex-column'>
								<span>{type === 0 ? 'Acceleration:' : 'Aggressiveness'}</span> 
								<div className="progress ms-1 w-100" style={{height: '2.3vh'}}>
									<div className="progress-bar bar-progress progress-bar-striped progress-bar-animated" role="progressbar" aria-label="Example with label" style={{width:`${barPerc(type === 0 ? nft.acceleration : nft.aggressiveness)}%`}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"><span>{type === 0 ? nft.Acceleration : nft.Aggressiveness}</span></div>
								</div>
							</div>
							<div className='d-flex align-items-center justify-content-start flex-column'>
								<span>{type === 0 ? 'Cornering:' : 'Reflexes'}</span> 
								<div className="progress ms-1 w-100" style={{height: '2.3vh'}}>
									<div className="progress-bar bar-progress progress-bar-striped progress-bar-animated" role="progressbar" aria-label="Example with label" style={{width:`${barPerc(type === 0 ? nft.cornering : nft.reflexes)}%`}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"><span>{type === 0 ? nft.Cornering : nft.Reflexes}</span></div>
								</div>
							</div>
							<div className='d-flex align-items-center justify-content-start flex-column'>
								<span>{type === 0 ? 'Aerodynamics:' : 'Luck'}</span> 
								<div className="progress ms-1 w-100" style={{height: '2.3vh'}}>
									<div className="progress-bar bar-progress progress-bar-striped progress-bar-animated" role="progressbar" aria-label="Example with label" style={{width:`${barPerc(type === 0 ? nft.aerodynamics : nft.luck)}%`}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"><span>{type === 0 ? nft.Aerodynamics : nft.Luck}</span></div>
								</div>
							</div>
						</div>
					}
				</div>
				<button data-bs-target={type===0 ? '#exampleModalToggle3':'#exampleModalToggle2' } disabled={selectedCar || selectedRacer ? true : false} data-bs-toggle="modal" data-bs-dismiss="modal" onClick={() => dispatching(type === 0 ? selectCar(nft.id) : selectRacer(nft.id))} className="btn btn-dark buy-btn mb-3">
					<h6>{selectedCar || selectedRacer ? 'Selected' : 'Select'}</h6>
				</button>
			</div>
		
				

		</>

	);
};

export default NFTCard;

