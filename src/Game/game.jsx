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
export const weatherArr = ['Sunny', 'Windy', 'Rainy', 'Snowy', 'Icy'];
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
		Raceluck: luckArr[randomFloorMath(0, luckArr.length)],
		lapTime: randomRoundMath(10, 30),
		raceMap: setRaceMap(),
	};
}

let raceEnvironment = setInvironment();


// STEP 2 => Drivers and Cars
export let driversCount = {};
export let carsCount = {};
export function setDriversAndCars(type, num) {
	for (let i = 1; i <= num; i++) {
		if (type == 'cars'){
			carsCount[i] = {
				Name: [i],
				maximumspeed: randomFloorMath(1,10000),
				acceleration: randomFloorMath(1,10000),
				cornering: randomFloorMath(1,10000),
				aerodynamics: randomFloorMath(1,10000),};
		}
		else if (type == 'drivers'){
			driversCount[i] = {
				Name: [i],
				experience: randomFloorMath(1,10000),
				aggressiveness: randomFloorMath(1,10000),
				reflexes: randomFloorMath(1,10000),
				luck: randomFloorMath(1,10000),};
		}
	}	
}

setDriversAndCars('cars',2);
setDriversAndCars('drivers',2);


// STEP 3 => Attribution distribution

const { RaceWeather, raceMap, lapTime } = raceEnvironment;

let weatherMultiplier = (weatherArr.indexOf(RaceWeather) +1 );
let straightawayVar = (Object.values(raceMap.straightawayLengths).reduce((total, value) => total + value, 0) * raceMap.straigthaways)/10000;
let turnVar = (Object.values(raceMap.turnLengths).reduce((total, value) => total + value, 0) * raceMap.turns)/10000;
let AvegSpeed = raceMap.lapLength / lapTime;

// const driver1 = Object.values(driversCount)[0];
// const driver2 = Object.values(driversCount)[1];
// const car1 = Object.values(carsCount)[0];
// const car2 = Object.values(carsCount)[1];

export function combineDriCarAttr (driver, car){
	return{
		ExpAcc: toOneDecimal(driver.experience) * byTenThousand(car.acceleration),
		AggAcc: toOneDecimal(driver.aggressiveness) * byTenThousand(car.acceleration),
		RefAcc: toOneDecimal(driver.reflexes) * byTenThousand(car.acceleration),
		ExpCor: toOneDecimal(driver.experience) * byTenThousand(car.cornering),
		AggCor: toOneDecimal(driver.aggressiveness) * byTenThousand(car.cornering),
		RefCor: toOneDecimal(driver.reflexes) * byTenThousand(car.cornering),
	};
}

export function playerTotal (driver, car) {
	let player = combineDriCarAttr(driver,car);
	let accTotal = byThousand(player.ExpAcc + player.AggAcc + player.RefAcc + straightawayVar + turnVar + ((driver.luck/100000000)*raceEnvironment.Raceluck)) / weatherMultiplier;
	let corTotal = byThousand(player.ExpCor+  player.AggCor + player.RefCor + turnVar + ((driver.luck/100000000)*raceEnvironment.Raceluck)) / weatherMultiplier;
	let speTotal = byThousand(byTenThousand(car.maximumspeed) + straightawayVar + ((driver.luck/100000000)*raceEnvironment.Raceluck)) / weatherMultiplier;
	let aerTotal = byThousand(byTenThousand(car.aerodynamics) + straightawayVar + ((driver.luck/100000000)*raceEnvironment.Raceluck)) / weatherMultiplier;	
	let lapSpeed = accTotal+corTotal+speTotal+aerTotal+AvegSpeed;
	return {
		RacerId: `Racer${driver.Name}`,
		CarId: `Car${car.Name}`,
		AccTotal: accTotal,
		CorTotal: corTotal,
		SpeTotal: speTotal,
		AerTotal: aerTotal,
		LapSpeed: lapSpeed,
		LapTime: (1/lapSpeed*raceMap.lapLength)
	};
}

export function rivalTotal (driver, car) {
	let player = combineDriCarAttr(driver,car);
	let accTotal = byThousand(player.ExpAcc + player.AggAcc + player.RefAcc + straightawayVar + turnVar + ((driver.luck/100000000)*raceEnvironment.Raceluck)) / weatherMultiplier;
	let corTotal = byThousand(player.ExpCor+  player.AggCor + player.RefCor + turnVar + ((driver.luck/100000000)*raceEnvironment.Raceluck)) / weatherMultiplier;
	let speTotal = byThousand(byTenThousand(car.maximumspeed) + straightawayVar + ((driver.luck/100000000)*raceEnvironment.Raceluck)) / weatherMultiplier;
	let aerTotal = byThousand(byTenThousand(car.aerodynamics) + straightawayVar + ((driver.luck/100000000)*raceEnvironment.Raceluck)) / weatherMultiplier;	
	let lapSpeed = accTotal+corTotal+speTotal+aerTotal+AvegSpeed;
	return {
		rivalId: `Rival #${driver.Name}`,
		AccTotal: accTotal,
		CorTotal: corTotal,
		SpeTotal: speTotal,
		AerTotal: aerTotal,
		LapSpeed: lapSpeed,
		LapTime: (1/lapSpeed*raceMap.lapLength)
	};
}