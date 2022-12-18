import React, {useEffect, useState} from 'react';
import { setInvironment, randomFloorMath } from '../Game/game';

const GamePage = () => {
	const [playersNum, setPlayersNum] = useState(0);
	const [mapStats, setMap] = useState({});
	const [test, setTest] = useState({});

	let driverStats= [];
	let carStats = [];


	
	useEffect(()=>{
		setMap(setInvironment());
	},[]);
	
	const handlePlayerNumInput = event => {
		setPlayersNum(event.target.value);
	};

	const settingDrivers = () =>{
		for (let i = 1; i < playersNum; i++)
		{ 
			let newCar = {
				Name: i,
				MaximumSpeed: randomFloorMath(1,10000),
				Acceleration: randomFloorMath(1,10000),
				Cornering: randomFloorMath(1,10000),
				Aerodynamics: randomFloorMath(1,10000),
			};
			carStats.push(newCar);
			setTest((old)=> ...old, newCarg)
			let newDriver = {
				Name: i,
				Experience: randomFloorMath(1,10000),
				Aggressiveness: randomFloorMath(1,10000),
				Reflexes: randomFloorMath(1,10000),
				Luck: randomFloorMath(1,10000),
			};
			driverStats.push(newDriver);
		}
	};
	
	
	return (
		<>
			<section className='d-flex justify-content-center align-items-center flex-column'>
				{mapStats.raceMap && (<>
					<h2>Racing circuit</h2>
					<p>Weather: {mapStats.RaceWeather}</p>
					<p>Straigthaways: {mapStats.raceMap.straigthaways}</p>
					<p>Turns: {mapStats.raceMap.turns}</p>
					<p>Lap length: {mapStats.raceMap.lapLength.toFixed(2)} km</p>

				</>
				)}
				<div className="input-group input-group-sm ">
					<div className="input-group-prepend">
						<span className="input-group-text" id="inputGroup-sizing-sm">Number of players</span>
					</div>
					<input type="number" onChange={handlePlayerNumInput} className="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
				</div>
				<button className='btn btn-danger w-25 m-4' onClick={settingDrivers}>SET DRIVERS</button>
				{carStats.length > 0 ? carStats[0].Acceleration : 'hi'}
			</section>
		</>
	);
};

export default GamePage;