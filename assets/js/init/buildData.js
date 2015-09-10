function buildData (data) {

	var disciplineArray = [];

	data.forEach(function (element, array, index) {
		element.ref = parseFloat(element.OutDiscRef);
		element.cit = parseFloat(element.OutDiscCit);

		if (disciplineArray.indexOf(element.Discipline) === -1) {
			disciplineArray.push(element.Discipline);
		}
	});

	var nest = d3.nest()
		.key(function (d) {
			return d.Year;
		})
		.entries(data);

	return {
		data: nest,
		discipline: disciplineArray
	};
}