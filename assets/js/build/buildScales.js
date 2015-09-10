BuildWidget.prototype.buildScales = function(first_argument) {

	this.yScale = d3.scale.linear()
		.range([this.params.height, 0])
		.domain([0,1]);

	this.xScale = d3.scale.linear()
		.range([0, this.params.width])
		.domain([0,1]);

	this.colourScale = d3.scale.ordinal()
		.domain(this.data.discipline)
		.range(this.params.colour);

};