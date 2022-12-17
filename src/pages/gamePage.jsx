import React, {useEffect, useState} from 'react';
import { setInvironment, randomFloorMath } from '../Game/game';

const GamePage = () => {
	const [playersInput, setPlayersInput] = useState(0);
	const [playersNum, setPlayersNum] = useState(0);
	const [mapStats, setMap] = useState({});
	const [carStats, setCarStats] = useState({});
	const [driverStats, setDriverStats] = useState({});



	useEffect(()=>{
		setMap(setInvironment());
		setPlayersNum(0);
		setCarStats({});
		setDriverStats({});
	},[]);
	
	const handlePlayerNumInput = event => {
		setPlayersInput(event.target.value);
	};

	const settingDrivers = (e) =>{
		e.preventDefault();
		setPlayersNum(playersInput);
		let driverStats= [];
		let carStats = [];
		for (let i = 1; i <= playersInput; i++)
		{ 
			let newCar = {
				Name: i,
				MaximumSpeed: randomFloorMath(1,10000),
				Acceleration: randomFloorMath(1,10000),
				Cornering: randomFloorMath(1,10000),
				Aerodynamics: randomFloorMath(1,10000),
			};
			let newDriver = {
				Name: i,
				Experience: randomFloorMath(1,10000),
				Aggressiveness: randomFloorMath(1,10000),
				Reflexes: randomFloorMath(1,10000),
				Luck: randomFloorMath(1,10000),
			};
			driverStats.push(newDriver);
			carStats.push(newCar);
		}
		setDriverStats(driverStats);
		setCarStats(carStats);
	};
	console.log('MAP', mapStats);
	

	
	return (
		<>
			<section className='d-flex justify-content-center align-items-center flex-column'>
				<div className='d-flex justify-content-center align-items-center flex-column'>
					{mapStats.raceMap && (<>
						<h2>Racing circuit</h2>
						<p>Weather: {mapStats.RaceWeather}</p>
						<p>Straigthaways: {mapStats.raceMap.straigthaways}</p>
						<p>Turns: {mapStats.raceMap.turns}</p>
						<p>Lap length: {mapStats.raceMap.lapLength.toFixed(2)} km</p>
					</>
					)}
					<form className='d-flex justify-content-center align-items-center flex-column' onSubmit={settingDrivers}>
						<div className="input-group input-group-sm ">
							<div className="input-group-prepend">
								<span className="input-group-text" id="inputGroup-sizing-sm">Number of players</span>
							</div>
							<input type="number" min="0" placeholder={'0'}onChange={handlePlayerNumInput} className="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
						</div>
						<button className='btn btn-danger mt-2'>{driverStats.length > 0 ? 'SET NEW PLAYERS': 'SET PLAYERS'}</button>
					</form>
					<div>
						
						{driverStats.length > 0 &&
						<>
							<h3>Number of players: {driverStats.length > 0 && playersNum}</h3>
							<h4>RACERS</h4>
							<table>
								<tr>
									<th>Racer #</th>
									<th>Experience</th>
									<th>Aggressiveness</th>
									<th>Reflexes</th>
									<th>Luck</th>
								</tr>
								{Object.values(driverStats).map(x => <tr key={driverStats.Name}>
									<td>{x.Name}</td>
									<td>{x.Experience}</td>
									<td>{x.Aggressiveness}</td>
									<td>{x.Reflexes}</td>
									<td>{x.Luck}</td>
								</tr>)}
							</table>
						
							<h4>CARS</h4>
							<table>
								<tr>
									<th>Racer #</th>
									<th>MaximumSpeed</th>
									<th>Acceleration</th>
									<th>Cornering</th>
									<th>Aerodynamics</th>
								</tr>
								{Object.values(carStats).map(x => <tr key={carStats.Name}>
									<td>{x.Name}</td>
									<td>{x.MaximumSpeed}</td>
									<td>{x.Acceleration}</td>
									<td>{x.Cornering}</td>
									<td>{x.Aerodynamics}</td>
								</tr>)}
							</table></>}
					</div>
				</div>
			</section>
		</>
	);
};

export default GamePage;