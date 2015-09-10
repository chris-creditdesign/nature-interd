BuildWidget.prototype.enterScatterPlot = function() {
	var self = this;
	
	this.scatterGroup.selectAll("circle")
		.data(this.data.data[this.params.year].values, function (d) {
			return d.Specialty;
		})
		.enter()
	  .append("circle")
		.attr("cx", function (d) {
			return self.xScale(d.ref);
		})
		.attr("cy", function (d) {
			return self.yScale(d.cit);
		})
		.attr("r", 5)
		.attr("fill", function (d) {
			return self.colourScale(d.Specialty);
		});
};

BuildWidget.prototype.updateScatterPlot = function() {
	var self = this;

	this.scatterGroup.selectAll("circle")
		.data(this.data.data[this.params.year].values, function (d) {
			return d.Specialty;
		})
		.attr("cx", function (d) {
			return self.xScale(d.ref);
		})
		.attr("cy", function (d) {
			return self.yScale(d.cit);
		});
};