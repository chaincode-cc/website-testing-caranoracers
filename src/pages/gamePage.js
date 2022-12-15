import React, {useState} from 'react';
import { setInvironment, setDriversAndCars } from '../Game/game';
const GamePage = () => {
	const [playersNum, setPlayersNum] = useState(0);
	const [racersNum, setRacersNum] = useState({});
	
	
	function startGame () {
		
		setRacersNum(setInvironment());
		setDriversAndCars();
	}

	const handlePlayerNumInput = event => {
		setPlayersNum(event.target.value);
	};

	console.log('RESUTS',racersNum );

	
	return (
		<>
			<section className='d-flex justify-content-center align-items-center flex-column'>
				<div className="input-group input-group-sm ">
					<div className="input-group-prepend">
						<span className="input-group-text" id="inputGroup-sizing-sm">Number of players</span>
					</div>
					<input type="number" onChange={handlePlayerNumInput} className="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
				</div>
				{playersNum}
				<button className='btn btn-danger w-25 m-4' onClick={startGame}>SET PLAYERS</button>
			</section>
		</>
	);
};

export default GamePage;