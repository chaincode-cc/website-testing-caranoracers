import React, {useEffect, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setInvironment, randomFloorMath, rivalTotal, playerTotal} from './game';
import axios from 'axios';

import { setPlayerSelected } from './nftSlice';
import NFTModal from './nftmodal';
import NFTCard from './nftGameCard';
import StartAnimation from './startAnimation';
import { getCarbyId, getRacerbyId } from '../services/helpers';

// import spinner from '../assets/images/spinner.gif';
import Confetti from 'react-confetti';

// https://docs.cardano.org/native-tokens/getting-started

const GamePage = () => {
//Map
	const [mapStats, setMap] = useState({});

	//Rivals
	const [rivalRacers, setRivalRacers] = useState({});
	const [rivalCars, setRivalCars] = useState({});
	const numOfRivals = 10;

	//Player
	const carNum = useSelector(state => state.nftSelector.carSelected);
	const racerNum = useSelector(state => state.nftSelector.racerSelected);
	const playerSelected = useSelector(state => state.nftSelector.playerSelected);
	const dispatching = useDispatch();

	//Results
	const [raceTotals, setRaceResults] = useState({});
	const [winnerTable, setWinners] = useState({});
	const [racerpos, setRacerPos] = useState(0);
	const [showAnimation, setShowAnimation] = useState(false);
	
	const showResults = useSelector(state => state.nftSelector.results);
	const showConfetti = useSelector(state => state.nftSelector.confetti);


	//Cardano
	const policy = '8a1b05b76eee50197129afa36987ea10e631417fa4a91a6a909b9909';
	const addr = 'addr_test1vpx7m5s2njg8ydzdr73gufk2jvj0uh2qdctcgc9xzcmgpzsukyek4';
	
	const [wallets, setWallets] = useState([]);
	const [assetName, setAssetName] = useState([]);
	// const [assets, setAssets] = useState([]);
	const [carsAssets, setCars] = useState([]);
	const [driversAssets, setDrivers] = useState([]);


	console.log('wallets', wallets);
	console.log('asset names', assetName);
	console.log('***********', wallets.length);

	// Get assets from wallet
	useEffect(() => {
		const getAddr = async () => {
			try {
				const response = await axios.post('https://preprod.koios.rest/api/v0/address_assets', {
					'_addresses': [
						addr
					]
				});
				setWallets(response.data);
			} catch (err) {
				console.log(err);
			}
		};
		getAddr(); 

	}, []);

	// Get names from assets for later use
	useEffect( () => {
		setAssetName(wallets
			.map(x => x.asset_list)
			.map(x=>x.filter((x)=> 
			{return x.policy_id === policy;}))
			.map(x=>x.map(x=>x.asset_name)));	
	}, [wallets]);

	// Get the cars and racers from names that fits in the policy.
	useEffect( () => {	
		console.log('1 ***');

		const fetchAssets = async () => {
			try{
				console.log('inside');

				const assetData = [];
				const carData = [];
				const driverData = [];
				for (const innerArray of assetName) {
					console.log('innerArray',assetName);
					for (const name of innerArray) {
						console.log('name',name);
						const response = await axios.get(`https://preprod.koios.rest/api/v0/asset_info?_asset_policy=${policy}&_asset_name=${name}`);
						console.log('response',response);
						let mapped = response.data.map(x => x.minting_tx_metadata['721'][policy]);
						console.log('mapped',mapped);
						
						assetData.push(...mapped);
						if (mapped.length > 0) {
							Object.values(mapped[0])[0].type === 'car' ? carData.push(...Object.values(mapped[0])) : driverData.push(...Object.values(mapped[0]));
						}
					}}
				// setAssets(assetData);
				setCars(carData);
				setDrivers(driverData);
			}
			catch(e){console.log(e);}
		};
		if (wallets.length > 0) {
			console.log('2 ***');
			fetchAssets();
			
		} 
	}, [wallets, assetName]);


	function settingAllUp (){
		setMap(setInvironment());
		settingRivals(),
		setRaceResults({});
		setWinners({});
	}

	useEffect(()=>{
		settingAllUp();
	},[]);

	useEffect(()=>{
		let list = Object.values(raceTotals);
		list.sort(function(a,b) {
			return a.LapTime - b.LapTime;
		});	
		setWinners(list);
	},[raceTotals]);

	useEffect(()=>{
		let list2 = Object.values(winnerTable);
		let index = list2.findIndex(item => item.RacerId);
		setRacerPos(index+1);
	},[winnerTable]);

	const settingRivals = () =>{
		let driverStats= [];
		let carStats = [];
		for (let i = 1; i <= numOfRivals; i++)
		{ 
			let newCar = {
				Name: i,
				maximumspeed: randomFloorMath(1,10000),
				acceleration: randomFloorMath(1,10000),
				cornering: randomFloorMath(1,10000),
				aerodynamics: randomFloorMath(1,10000),
			};
			let newDriver = {
				Name: i,
				experience: randomFloorMath(1,10000),
				aggressiveness: randomFloorMath(1,10000),
				reflexes: randomFloorMath(1,10000),
				luck: randomFloorMath(1,10000),
			};
			driverStats.push(newDriver);
			carStats.push(newCar);
		}
		setRivalRacers(driverStats);
		setRivalCars(carStats);
	};

	const setRace = (e) =>{
		e.preventDefault();
		dispatching(setPlayerSelected(false));
		
		let rivalCombineDriCarAttrs= [];

		for (let i = 1; i <= numOfRivals; i++)
		{
			let newSet = rivalTotal(rivalRacers[i-1],rivalCars[i-1]);
			rivalCombineDriCarAttrs.push(newSet);
		}
		let newPlayer = playerTotal(getRacerbyId(driversAssets, racerNum),getCarbyId(carsAssets, carNum));
		rivalCombineDriCarAttrs.push(newPlayer);
		setRaceResults(rivalCombineDriCarAttrs);
		setShowAnimation(true);	
	};

	
	return (
		<div className='d-flex mainBg justify-content-around '>
			{(showConfetti && racerpos > 0 && racerpos < 4) && <Confetti />}

			{/* MAP */}
			{mapStats.raceMap && (
				<div style={{paddingTop:'15%'}}>
					<h2>Racing circuit</h2>
					<p>Weather: {mapStats.RaceWeather}</p>
					<p>Straigthaways: {mapStats.raceMap.straigthaways}</p>
					<p>Turns: {mapStats.raceMap.turns}</p>
					<p>Lap length: {mapStats.raceMap.lapLength.toFixed(2)} km</p>
				</div>
			)}
			<div>
				
			</div>
			<div className='d-flex justify-content-center align-items-center flex-column' style={{paddingTop:'8%'}}>

				

				<>
					{/* MODAL */}
					{!showResults && <NFTModal driverStats={driversAssets} carStats={carsAssets} />}


					{/* AFTER SELECTED PLAYER */}
					{(racerNum && carNum) && 
							<>
								{showAnimation && <StartAnimation  position={racerpos}/>}
								{playerSelected && 
										<div className='d-flex justify-content-center align-items-center flex-column mt-3'>
											<h3>You have selected:</h3>
											<div style={{width:'50%'}} className="d-flex flex-wrap justify-content-center">						
												{(racerNum > 0 && carNum > 0 ) &&
													<><div style={{width:'30%'}} className='m-2 w-25  d-flex justify-content-center align-items-center'>
														<NFTCard  key={racerNum} type={1} nft={getRacerbyId(driversAssets, racerNum)}/>
													</div>
													<div style={{width:'30%'}} className='m-2 w-25 d-flex justify-content-center align-items-center'>
														<NFTCard key={carNum} type={0} nft={getCarbyId(carsAssets, carNum)}/>
													</div>
													</>
												}
											</div>
											<a className="btn btn-secondary m-5" data-bs-toggle="modal" href="#winnerModal" onClick={setRace} role="button">START RACE!</a>
										</div>
								}
								{showResults &&
									<div className="d-flex justify-content-center align-items-center flex-column my-5">
										<h2 className="text-center mb-3 text-light">Race Results</h2>
										<p className="text-center mb-3 text-light">Your racer finished in {racerpos} position</p>
										<table className="table table-striped table-bordered table-dark">
											<thead>
												<tr>
													<th scope="col">Racer</th>
													<th scope="col">Lap Time</th>
													<th scope="col">Position</th>
												</tr>
											</thead>
											<tbody>
												{Object.values(winnerTable).map((x, i) => (
													<tr key={x.Name}>
														<td>{x.RacerId ? <span style={{fontWeight: 'bold'}}>YOU</span> : x.rivalId}</td>
														<td>{x.LapTime.toFixed(6)}s</td>
														<td>{i + 1}</td>
													</tr>
												))}
											</tbody>
										</table>
									</div>
								
								
								}
							</> 

					}
				</>
					

			</div>
		</div>

		
	);
};

export default GamePage;

