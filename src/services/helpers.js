export function getRacerbyId (racerslist, racer) {
	var elementPos = racerslist.map(function(x) {return x.id; }).indexOf(racer);
	var objectFound = racerslist[elementPos];
	return objectFound;
}

export function getCarbyId (carlist, car) {
	var elementPos = carlist.map(function(x) {return x.id; }).indexOf(car);
	var objectFound = carlist[elementPos];
	return objectFound;
}