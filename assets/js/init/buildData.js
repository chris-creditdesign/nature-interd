function buildData (data) {

	var disciplineArray = [];
	var yearArray = [];

	data.forEach(function (element, index, array) {
		element.ref = Math.round(parseFloat(element.OutDiscRef) * 100);
		element.cit = Math.round(parseFloat(element.OutDiscCit) * 100);

		if (disciplineArray.indexOf(element.Discipline) === -1) {
			disciplineArray.push(element.Discipline);
		}

		if (yearArray.indexOf(element.Year) === -1) {
			yearArray.push(element.Year);
		}
	});

	yearArray.forEach(function (element, index, array) {
		yearArray[index] = parseInt(element, 10);

	});

	yearArray.sort(function (a, b) {
		return a - b;
	});

	var nest = d3.nest()
		.key(function (d) {
			return d.Year;
		})
		.entries(data);

	return {
		data: nest,
		discipline: disciplineArray,
		years: yearArray
	};
}