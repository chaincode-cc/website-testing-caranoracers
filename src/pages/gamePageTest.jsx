import React, {useEffect, useState} from 'react';
import { setInvironment, randomFloorMath, racerTotal} from '../Game/game';

const GamePage2 = () => {
	const [playersInput, setPlayersInput] = useState(0);
	const [playersNum, setPlayersNum] = useState(0);
	const [carSelected, setcarSelect] = useState(0);
	const [racerSelected, setracerSelect] = useState(0);
	const [playerSelected, setPlayerSelected] = useState({});
	const [mapStats, setMap] = useState({});
	const [carStats, setCarStats] = useState({});
	const [driverStats, setDriverStats] = useState({});
	const [rivalRacers, setRivalRacers] = useState({});
	const [rivalCars, setRivalCars] = useState({});
	const [rivalComAtt, setRivalsCombAtt] = useState({});
	const [playerComAtt, setPlayerCombAtt] = useState({});
	const [winnerTable, setWinners] = useState({});
	const [racerpos, setRacerPos] = useState({});
	// console.log('show at the end once race is done',rivalCars,rivalRacers);

	function settingUpAll (){
		setMap(setInvironment());
		settingRivals(),
		setPlayersNum(0);
		setPlayerSelected(0);
		setCarStats({});
		setDriverStats({});
		setRivalsCombAtt({});
		setWinners({});
	}

	useEffect(()=>{
		settingUpAll();
	},[]);

	useEffect(()=>{
		let list = Object.values(rivalComAtt).slice(0);
		// list.push(Object.values(playerComAtt).slice(0));
		list.sort(function(a,b) {
			return a.LapTime - b.LapTime;
		});
		setWinners(list);
	},[rivalComAtt]);

	useEffect(()=>{
		let list2 = Object.values(winnerTable);
		let index = list2.findIndex(item => item.Name === Number(playerSelected));
		setRacerPos(index+1);
	},[winnerTable]);

	const handlePlayerNumInput = event => {
		setPlayersInput(event.target.value);
	};

	const handleRacerSelect = event =>{
		event.preventDefault();
		setcarSelect(event.target.value);
	};

	const handleCarSelect = event =>{
		event.preventDefault();
		
		setracerSelect(event.target.value);
	};
	const handlePlayerSelect = event => {
		event.preventDefault();
		setPlayerSelected({car: carSelected, racer:racerSelected});	
	};
	const settingRivals = () =>{
		let driverStats= [];
		let carStats = [];
		for (let i = 1; i <= 10; i++)
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
		setRivalRacers(driverStats);
		setRivalCars(carStats);
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

	const setRace = (e) =>{
		e.preventDefault();
		let rivalCombineDriCarAttrs= [];
		for (let i = 1; i <= playersInput; i++)
		{
			let newSet = racerTotal(rivalRacers[i-1],rivalCars[i-1]);
			rivalCombineDriCarAttrs.push(newSet);
		}
		setRivalsCombAtt(rivalCombineDriCarAttrs);	
		setPlayerCombAtt(racerTotal(driverStats[racerSelected-1],carStats[carSelected-1]));
	};

	console.log('PLA',playerSelected);
	console.log('COM',playerComAtt);
	console.log('RIVCOM',rivalComAtt);
	console.log('WIN',winnerTable);
	console.log('RACER',racerSelected);
	console.log('CAR',carSelected && 'WWW');


	
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
											<th></th>
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
									<thead >
										<tr>
											<th></th>
											{Object.values(carStats).map(x => 
												<th key={x.Name}>Car #</th>
											)}										
										</tr>
									</thead>
									<thead>
										<tr>
											<th></th>
											{Object.values(carStats).map(x => 
												<th key={driverStats.Name}>{x.Name}</th>
											)}

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
								<h3 className='mt-3'>{playerSelected > 0 ? `You selected racer: ${playerSelected}`  : <></>}</h3>
								{winnerTable.length > 0 && `Your racer got on the ${racerpos} position`}
								{playerSelected ? <>
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
									<form className='d-flex justify-content-center align-items-center flex-column mt-3' onSubmit={handlePlayerSelect}>
										<div className="input-group mb-1">
											<div className='m-3'>
												<label htmlFor="validationCustom04"  className="form-label">Select your Racer</label>
												<select className="form-select" onChange={handleRacerSelect} id="validationCustom04" required>
													<option selected disabled value="">Choose...</option>
													{Object.values(driverStats).map(x => 
														<option key={x.Name} value={x.Name}>Racer # {x.Name}</option>
													)}
												</select>
												<div className="invalid-feedback">
													Please select a valid racer #.
												</div>
											</div>
											<div className='m-3'>
												<label htmlFor="validationCustom04" className="form-label">Select your Car</label>
												<select className="form-select" onChange={handleCarSelect} id="validationCustom04" required>
													<option selected disabled value="">Choose...</option>
													{Object.values(carStats).map(x => 
														<option key={x.Name} value={x.Name}>Car # {x.Name}</option>
													)}
												</select>
												<div className="invalid-feedback">
													Please select a valid car #.
												</div>
											</div>
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

export default GamePage2;

