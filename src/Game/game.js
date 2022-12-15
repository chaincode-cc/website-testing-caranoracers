//Services
export const randomRoundMath = (min, max) => {
	return Math.round(Math.random() * (max * 100) + min * 100) / 100;
};
export const randomFloorMath = (min, max) => {
	return Math.floor(Math.random() * max + min);
};
export const toOneDecimal = (num) => {return 1+(num/10000);};
export const byTenThousand = (num) => {return (num/10000);};
export const byThousand = (num) => {return (num/1000);};


// STEP 1 => Environment
const weatherArr = ['Sunny', 'Windy', 'Rainy', 'Snowy', 'Icy'];
const luckArr = [0, 1, 2, 3, 4];

export function setRaceMap() {
	let turnsAndStraigthaways = randomFloorMath(2, 8);
	let settingLenghts = (type, num) => {
		if (type === 'turn') {
			let turns = {};
			for (let i = 1; i <= num; i++) {
				turns[i] = randomRoundMath(0.1, 1);
			}
			return turns;
		} else {
			let straigthaways = {};
			for (let i = 1; i <= num; i++) {
				straigthaways[i] = randomRoundMath(0.1, 2);
			}
			return straigthaways;
		}
	};
	let straightawayLengths = settingLenghts('straightaway', turnsAndStraigthaways);
	let turnLengths = settingLenghts('turn', turnsAndStraigthaways);
	let totalLapLenght = 0;
	for (let value of Object.values(straightawayLengths)) {
		totalLapLenght += value;
	}
	for (let value of Object.values(turnLengths)) {
		totalLapLenght += value;
	}
	let lapLength = totalLapLenght;
	return {
		lapLength: lapLength,
		turns: turnsAndStraigthaways,
		straigthaways: turnsAndStraigthaways,
		straightawayLengths: straightawayLengths,
		turnLengths: turnLengths,
		
	};
}

export function setInvironment() {
	return {
		RaceWeather: weatherArr[randomFloorMath(0, weatherArr.length)],
		RaceLuck: luckArr[randomFloorMath(0, luckArr.length)],
		lapTime: randomRoundMath(10, 30),
		raceMap: setRaceMap(),
	};
}

let raceEnvironment = setInvironment();

console.log('ENVIROMENT==>',raceEnvironment);

// STEP 2 => Drivers and Cars
export let driversCount = {};
export let carsCount = {};
export function setDriversAndCars(type, num) {
	for (let i = 1; i <= num; i++) {
		if (type == 'cars'){
			carsCount[i] = {
				Name: [i],
				MaximumSpeed: randomFloorMath(1,10000),
				Acceleration: randomFloorMath(1,10000),
				Cornering: randomFloorMath(1,10000),
				Aerodynamics: randomFloorMath(1,10000),};
		}
		else if (type == 'drivers'){
			driversCount[i] = {
				Name: [i],
				Experience: randomFloorMath(1,10000),
				Aggressiveness: randomFloorMath(1,10000),
				Reflexes: randomFloorMath(1,10000),
				Luck: randomFloorMath(1,10000),};
		}
	}	
}

setDriversAndCars('cars',2);
setDriversAndCars('drivers',2);

console.log('DRIVERS==>',driversCount,'CARS==>',carsCount);

// STEP 3 => Attribution distribution

const { RaceWeather, raceMap, lapTime } = raceEnvironment;

export let weatherMultiplier = (weatherArr.indexOf(RaceWeather) +1 );
export let straightawayVar = (Object.values(raceMap.straightawayLengths).reduce((total, value) => total + value, 0) * raceMap.straigthaways)/10000;
export let turnVar = (Object.values(raceMap.turnLengths).reduce((total, value) => total + value, 0) * raceMap.turns)/10000;
export let AvegSpeed = raceMap.lapLength / lapTime;

const driver1 = Object.values(driversCount)[0];
const driver2 = Object.values(driversCount)[1];
const car1 = Object.values(carsCount)[0];
const car2 = Object.values(carsCount)[1];

export function combineDriCarAttr (driver, car){
	return{
		ExpAcc: toOneDecimal(driver.Experience) * byTenThousand(car.Acceleration),
		AggAcc: toOneDecimal(driver.Aggressiveness) * byTenThousand(car.Acceleration),
		RefAcc: toOneDecimal(driver.Reflexes) * byTenThousand(car.Acceleration),
		ExpCor: toOneDecimal(driver.Experience) * byTenThousand(car.Cornering),
		AggCor: toOneDecimal(driver.Aggressiveness) * byTenThousand(car.Cornering),
		RefCor: toOneDecimal(driver.Reflexes) * byTenThousand(car.Cornering),
	};
}

export function setPlayer (driver, car) {
	let player = combineDriCarAttr(driver,car);
	let accTotal = byThousand(player.ExpAcc + player.AggAcc + player.RefAcc + straightawayVar + turnVar + ((driver.Luck/100000000)*raceEnvironment.RaceLuck)) / weatherMultiplier;
	let corTotal = byThousand(player.ExpCor+  player.AggCor + player.RefCor + turnVar + ((driver.Luck/100000000)*raceEnvironment.RaceLuck)) / weatherMultiplier;
	let speTotal = byThousand(byTenThousand(car.MaximumSpeed) + straightawayVar + ((driver.Luck/100000000)*raceEnvironment.RaceLuck)) / weatherMultiplier;
	let aerTotal = byThousand(byTenThousand(car.Aerodynamics) + straightawayVar + ((driver.Luck/100000000)*raceEnvironment.RaceLuck)) / weatherMultiplier;	
	let lapSpeed = accTotal+corTotal+speTotal+aerTotal+AvegSpeed;
	return {
		Name: driver.Name,
		AccTotal: accTotal,
		CorTotal: corTotal,
		SpeTotal: speTotal,
		AerTotal: aerTotal,
		LapSpeed: lapSpeed,
		LapTime: (1/lapSpeed*raceMap.lapLength)
	};
}

let player1 = setPlayer(driver1,car1);
let player2 = setPlayer(driver2,car2);

function showingWinner(p1, p2) {
	let winner = [];
	if (p1.LapTime > p2.LapTime) {winner.push(p1.Name);} else{winner.push(p2.Name);}
	return winner[0][0];
}

console.log('Player', driver1.Name[0],'statistics',combineDriCarAttr(driver1,car1),setPlayer(driver1,car1));
console.log('Player', driver2.Name[0],'statistics',combineDriCarAttr(driver2,car2),setPlayer(driver2,car2));
console.log('AND THE WINNER IS...... PLAYER ',showingWinner(player1, player2),'!!!!');