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

	console.log('RESUTS',playersNum );
	console.log('RESUTS',racersNum );


	
	return (
		<>
			<section className='d-flex justify-content-center align-items-center flex-column'>
				{racersNum.raceMap && (<>
					<p>Weather: {racersNum.RaceWeather}</p>
					<p>Straigthaways: {racersNum.raceMap.straigthaways}</p>
					<p>Turns: {racersNum.raceMap.turns}</p>
					<p>Lap length: {racersNum.raceMap.lapLength.toFixed(2)} km</p>

				</>
				)}
				


				<button className='btn btn-danger w-25 m-4' onClick={startGame}>SET MAP</button>
				<div className="input-group input-group-sm ">
					
					<div className="input-group-prepend">
						<span className="input-group-text" id="inputGroup-sizing-sm">Number of players</span>
					</div>
					<input type="number" onChange={handlePlayerNumInput} className="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
				</div>
				
			</section>
		</>
	);
};

export default GamePage;