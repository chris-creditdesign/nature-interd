BuildWidget.prototype.buildScales = function(first_argument) {
	var self = this;

	this.yScale = d3.scale.linear()
		.range([this.params.height, 0])
		.domain([0,100]);

	this.xScale = d3.scale.linear()
		.range([0, this.params.width])
		.domain([0,100]);

	this.colourScale = d3.scale.ordinal()
		.range(this.params.colour)
		.domain(this.data.discipline);

	this.yearScale = d3.scale.linear()
		.range([0, this.params.width])
		.domain([d3.min(this.data.years),d3.max(this.data.years)])
		.clamp(true);

	this.line = d3.svg.line()
	    .x(function(d){
	    	return self.xScale(d.ref);
	    })
	    .y(function(d){
	    	return self.yScale(d.cit);
	    });
};
