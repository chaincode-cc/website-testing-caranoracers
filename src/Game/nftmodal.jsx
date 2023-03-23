/* eslint-disable react/prop-types */
import React from 'react';
import NFTCard  from './nftGameCard';

import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setPlayerSelected } from './nftSlice';
import spinner from '../assets/videos/start.mp4';
import { getRacerbyId, getCarbyId } from '../services/helpers';


const NFTModal = ( {driverStats, carStats} ) => {

	const carSelected = useSelector(state => state.nftSelector.carSelected);
	const racerSelected = useSelector(state => state.nftSelector.racerSelected);
	const playerSelectedVar = useSelector(state => state.nftSelector.playerSelected);
	const dispatching = useDispatch();



	return(
		<>
			<div className="modal fade bg-dark" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabIndex="-1">
				<div className="modal-dialog modal-xl modal-dialog-scrollable">
					<div className="modal-content ">
						<div className="modal-header customedBg">
							<h3 className="modal-title " id="exampleModalToggleLabel">SELECT YOUR RACER</h3>
							<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
						</div>
						<div className="modal-body customedBg">
							<div className="d-flex flex-wrap justify-content-center">						
								{driverStats ? driverStats.map((driver)=><div style={driver.Name === racerSelected ? {width:'30%' , opacity:'0.4'}:{width:'30%'} } className='m-2 d-flex justify-content-center align-items-center' key={driver.id}><NFTCard  key={driver.id} type={1} nft={driver} /></div>
								) : <img src={spinner}/>}
							</div>
						</div>
						<div className="modal-footer" id='customedBg'>
							<button className="btn btn-dark" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal" data-bs-dismiss="modal">NEXT</button>
						</div>
					</div>
				</div>
			</div>
			<div className="modal fade bg-dark" id="exampleModalToggle2" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabIndex="-1">
				<div className="modal-dialog modal-xl modal-dialog-scrollable">
					<div className="modal-content">
						<div className="modal-header customedBg">
							<h3 className="modal-title" id="exampleModalToggleLabel2">SELECT YOUR CAR</h3>
							<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
						</div>
						<div className="modal-body customedBg">
							<div className="d-flex flex-wrap justify-content-center">						
								{carStats ? carStats.map((car)=> <div style={car.Name === carSelected ? {width:'30%' , opacity:'0.4'}:{width:'30%'} } className='m-2 d-flex justify-content-center align-items-center' key={car.id}><NFTCard key={car.id} type={0} nft={car}/></div>): <img src={spinner}/>}
							</div>
						</div>
						<div className="modal-footer"  id='customedBg'>
							<button className="btn btn-dark" data-bs-target="#exampleModalToggle" data-bs-toggle="modal" data-bs-dismiss="modal">BACK</button>
							<button className="btn btn-dark" data-bs-target="#exampleModalToggle3" data-bs-toggle="modal" data-bs-dismiss="modal">NEXT</button>
						</div>
					</div>
				</div>
			</div> 
			<div className="modal fade bg-dark" id="exampleModalToggle3" aria-hidden="true" aria-labelledby="exampleModalToggleLabel3" tabIndex="-1">
				<div className="modal-dialog modal-xl modal-dialog-scrollable">
					<div className="modal-content ">
						<div className="modal-header customedBg">
							<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
						</div>
						<div className="modal-body customedBg d-flex justify-content-center align-items-center flex-column">
							
							<h2 className='m-2'>{(racerSelected > 0 && carSelected > 0 ) ? 'YOU HAVE SELECTED:' : ''}</h2>
							<div className="d-flex flex-wrap justify-content-center">
														
								{(racerSelected && carSelected ) ? 
									<>
										<div style={{width:'30%'}} className='m-2 d-flex justify-content-center align-items-center'>
											<NFTCard  key={racerSelected} type={1} nft={getRacerbyId(driverStats, racerSelected)}/>
										</div>
										<div style={{width:'30%'}} className='m-2 d-flex justify-content-center align-items-center'>
											<NFTCard key={carSelected} type={0} nft={getCarbyId(carStats, carSelected)}/>
										</div>
									</>
									:<><h2 className='m-2'>PEASE SELECT A RACER AND A CAR</h2></>
								}
							</div>
						</div>
						<div className="modal-footer" id='customedBg'>
							<button className="btn btn-dark" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal" data-bs-dismiss="modal">BACK</button>
							<button onClick={() => dispatching(setPlayerSelected(true))} type="button" data-bs-dismiss="modal" aria-label="Confirm" className="btn btn-primary" >CONFIRM</button>
						</div>
					</div>
				</div>
			</div>
			
			<a className="btn btn-secondary btn-lg" data-bs-toggle="modal" href="#exampleModalToggle" role="button">{playerSelectedVar ? 'CHANGE PLAYER' : 'SELECT PLAYER'}</a>


			
		</>
	);
};

export default NFTModal;