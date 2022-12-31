/* eslint-disable react/prop-types */
import React from 'react';
import NFTCard  from './nftGameCard';
import '../styles/nftModal.css';
import { useSelector } from 'react-redux';




const NFTModal = ( {carStats, driverStats} ) => {

	const playerSelected = useSelector(state => state.nftSelector.racerSelected);
	const carNum = useSelector(state => state.nftSelector.carSelected);
	const racerNum = useSelector(state => state.nftSelector.racerSelected);

	return(
		<>

			<div className="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabIndex="-1">
				<div className="modal-dialog modal-xl modal-dialog-scrollable">
					<div className="modal-content">
						<div className="modal-header">
							<h3 className="modal-title" id="exampleModalToggleLabel">SELECT YOUR RACER</h3>
							<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
						</div>
						<div className="modal-body">
							<div className="d-flex flex-wrap justify-content-center">						
								{driverStats && driverStats.map((driver)=><div style={driver.Name === racerNum ? {width:'30%' , opacity:'0.4'}:{width:'30%'} } className='m-2 d-flex justify-content-center align-items-center' key={driver.Name}><NFTCard  key={driver.Name} type={1} nft={driver}/></div>
								)}
							</div>
						</div>
						<div className="modal-footer">
							<button className="btn btn-dark" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal" data-bs-dismiss="modal">NEXT</button>
						</div>
					</div>
				</div>
			</div>
			<div className="modal fade" id="exampleModalToggle2" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabIndex="-1">
				<div className="modal-dialog modal-xl modal-dialog-scrollable">
					<div className="modal-content	">
						<div className="modal-header">
							<h3 className="modal-title" id="exampleModalToggleLabel2">SELECT YOUR CAR</h3>
							<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
						</div>
						<div className="modal-body">
							<div className="d-flex flex-wrap justify-content-center">						
								{carStats && carStats.map((car)=> <div style={car.Name === carNum ? {width:'30%' , opacity:'0.4'}:{width:'30%'} } className='m-2 d-flex justify-content-center align-items-center' key={car.Name}><NFTCard key={car.Name} type={0} nft={car}/></div>)}
							</div>
						</div>
						<div className="modal-footer">
							<button className="btn btn-dark" data-bs-target="#exampleModalToggle" data-bs-toggle="modal" data-bs-dismiss="modal">BACK</button>
							<button className="btn btn-dark" data-bs-target="#exampleModalToggle3" data-bs-toggle="modal" data-bs-dismiss="modal">NEXT</button>
						</div>
					</div>
				</div>
			</div>
			<div className="modal fade" id="exampleModalToggle3" aria-hidden="true" aria-labelledby="exampleModalToggleLabel3" tabIndex="-1">
				<div className="modal-dialog modal-xl modal-dialog-scrollable">
					<div className="modal-content ">
						<div className="modal-header">
							<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
						</div>
						<div className="modal-body d-flex justify-content-center align-items-center flex-column">
							<h2 className='m-2'>YOU HAVE SELECTED:</h2>
							<div className="d-flex flex-wrap justify-content-center">						
								{(racerNum > 0 && carNum > 0 ) ? 
									<><div style={{width:'30%'}} className='m-2 d-flex justify-content-center align-items-center'>
										<NFTCard  key={racerNum} type={1} nft={driverStats[racerNum-1]}/>
									</div>
									<div style={{width:'30%'}} className='m-2 d-flex justify-content-center align-items-center'>
										<NFTCard key={carNum} type={0} nft={carStats[carNum-1]}/>
									</div>
									</>
									:<></>
								}
							</div>
						</div>
						<div className="modal-footer">
							<button className="btn btn-dark" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal" data-bs-dismiss="modal">BACK</button>
							<button className="btn btn-primary" >CONFIRM</button>
						</div>
					</div>
				</div>
			</div>
			
			<a className="btn btn-primary" data-bs-toggle="modal" href="#exampleModalToggle" role="button">{playerSelected ? 'SELECT PLAYER' : 'CHANGE PLAYER'}</a>


			
		</>
	);
};

export default NFTModal;