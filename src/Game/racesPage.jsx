import React from 'react';
import { setPlayers } from './nftSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';


import '../styles/game.css';

const RacesPage = () =>{

	const navigate = useNavigate();
	const dispatch = useDispatch();

	function handleUpdatePlayers(newPlayers) {
		dispatch(setPlayers(newPlayers));
		localStorage.setItem('players', newPlayers);
		navigate('/game');
	}

	const unlimitedNum =  Math.round(Math.random() * (100 - 12) + 12);

	
	return(
		<div className='d-flex justify-content-center mainBg mb-5'>
			<div className='d-flex flex-column'>
					
				<div className="card bg-dark text-white text-center noLink" style={{width:'200%', marginTop:'20%'}}>
					<div className="card-header mt-2 ">
						<h4>HEAD TO HEAD</h4>
					</div>
					<div className="card-body mb-2">
						<p className="card-text">NUMBER OF PARTICIPANTS: 2 PLAYERS</p>
						<p className="card-text">ENTRY FEE: 10 NITRO</p>
						<p>PLACES PAID:</p>
						<div className="card-text  d-flex flex-row  justify-content-center align-items-center">
							<div className="list-group w-25 list-group-custom d-flex flex-row  justify-content-center align-items-center">
								<div className="list-group-item ">1st: 10 ADA</div>
							</div>
						</div>
						<button className="mt-3 race-button" onClick={() => handleUpdatePlayers(2)}>ENTER RACE</button>
					</div>
				</div>

				<div className="card bg-dark text-white text-center noLink" style={{width:'200%', marginTop:'20%'}}>
					<div className="card-header mt-2 ">
						<h4>TURBO</h4>
					</div>
					<div className="card-body mb-2">
						<p className="card-text">NUMBER OF PARTICIPANTS: 20 PLAYERS</p>
						<p className="card-text">ENTRY FEE: 20 NITRO</p>
						<p>PLACES PAID:</p>
						<div className="card-text  d-flex flex-row  justify-content-center align-items-center">
							<div className="list-group w-25 list-group-custom d-flex flex-row  justify-content-center align-items-center">
								<div className="list-group-item ">1st: 20 ADA</div>
							
							</div>
						</div>
						<button className="mt-3 race-button" onClick={() => handleUpdatePlayers(20)}>ENTER RACE</button>
					</div>
				</div>

				<div className="card bg-dark text-white text-center noLink" style={{width:'200%', marginTop:'20%'}}>
					<div className="card-header mt-2 ">
						<h4>FREE ROLL</h4>
					</div>
					<div className="card-body  mb-2">
						<p className="card-text">NUMBER OF PARTICIPANTS: {unlimitedNum} PLAYERS</p>
						<p className="card-text ">ENTRY FEE: NONE</p>
						<p>PLACES PAID:</p>
						<div className="card-text  d-flex flex-row  justify-content-center align-items-center">
							<div className="list-group list-group-custom d-flex flex-row  justify-content-center align-items-center">
								<div className="list-group-item ">1st: 40 ADA</div>
								<div className="list-group-item">2nd: 30 ADA</div>
								<div className="list-group-item">3rd: 20 ADA</div>
							</div>
						</div>
						<button className="mt-3 race-button" onClick={() => handleUpdatePlayers(unlimitedNum)}>ENTER RACE</button>
					</div>

				</div>
			</div>
		</div>

	);
};


export default RacesPage;