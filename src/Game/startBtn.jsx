import React from 'react';
import { setPlayers } from './nftSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const StartBtn = () =>{

	const navigate = useNavigate();
	const dispatch = useDispatch();

	function handleUpdatePlayers(newPlayers) {
		dispatch(setPlayers(newPlayers));
		localStorage.setItem('players', newPlayers);
		navigate('/game');
	}

	const unlimitedNum =  Math.round(Math.random() * (100 - 12) + 12);

	
	return(
		<div className='d-flex justify-content-center mainBg'>
			<div className='d-flex flex-column'>
				<div className="card text-center noLink text-body" style={{width:'200%', height:'34vh', marginTop:'20%'}}>
					<div className="card-header">
        Featured Race
					</div>
					<div className="card-body">
						<h5 className="card-title text-body">HEAD TO HEAD</h5>
						<p className="card-text text-body">NUMBER OF PARTICIPANTS: {2} PLAYERS</p>
						<p className="card-text text-body">ENTRY FEE: 10 NITRO</p>
						<p className="card-text text-body">PLACES PAID: 1st PLACE</p>
						<p className="card-text text-body">PRIZE: 10 ADA</p>
						<button className="btn btn-primary" onClick={() => handleUpdatePlayers(2)}>ENTER RACE</button>
					</div>
				</div> 

				<div className="card text-center noLink text-body" style={{width:'200%', height:'30vh', marginTop:'20%'}}>
					<div className="card-body">
						<h5 className="card-title text-body">TURBO</h5>
						<p className="card-text text-body">NUMBER OF PARTICIPANTS: {20} PLAYERS</p>
						<p className="card-text text-body">ENTRY FEE: 20 NITRO</p>
						<p className="card-text text-body">PLACES PAID: 1st PLACE</p>
						<p className="card-text text-body">PRIZE: 20 ADA</p>

						<button className="btn btn-primary" onClick={() => handleUpdatePlayers(20)}>ENTER RACE</button>
					</div>
				</div> 

				<div className="card text-center noLink text-body" style={{width:'200%', height:'44vh', marginTop:'20%'}}>
					<div className="card-body">
						<h5 className="card-title text-body">FREE ROLL</h5>
						<p className="card-text text-body">NUMBER OF PARTICIPANTS: {unlimitedNum} PLAYERS</p>
						<p className="card-text text-body">ENTRY FEE: NONE</p>
						<span className="card-text text-body">PLACES PAID: <ul className="list-group list-group-flush">
							<li className="list-group-item">1st PLACE: 40 ADA</li>
							<li className="list-group-item">2nd PLACE: 30 ADA</li>
							<li className="list-group-item">3rd PLACE: 20 ADA</li>
						</ul></span>
						<p className="card-text text-body">PRIZE: 90 ADA</p>

						<button className="btn btn-primary" onClick={() => handleUpdatePlayers(unlimitedNum)}>ENTER RACE</button>
					</div>
				</div> 
			
				
			</div>
		</div>
	);
};


export default StartBtn;