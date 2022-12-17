import React, {useEffect, useState} from 'react';
import { setInvironment, randomFloorMath, combineDriCarAttr, startRace} from '../Game/game';

const GamePage = () => {
	const [playersInput, setPlayersInput] = useState(0);
	const [playersNum, setPlayersNum] = useState(0);
	const [mapStats, setMap] = useState({});
	const [carStats, setCarStats] = useState({});
	const [driverStats, setDriverStats] = useState({});
	const [raceStats, setRaceStats] = useState({});


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
	console.log('RACE',raceStats);


	const setRace = () =>{

		
		combineDriCarAttr(driverStats[0],carStats[0]);
		setRaceStats(startRace(driverStats[0],carStats[0]));
	
	};
	console.log('RACE',setRace);

	

	
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
							<input type="number" min="2" placeholder='Min of 2...' onChange={handlePlayerNumInput} className="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
						</div>
						<button className='btn btn-secondary mt-2'>{driverStats.length > 0 ? 'SET NEW PLAYERS': 'SET PLAYERS'}</button>
					</form>
					<div>
						
						{driverStats.length > 0 &&
							<>
								<h3>Number of players: {driverStats.length > 0 && playersNum}</h3>
								<table >
									<thead >
										<tr>
											<th></th>
											{Object.values(driverStats).map(x => 
												<th key={x.Name}>Racer #</th>
											)}										
										</tr>
									</thead>
									<thead>
										<tr>
											<th>Racing Skills</th>
											{Object.values(driverStats).map(x => 
												<th key={driverStats.Name}>{x.Name}</th>
											)}
										</tr>
									</thead>
									<tbody>
										<tr>
											<td >Experience</td>
											{Object.values(driverStats).map(x => 
												<td key={driverStats.Name}>{x.Experience}
												</td>
											)}
										</tr>
										<tr>
											<td>Aggressiveness</td>
											{Object.values(driverStats).map(x => 
												<td key={driverStats.Name}>{x.Aggressiveness}
												</td>
											)}
										</tr>
										<tr>
											<td>Reflexes</td>
											{Object.values(driverStats).map(x => 
												<td key={driverStats.Name}>{x.Reflexes}
												</td>
											)}
										</tr>
										<tr>
											<td>Luck</td>
											{Object.values(driverStats).map(x => 
												<td key={driverStats.Name}>{x.Luck}
												</td>
											)}
										</tr>
									</tbody>
								
									<thead>
										<tr>
											<th>Car Attributes</th>
											<th></th>
											<th></th>

										</tr>
									</thead>
									<tbody>
										<tr>
											<td style={{paddingRight:'20px'}}>MaximumSpeed</td>
											{Object.values(carStats).map(x => 
												<td key={carStats.Name}>{x.MaximumSpeed}
												</td>
											)}
										</tr>
										<tr>
											<td>Acceleration</td>
											{Object.values(carStats).map(x => 
												<td key={carStats.Name}>{x.Acceleration}
												</td>
											)}
										</tr>
										<tr>
											<td>Cornering</td>
											{Object.values(carStats).map(x => 
												<td key={carStats.Name}>{x.Cornering}
												</td>
											)}
										</tr>
										<tr>
											<td>Aerodynamics</td>
											{Object.values(carStats).map(x => 
												<td key={carStats.Name}>{x.Aerodynamics}
												</td>
											)}
										</tr>
									</tbody>
								</table>

								<form className=" mt-3">
									<div className="input-group mb-3">
										<div className="input-group-prepend">
											<label className="input-group-text" htmlFor="inputGroupSelect01">Select your Racer</label>
										</div>
										<select className="custom-select" id="inputGroupSelect01">
											<option selected>Racer #</option>
											{Object.values(carStats).map(x => 
												<option key={x.Name} value={x.Name}>{x.Name}</option>
											)}
										</select>
										<button>Select</button>
									</div>
								</form>
							</>
							
						}
						
					
						
						
					</div>
				</div>
			</section>
		</>
	);
};

export default GamePage;