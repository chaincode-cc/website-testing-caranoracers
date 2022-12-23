import React, {useEffect, useState} from 'react';
import { setInvironment, randomFloorMath, racerTotal} from '../Game/game';
import {NFTCard} from '../Game/nftGameCard';


const GamePage = () => {
	const [playersInput, setPlayersInput] = useState(0);
	const [playersNum, setPlayersNum] = useState(0);
	const [playerSelect, setPlayerSelect] = useState(0);
	const [playerSelected, setPlayerSelected] = useState(0);
	const [mapStats, setMap] = useState({});
	const [carStats, setCarStats] = useState({});
	const [driverStats, setDriverStats] = useState({});
	const [cobAttrs, setCombAtt] = useState({});
	const [winnerTable, setWinners] = useState({});
	const [racerpos, setRacerPos] = useState({});


	function settingUpAll (){
		setMap(setInvironment());
		setPlayersNum(0);
		setPlayerSelected(0);
		setCarStats({});
		setDriverStats({});
		setCombAtt({});
		setWinners({});
	}

	useEffect(()=>{
		settingUpAll();
	},[]);

	useEffect(()=>{
		let list = Object.values(cobAttrs).slice(0);
		list.sort(function(a,b) {
			return a.LapTime - b.LapTime;
		});
		setWinners(list);
	},[cobAttrs]);

	useEffect(()=>{
		let list = Object.values(winnerTable);
		var index = list.findIndex(item => item.Name === Number(playerSelected));
		setRacerPos(index+1);
	},[winnerTable]);
	
	const handlePlayerNumInput = event => {
		setPlayersInput(event.target.value);
	};
	const handlePlayerSelect = event => {
		setPlayerSelect(event.target.value);
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
	
	const setSelectedRacer = (e) =>{
		e.preventDefault();
		setPlayerSelected(playerSelect);
	};

	const setRace = (e) =>{
		e.preventDefault();
		let combineDriCarAttrs= [];
		for (let i = 1; i <= playersInput; i++)
		{ 
			let newSet = racerTotal(driverStats[i-1],carStats[i-1]);
			combineDriCarAttrs.push(newSet);
		}
		setCombAtt(combineDriCarAttrs);	
		
	};

	console.log('HERE',carStats	);

	

	
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
					{driverStats.length > 0 ? <button className='btn btn-secondary mt-2' onClick={settingUpAll}>START AGAIN</button> : 
						<form className='d-flex justify-content-center align-items-center flex-column' onSubmit={settingDrivers}>
							<div className="input-group input-group-sm ">
								<div className="input-group-prepend">
									<span className="input-group-text" id="inputGroup-sizing-sm">Number of racers</span>
								</div>
								<input type="number" min="2" placeholder='Min of 2...' onChange={handlePlayerNumInput} className="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
							</div>
							<button className='btn btn-secondary mt-2'>SET RACERS</button>
						</form>
					}
					<div>
						
						{driverStats.length > 0 &&
							<div className='d-flex justify-content-center align-items-center flex-column mt-3'>
								<h3>Number of racers: {driverStats.length > 0 && playersNum}</h3>
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
								{NFTCard(carStats)}
								<h3 className='mt-3'>{playerSelected > 0 ? `You selected racer: ${playerSelected}`  : <></>}</h3>
								{winnerTable.length > 0 && `Your racer got on the ${racerpos} position`}
								{playerSelected > 0 ? <>
									{winnerTable.length > 0 ? <>
										<h2 className='mt-3'>RESULTS:</h2>

										<table>
											<thead>
												<tr>
													<th></th>
													<th>Racer #</th>
													<th>Lap Time</th>
												</tr>
											</thead>
											<tbody>
												{Object.values(winnerTable).map((x,i) =>
													<tr key={x.Name}> 
														<th></th>
														<th>{x.Name}</th>
														<th>{x.LapTime.toFixed(6)}s</th>
														<th>Position {i+1}</th>
													</tr>												
												)}	
											
											</tbody>
										</table>
									</>:
										<button className='btn btn-secondary' onClick={setRace}>START RACE!</button>
									}</> :
									<form className='d-flex justify-content-center align-items-center flex-column mt-3' onSubmit={setSelectedRacer}>
										<div className="input-group mb-1">
											<div className="input-group-prepend">
												<label className="input-group-text" htmlFor="inputGroupSelect01">Select your Racer</label>
											</div>
											<select onChange={handlePlayerSelect} className="custom-select" id="inputGroupSelect01">
												<option>Racer #</option>
												{Object.values(carStats).map(x => 
													<option key={x.Name} value={x.Name}>{x.Name}</option>
												)}
											</select>
										</div>
										<button className='btn btn-secondary'>SELECT</button>
									</form> 
								}
								
								
								
								
							</div>
						}
						
					
						
						
					</div>
				</div>
			</section>
		</>
	);
};

export default GamePage;

