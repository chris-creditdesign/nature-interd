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

	this.xAxisGroup.append("line")
		.attr("class", "quadrant-line")
		.attr("x1", (this.params.width / 2))
		.attr("y1", 0)
		.attr("x2", (this.params.width / 2))
		.attr("y2", -this.params.height);

	if (this.params.width > 350) {
		this.xAxisGroup.append("text")
			.style("text-anchor","start")
			.attr("dx", 15)
			.attr("dy", -15)
			.style("font-size", "20px")
			.style("fill", this.params.uiColour.lightGrey)
			.text("Less interdisciplinary");

		this.xAxisGroup.append("text")
			.attr("transform", "translate(" + this.params.width + "," + (this.params.height * -1) + ")")
			.style("text-anchor","end")
			.attr("dx", -15)
			.attr("dy", 30)
			.style("font-size", "20px")
			.style("fill", this.params.uiColour.lightGrey)
			.text("More interdisciplinary");		
	}

	this.yAxisGroup.append("line")
		.attr("class", "quadrant-line")
		.attr("x1", 0)
		.attr("y1", (this.params.height / 2))
		.attr("x2", this.params.width)
		.attr("y2", (this.params.height / 2));
};
