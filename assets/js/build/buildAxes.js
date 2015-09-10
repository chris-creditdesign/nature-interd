BuildWidget.prototype.buildAxes = function() {

	this.yAxis = d3.svg.axis()
		.scale(this.yScale)
		.tickSize(-this.params.width ,0)
		.orient("left");

	this.xAxis = d3.svg.axis()
		.scale(this.xScale)
		.tickSize(-this.params.height ,0)
		.orient("bottom");

	this.svg.append("g")
		.attr("class", "y axis")
		.attr("transform", "translate(" +this.params.margin.left + "," + this.params.margin.top + ")")
		.call(this.yAxis);

	this.svg.append("g")
		.attr("class", "x axis")
		.attr("transform", "translate(" + this.params.margin.left + "," + (this.params.margin.top + this.params.height) + ")")
		.call(this.xAxis);
};