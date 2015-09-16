function buildData (data) {

	var disciplineArray = [];
	var discShort = [];
	var yearArray = [];

	data.forEach(function (element, index, array) {
		element.ref = Math.round(parseFloat(element.OutDiscRef) * 100);
		element.cit = Math.round(parseFloat(element.OutDiscCit) * 100);
		element.dis = element.Discipline.toLowerCase().split(' ').join("_");

		if ( isNaN(element.ref)) {
			element.ref = 0;
		}

		if ( isNaN(element.cit)) {
			element.cit = 0;
		}

		if (disciplineArray.indexOf(element.Discipline) === -1) {
			disciplineArray.push(element.Discipline);
		}

		if (discShort.indexOf(element.dis) === -1) {
			discShort.push(element.dis);
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

	nest.sort(function (a, b) {
		return parseInt(a.key, 10) - parseInt(b.key, 10);
	});

	return {
		data: nest,
		discipline: disciplineArray,
		disciplineShortName: discShort,
		years: yearArray,
		highlighted: [],
		year: 50
	};
}
