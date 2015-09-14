BuildWidget.prototype.buildAxes = function() {
	var self = this;

	this.yAxis = d3.svg.axis()
		.scale(this.yScale)
		.tickSize(-this.params.width ,0)
		.orient("left");

	this.xAxis = d3.svg.axis()
		.scale(this.xScale)
		.tickSize(-this.params.height ,0)
		.orient("bottom");

	this.yearAxis = d3.svg.axis()
		.scale(this.yearScale)
		.tickSize(20, 0)
		.ticks(this.params.width / this.params.yearPixelsPerTick)
		.orient("bottom")
		.tickFormat(d3.format("d"));


	this.yAxisGroup.call(this.yAxis)
	  .append("g")
		.attr("class", "axisLabel")
	  .append("text")
		.attr("transform", "translate(" + -(this.params.margin.left * 0.6) + "," + (this.params.height / 2) + "), rotate(-90)")
		.style("text-anchor", "middle")
		.text(function () {
			return self.params.key.yAxisLabel;
		});

	this.xAxisGroup.call(this.xAxis)
	  .append("g")
		.attr("class","axisLabel")
	  .append("text")
		.attr("transform", "translate(" + (this.params.width / 2) + "," + (this.params.margin.bottom * 0.7) + ")")
		.style("text-anchor","middle")
		.text(function () {
				return self.params.key.xAxisLabel;
		});

};