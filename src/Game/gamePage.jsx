import React, {useEffect, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Confetti from 'react-confetti';
import axios from 'axios';

import { setInvironment, randomFloorMath, rivalTotal, playerTotal} from './game';
import { getCarbyId, getRacerbyId } from '../services/helpers';
import { setPlayerSelected } from './nftSlice';

import NFTModal from './nftmodal';
import NFTCard from './nftGameCard';

import StartAnimation from './startAnimation';
import WeatherAnimation from './weatherAnimation';
import RaceResults from './raceResults';
// import spinner from '../assets/images/spinner.gif';


// https://docs.cardano.org/native-tokens/getting-started

const GamePage = () => {

	const dispatching = useDispatch();
	const nanvigate = useNavigate();

	//Map
	const [weatherAnime, setWeatherAnimation] = useState(false);
	const [mapStats, setMap] = useState({});

	//Player
	const carNum = useSelector(state => state.nftSelector.carSelected);
	const racerNum = useSelector(state => state.nftSelector.racerSelected);
	const playerSelected = useSelector(state => state.nftSelector.playerSelected);
	const players = useSelector(state => state.nftSelector.players);
	
	//Rivals
	const [rivalRacers, setRivalRacers] = useState({});
	const [rivalCars, setRivalCars] = useState({});
	const numOfRivals = players - 1;


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
	const [carsAssets, setCars] = useState([]);
	const [driversAssets, setDrivers] = useState([]);

	console.log('aast',assetName, 'car',carsAssets,'racer', driversAssets);

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

		
		const fetchAssets = async () => {
			try {
				const assetData = [];
				const carData = [];
				const driverData = [];
				const promises = [];
				for (const innerArray of assetName) {
					for (const name of innerArray) {
						try{const promise = axios.get(`https://preprod.koios.rest/api/v0/asset_info?_asset_policy=${policy}&_asset_name=${name}`);
							promises.push(promise);}
						catch(e){console.log('SORRRY',e);}
						
					}
				}
				const responses = await Promise.all(promises);
				for (const response of responses) {
					const mapped = response.data.map(x => x.minting_tx_metadata['721'][policy]);
					assetData.push(...mapped);
					if (mapped.length > 0) {
						Object.values(mapped[0])[0].type === 'car' ? carData.push(...Object.values(mapped[0])) : driverData.push(...Object.values(mapped[0]));
					}
				}
				setCars(carData);
				setDrivers(driverData);
			} catch (e) {
				console.log(e);
			}
		};
		if (wallets.length > 0) {
			fetchAssets();
			
		} 
	}, [wallets, assetName]);


	function settingAllUp (){
		setMap(setInvironment());
		settingRivals(),
		setRaceResults({});
		setWinners({});
	}

	function rightRaceChacker (){
		let localPayer = localStorage.getItem('players');
		if (players == localPayer){
			return;
		} else {nanvigate('/races');}
	}

	useEffect(()=>{
		rightRaceChacker();
		setWeatherAnimation(true);
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
		<div className='d-flex mainBg justify-content-evenly'>
			{/* Confetti */}
			{(showConfetti && racerpos > 0 && racerpos < 4) && <Confetti />}

			{/* Weather Animation */}
			{weatherAnime && <WeatherAnimation/>}


			{/* Left side of the screen */}
			{mapStats.raceMap && (
				<div className=' w-100	d-flex flex-column justify-content-center align-items-center' style={{paddingTop:'10vh'}}>
					<h2 className="text-center text-light" style={{marginTop: '5%'}}>There are {players} players</h2>
					<br/>
					<h2>Racing circuit</h2>
					<p>Weather: {mapStats.RaceWeather}</p>
					<p>Straigthaways: {mapStats.raceMap.straigthaways}</p>
					<p>Turns: {mapStats.raceMap.turns}</p>
					<p>Lap length: {mapStats.raceMap.lapLength.toFixed(2)} km</p>
				</div>
			)}

			{/* Center side of screen */}
			<div className='w-75' style={{paddingLeft:'10%'}}>
				{playerSelected ?
					<a className="btn btn-secondary btn-lg" data-bs-toggle="modal" style={{marginTop: '40vh'}} href="#winnerModal" onClick={setRace} role="button">START RACE!</a>
					: !showResults && <h3 className="text-center mb-3 text-light" style={{marginTop: '70%'}}>Please select your player</h3>
				}
				{showResults && <h1 className="text-center mb-3 text-light" style={{marginTop: '50%'}}>Your racer finished in {racerpos} position</h1>}
			</div>
			

			{/* Right side of the screen */}
			<div className='d-flex justify-content-center align-items-center w-100 flex-column' style={{paddingTop:'10vh'}}>
				<>
					{/* SELECTION MODAL */}
					{!showResults && <NFTModal driverStats={driversAssets} carStats={carsAssets} />}


					{/* AFTER SELECTED PLAYER */}
					{(racerNum && carNum) && 
							<>
								{/* Start animation */}
								{showAnimation && <StartAnimation/>}

								{/* Results table */}
								{showResults &&	<RaceResults winnerTable={winnerTable} />}

								{/* Selected player */}
								{playerSelected && 
										<div className='d-flex align-items-center justify-content-center flex-column mt-5'>
											<h3>You have selected:</h3>
											<div style={{width:'75%'}} className="d-flex justify-content-center flex-wrap ">						
												{(racerNum > 0 && carNum > 0 ) &&
													<div className="d-flex justify-content-center">
														<div className='m-2 d-flex justify-content-center align-items-center'>
															<NFTCard  key={racerNum} type={1} nft={getRacerbyId(driversAssets, racerNum)}/>
														</div>
														<div className='m-2 d-flex justify-content-center align-items-center'>
															<NFTCard key={carNum} type={0} nft={getCarbyId(carsAssets, carNum)}/>
														</div>
													</div	>
												}
											</div>
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

