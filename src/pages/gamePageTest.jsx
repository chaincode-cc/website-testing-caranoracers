import React, {useEffect, useState} from 'react';
import { setInvironment, randomFloorMath, rivalTotal, playerTotal} from '../Game/game';

const GamePage2 = () => {
	//Map
	const [mapStats, setMap] = useState({});

	//Rivals
	const [rivalRacers, setRivalRacers] = useState({});
	const [rivalCars, setRivalCars] = useState({});
	const numOfRivals = 10;

	//Player
	const [carNFTnum, setCarNFTnum] = useState(0);
	const [driverNFTnum, setRacerNFTnum] = useState(0);
	const [carSelected, setcarSelect] = useState(0);
	const [racerSelected, setracerSelect] = useState(0);
	const [playerSelected, setPlayerSelected] = useState({});
	const [carStats, setCarStats] = useState({});
	const [driverStats, setDriverStats] = useState({});


	//Results
	const [raceTotals, setRaceResults] = useState({});
	const [winnerTable, setWinners] = useState({});
	const [racerpos, setRacerPos] = useState({});

	function settingUpAll (){
		setMap(setInvironment());
		settingRivals(),
		setPlayerSelected(0);
		setCarStats({});
		setDriverStats({});
		setRaceResults({});
		setWinners({});
	}

	useEffect(()=>{
		settingUpAll();
	},[]);

	useEffect(()=>{
		let list = Object.values(raceTotals);
		list.sort(function(a,b) {
			return a.LapTime - b.LapTime;
		});
		console.log('LIST',list);	
		setWinners(list);
	},[raceTotals]);

	useEffect(()=>{
		let list2 = Object.values(winnerTable);
		let index = list2.findIndex(item => item.RacerId);
		setRacerPos(index+1);
	},[winnerTable]);

	const handleRacerNFTNumInput = event => {
		setRacerNFTnum(event.target.value);
	};
	const handleCarNFTNumInput = event => {
		setCarNFTnum(event.target.value);
	};

	const handleRacerSelect = event =>{
		event.preventDefault();
		setracerSelect(event.target.value);
	};

	const handleCarSelect = event =>{
		event.preventDefault();
		setcarSelect(event.target.value);
	};
	const handlePlayerSelect = event => {
		event.preventDefault();
		setPlayerSelected({car: carSelected, racer:racerSelected});	
	};
	const settingRivals = () =>{
		let driverStats= [];
		let carStats = [];
		for (let i = 1; i <= numOfRivals; i++)
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
	const settingPlayer = (e) =>{
		e.preventDefault();
		let driverStats= [];
		let carStats = [];
		for (let i = 1; i <= driverNFTnum; i++)
		{ 
			let newCar = {
				Name: i,
				MaximumSpeed: randomFloorMath(1,10000),
				Acceleration: randomFloorMath(1,10000),
				Cornering: randomFloorMath(1,10000),
				Aerodynamics: randomFloorMath(1,10000),
			};
			carStats.push(newCar);
		}
		for (let i = 1; i <= carNFTnum; i++){
			let newDriver = {
				Name: i,
				Experience: randomFloorMath(1,10000),
				Aggressiveness: randomFloorMath(1,10000),
				Reflexes: randomFloorMath(1,10000),
				Luck: randomFloorMath(1,10000),
			};
			driverStats.push(newDriver);
			
		}
		setDriverStats(driverStats);
		setCarStats(carStats);
	};

	const setRace = (e) =>{
		e.preventDefault();
		let rivalCombineDriCarAttrs= [];
		// let playerCombineDriCarAttrs= [];

		for (let i = 1; i <= numOfRivals; i++)
		{
			let newSet = rivalTotal(rivalRacers[i-1],rivalCars[i-1]);
			rivalCombineDriCarAttrs.push(newSet);
		}
		let newPlayer = playerTotal(driverStats[racerSelected-1],carStats[carSelected-1]);
		rivalCombineDriCarAttrs.push(newPlayer);
		setRaceResults(rivalCombineDriCarAttrs);	
	};

	console.log('1',winnerTable);

	// console.log('COM',playerComAtt);
	// console.log('RIVCOM',rivalComAtt);
	// console.log('PLA',playerSelected);
	// console.log('WIN',winnerTable);
	// console.log('RACER',racerSelected);
	// console.log('CAR',carSelected && 'WWW');


	const borderStyle = {border:'solid 1px black',marginRight:'2%'};
	const borderRightStyle = {borderRight:'solid 1px black', width:'60px'};
	
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
						<form className='d-flex justify-content-center align-items-center flex-column' onSubmit={settingPlayer}>
							<div className="input-group input-group-sm d-flex mt-2">
								<div className="input-group-prepend">
									<span className="input-group-text" id="inputGroup-sizing-sm">How many CardanoRacers Racer NTFs do you have?</span>
								</div>
								<input type="number" min='1' max="6" placeholder='Select...' onChange={handleRacerNFTNumInput} className="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
							</div>
							<div className="input-group input-group-sm d-flex mt-3">
								<div className="input-group-prepend">
									<span className="input-group-text" id="inputGroup-sizing-sm">How many CardanoRacers Car NTFs do you have?</span>
								</div>
								<input type="number" min='1' max="6" placeholder='Select...' onChange={handleCarNFTNumInput} className="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
							</div>
							<button className='btn btn-secondary mt-3'>SET YOUR NFTS</button>
						</form>
					}
					<div>
						
						{driverStats.length > 0 &&
						<>
							<div className='d-flex justify-content-center align-items-center mt-3'>
								<table  style={borderStyle}>
									<thead>
										<tr>
											<th style={borderRightStyle}>Racer #</th>
											{Object.values(driverStats).map(x => 
												<th style={borderRightStyle} key={driverStats.Name}>{x.Name}</th>
											)}
										</tr>
									</thead>
									<tbody>
										<tr>
											<td style={borderRightStyle}>Experience</td>
											{Object.values(driverStats).map(x => 
												<td style={borderRightStyle} key={driverStats.Name}>{x.Experience}
												</td>
											)}
										</tr>
										<tr>
											<td style={borderRightStyle} >Aggressiveness</td>
											{Object.values(driverStats).map(x => 
												<td style={borderRightStyle} key={driverStats.Name}>{x.Aggressiveness}
												</td>
											)}
										</tr>
										<tr>
											<td style={borderRightStyle}>Reflexes</td>
											{Object.values(driverStats).map(x => 
												<td style={borderRightStyle} key={driverStats.Name}>{x.Reflexes}
												</td>
											)}
										</tr>
										<tr>
											<td style={borderRightStyle}>Luck</td>
											{Object.values(driverStats).map(x => 
												<td  style={borderRightStyle} key={driverStats.Name}>{x.Luck}
												</td>
											)}
										</tr>
									</tbody>
								</table>
								<table style={borderStyle}>
									<thead>
										<tr >
											<th style={borderRightStyle}>Car #</th>
											{Object.values(carStats).map(x => 
												<th style={borderRightStyle} key={driverStats.Name}>{x.Name}</th>
											)}

										</tr>
									</thead>
									<tbody>
										<tr>
											<td style={borderRightStyle}>MaximumSpeed</td>
											{Object.values(carStats).map(x => 
												<td style={borderRightStyle} key={carStats.Name}>{x.MaximumSpeed}
												</td>
											)}
										</tr>
										<tr>
											<td style={borderRightStyle} >Acceleration</td>
											{Object.values(carStats).map(x => 
												<td style={borderRightStyle} key={carStats.Name}>{x.Acceleration}
												</td>
											)}
										</tr>
										<tr>
											<td style={borderRightStyle}>Cornering</td>
											{Object.values(carStats).map(x => 
												<td style={borderRightStyle} key={carStats.Name}>{x.Cornering}
												</td>
											)}
										</tr>
										<tr>
											<td style={borderRightStyle}>Aerodynamics</td>
											{Object.values(carStats).map(x => 
												<td style={borderRightStyle} key={carStats.Name}>{x.Aerodynamics}
												</td>
											)}
										</tr>
									</tbody>
								</table>
							</div>
							
							
							{playerSelected ? <>
								{winnerTable.length > 0 ? 
									<div className='d-flex justify-content-center align-items-center flex-column mt-3'>
										{winnerTable.length > 0 && `Your racer got on the ${racerpos} position`}
										<h2 className='mt-3'>RESULTS:</h2>

										<table>
											<thead>
												<tr>
													<th></th>
													<th></th>
													<th>Lap Time</th>
												</tr>
											</thead>
											<tbody>
												{Object.values(winnerTable).map((x,i) =>
													<tr key={x.Name}> 
														<th></th>
														<th>{x.RacerId ? 'YOU' : x.rivalId}</th>
														<th>{x.LapTime.toFixed(6)}s</th>
														<th>Position {i+1}</th>
													</tr>												
												)}	
											
											</tbody>
										</table>
									</div>:
									<div className='d-flex justify-content-center align-items-center flex-column mt-3'>
										<h4 className='mt-3'>{driverNFTnum > 0 ? `You selected racer ${driverNFTnum} with car ${carNFTnum}`  : <></>}</h4>
										<button className='btn btn-secondary' onClick={setRace}>START RACE!</button>
									</div>
								}</> :
								<form className='d-flex justify-content-center align-items-center flex-column mt-3' onSubmit={handlePlayerSelect}>
									<div className="input-group mb-1 d-flex justify-content-center align-items-center flex-row ">
										<div className='d-flex justify-content-center align-items-center flex-column m-3'>
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
						</>
						}
					</div>
				</div>
			</section>
		</>
	);
};

export default GamePage2;

