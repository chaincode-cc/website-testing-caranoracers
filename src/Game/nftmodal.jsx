/* eslint-disable react/prop-types */
import React from 'react';
import NFTCard  from './nftGameCard';

import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { playerSelected } from './nftSlice';



const NFTModal = ( {driverStats, carStats} ) => {

	const carNum = useSelector(state => state.nftSelector.carSelected);
	const racerNum = useSelector(state => state.nftSelector.racerSelected);
	const playerSelectedVar = useSelector(state => state.nftSelector.playerSelected);

	const dispatching = useDispatch();

	console.log('DRIVERS',driverStats);
	console.log('Cars',carStats);
	return(
		<>
			{/* {driverStats}{carStats} */}
			<div className="modal fade bg-dark" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabIndex="-1">
				<div className="modal-dialog modal-xl modal-dialog-scrollable">
					<div className="modal-content ">
						<div className="modal-header customedBg">
							<h3 className="modal-title " id="exampleModalToggleLabel">SELECT YOUR RACER</h3>
							<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
						</div>
						<div className="modal-body customedBg">
							<div className="d-flex flex-wrap justify-content-center">						
								{driverStats && driverStats.map((driver)=><div style={driver.Name === racerNum ? {width:'30%' , opacity:'0.4'}:{width:'30%'} } className='m-2 d-flex justify-content-center align-items-center' key={driver.id}><NFTCard  key={driver.id} type={1} nft={driver}/></div>
								)}
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
								{carStats && carStats.map((car)=> <div style={car.Name === carNum ? {width:'30%' , opacity:'0.4'}:{width:'30%'} } className='m-2 d-flex justify-content-center align-items-center' key={car.id}><NFTCard key={car.id} type={0} nft={car}/></div>)}
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
							
							<h2 className='m-2'>{(racerNum > 0 && carNum > 0 ) ? 'YOU HAVE SELECTED:' : ''}</h2>
							<div className="d-flex flex-wrap justify-content-center">
														
								{(racerNum > 0 && carNum > 0 ) ? 
									<>
										<div style={{width:'30%'}} className='m-2 d-flex justify-content-center align-items-center'>
											<NFTCard  key={racerNum} type={1} nft={driverStats[racerNum-1]}/>
										</div>
										<div style={{width:'30%'}} className='m-2 d-flex justify-content-center align-items-center'>
											<NFTCard key={carNum} type={0} nft={carStats[carNum-1]}/>
										</div>
									</>
									:<><h2 className='m-2'>PEASE SELECT A RACER AND A CAR</h2></>
								}
							</div>
						</div>
						<div className="modal-footer" id='customedBg'>
							<button className="btn btn-dark" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal" data-bs-dismiss="modal">BACK</button>
							<button onClick={() => dispatching(playerSelected())} type="button" data-bs-dismiss="modal" aria-label="Confirm" className="btn btn-primary" >CONFIRM</button>
						</div>
					</div>
				</div>
			</div>
			
			<a className="btn btn-secondary" data-bs-toggle="modal" href="#exampleModalToggle" role="button">{playerSelectedVar ? 'CHANGE PLAYER' : 'SELECT PLAYER'}</a>


			
		</>
	);
};

export default NFTModal;