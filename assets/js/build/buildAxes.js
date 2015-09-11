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
		.tickSize(20, 3)
		.orient("bottom")
		.tickFormat(d3.format("d"));

	this.svg.append("g")
		.attr("class", "y axis")
		.attr("transform", "translate(" +this.params.margin.left + "," + this.params.margin.top + ")")
		.call(this.yAxis)
	  .append("g")
		.attr("class", "axisLabel")
	  .append("text")
		.attr("transform", "translate(" + -(this.params.margin.left * 0.6) + "," + (this.params.height / 2) + "), rotate(-90)")
		.style("text-anchor", "middle")
		.text(function () {
			return self.params.key.yAxisLabel;
		});

	this.svg.append("g")
		.attr("class", "x axis")
		.attr("transform", "translate(" + this.params.margin.left + "," + (this.params.margin.top + this.params.height) + ")")
		.call(this.xAxis)
	  .append("g")
		.attr("class","axisLabel")
	  .append("text")
		.attr("transform", "translate(" + (this.params.width / 2) + "," + (this.params.margin.bottom * 0.7) + ")")
		.style("text-anchor","middle")
		.text(function () {
				return self.params.key.xAxisLabel;
		});

	this.sliderSvg.append("g")
		.attr("class", "axis")
		.attr("transform","translate(" + this.params.margin.left + ",10)")
		.call(this.yearAxis);
};