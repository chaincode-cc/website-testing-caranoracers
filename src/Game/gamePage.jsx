import React, {useEffect, useState} from 'react';
import { useSelector } from 'react-redux';
import { setInvironment, randomFloorMath, rivalTotal, playerTotal} from './game';
import axios from 'axios';

import NFTModal from './nftmodal';
import NFTCard from './nftGameCard';
import StartAnimation from './startAnimation';
import WinnerBoard from './winnerBoard';


// https://docs.cardano.org/native-tokens/getting-started

const GamePage = () => {
//Map
	const [mapStats, setMap] = useState({});

	//Rivals
	const [rivalRacers, setRivalRacers] = useState({});
	const [rivalCars, setRivalCars] = useState({});
	const numOfRivals = 10;

	//Player
	const [carStats, setCarStats] = useState({});
	const [driverStats, setDriverStats] = useState({});
	// const [carNFTnum, setCarNFTnum] = useState(0);
	// const [driverNFTnum, setRacerNFTnum] = useState(0);
	const carNum = useSelector(state => state.nftSelector.carSelected);
	const racerNum = useSelector(state => state.nftSelector.racerSelected);
	const playerSelected = useSelector(state => state.nftSelector.playerSelected);



	//Results
	const [raceTotals, setRaceResults] = useState({});
	const [winnerTable, setWinners] = useState({});
	const [racerpos, setRacerPos] = useState({});


	// NEW
	const policy = '8a1b05b76eee50197129afa36987ea10e631417fa4a91a6a909b9909';
	const addr = 'addr_test1vpx7m5s2njg8ydzdr73gufk2jvj0uh2qdctcgc9xzcmgpzsukyek4';
	
	const [wallets, setWallets] = useState([]);
	const [assetName, setAssetName] = useState([]);
	const [assets, setAssets] = useState([]);
	const [carsAssets, setCars] = useState([]);
	const [driversAssets, setDrivers] = useState([]);

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

	useEffect( () => {
		setAssetName(wallets
			.map(x => x.asset_list)
			.map(x=>x.filter((x)=> 
			{return x.policy_id === policy;}))
			.map(x=>x.map(x=>x.asset_name)));	
	}, [wallets]);

	useEffect( () => {	
		const fetchAssets = async () => {
			const assetData = [];
			const carData = [];
			const driverData = [];
			for (const innerArray of assetName) {
				for (const name of innerArray) {
					const response = await axios.get(`https://preprod.koios.rest/api/v0/asset_info?_asset_policy=${policy}&_asset_name=${name}`);
					let mapped = response.data.map(x => x.minting_tx_metadata['721'][policy]);
					assetData.push(...mapped);
					Object.values(mapped[0])[0].type === 'car' ? carData.push(...Object.values(mapped[0])): driverData.push(...Object.values(mapped[0]));
				}}
			setAssets(assetData);
			setCars(carData);
			setDrivers(driverData);
		};
		if (wallets.length > 0) {
			fetchAssets();
		}
	}, [wallets]);

	


	function settingUpAll (){
		setMap(setInvironment());
		settingRivals(),
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
		setWinners(list);
	},[raceTotals]);

	useEffect(()=>{
		let list2 = Object.values(winnerTable);
		let index = list2.findIndex(item => item.RacerId);
		setRacerPos(index+1);
	},[winnerTable]);

	// const handleRacerNFTNumInput = event => {
	// 	setRacerNFTnum(event.target.value);
	// };
	// const handleCarNFTNumInput = event => {
	// 	setCarNFTnum(event.target.value);
	// };


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

	// const settingPlayer = (e) =>{
	// 	e.preventDefault();
	// 	let driverStats= [];
	// 	let carStats = [];
	// 	for (let i = 1; i <= driverNFTnum; i++)
	// 	{ 
	// 		let newCar = {
	// 			Name: i,
	// 			MaximumSpeed: randomFloorMath(1,10000),
	// 			Acceleration: randomFloorMath(1,10000),
	// 			Cornering: randomFloorMath(1,10000),
	// 			Aerodynamics: randomFloorMath(1,10000),
	// 		};
	// 		carStats.push(newCar);
	// 	}
	// 	for (let i = 1; i <= carNFTnum; i++){
	// 		let newDriver = {
	// 			Name: i,
	// 			Experience: randomFloorMath(1,10000),
	// 			Aggressiveness: randomFloorMath(1,10000),
	// 			Reflexes: randomFloorMath(1,10000),
	// 			Luck: randomFloorMath(1,10000),
	// 		};
	// 		driverStats.push(newDriver);

	// 	}
	// 	setDriverStats(driverStats);
	// 	setCarStats(carStats);
	// };

	const setRace = (e) =>{
		e.preventDefault();
		let rivalCombineDriCarAttrs= [];

		for (let i = 1; i <= numOfRivals; i++)
		{
			let newSet = rivalTotal(rivalRacers[i-1],rivalCars[i-1]);
			rivalCombineDriCarAttrs.push(newSet);
		}
		let newPlayer = playerTotal(driverStats[racerNum-1],carStats[carNum-1]);
		rivalCombineDriCarAttrs.push(newPlayer);
		setRaceResults(rivalCombineDriCarAttrs);	
	};


	return (
		<>
			{/* MAP */}
			<div className='d-flex mainBg justify-content-center align-items-center flex-column'>
				<button className='btn btn-secondary m-5' onClick={settingUpAll}>START AGAIN</button>
				{mapStats.raceMap && (
					<div>
						<h2>Racing circuit</h2>
						<p>Weather: {mapStats.RaceWeather}</p>
						<p>Straigthaways: {mapStats.raceMap.straigthaways}</p>
						<p>Turns: {mapStats.raceMap.turns}</p>
						<p>Lap length: {mapStats.raceMap.lapLength.toFixed(2)} km</p>
					</div>
				)}

				{/* NFT SELECTOR */}
				{/* {driverStats.length > 0 ? <></> :
					<form className='d-flex justify-content-center align-items-center flex-column' onSubmit={settingPlayer}>
						<div className="input-group input-group-sm d-flex mt-2">
							<div className="input-group-prepend">
								<span className="input-group-text" id="inputGroup-sizing-sm">How many CardanoRacers Racer NTFs do you have?</span>
							</div>
							<input type="number" min='1' placeholder='Select...' onChange={handleRacerNFTNumInput} className="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
						</div>
						<div className="input-group input-group-sm d-flex mt-3">
							<div className="input-group-prepend">
								<span className="input-group-text" id="inputGroup-sizing-sm">How many CardanoRacers Car NTFs do you have?</span>
							</div>
							<input type="number" min='1' placeholder='Select...' onChange={handleCarNFTNumInput} className="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
						</div>
						<button className='btn btn-secondary mt-3'>SET YOUR NFTS</button>
					</form>
				} */}


				{assets.length > 0 &&
<>
	{/* MODAL */}
	{raceTotals.length === 0 ? <></> : <NFTModal driverStats={driversAssets} carStats={carsAssets} />}


	{/* RESULTS */}
	{(racerNum && carNum) ? 
		<>
			{winnerTable.length > 0 ? 
				<div className='d-flex justify-content-center align-items-center flex-column mt-3'>
					<StartAnimation />
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
				</div>
				:
				<>{playerSelected && 
<div className='d-flex justify-content-center align-items-center flex-column mt-3'>
	<div style={{width:'50%'}} className="d-flex flex-wrap justify-content-center">						
		{(racerNum > 0 && carNum > 0 ) ? 
			<><div style={{width:'30%'}} className='m-2 w-25  d-flex justify-content-center align-items-center'>
				<NFTCard  key={racerNum} type={1} nft={driverStats[racerNum-1]}/>
			</div>
			<div style={{width:'30%'}} className='m-2 w-25 d-flex justify-content-center align-items-center'>
				<NFTCard key={carNum} type={0} nft={carStats[carNum-1]}/>
			</div>
			</>
			:<></>
		}
	</div>
	<WinnerBoard />	
	<a className="btn btn-secondary m-5" data-bs-toggle="modal" href="#winnerModal" onClick={setRace} role="button">START RACE!</a>
</div>
				}</>
			}
		</> 
		: <></>

	}
</>
				}

			</div>

		</>
	);
};

export default GamePage;

