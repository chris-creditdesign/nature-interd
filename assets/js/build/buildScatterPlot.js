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
		.attr("stroke", self.params.uiColour.darkGrey)
		.attr("stroke-width", 0)
		.attr("fill", function (d) {
			return self.colourScale(d.Discipline);
		})
		.classed("hidden", function (d) {
			if (self.data.disciplineShortName.indexOf(d.dis) === -1) {
				return true;
			} else {
				return false;
			}
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
		})
		.classed("hidden", function (d) {
			if (self.data.disciplineShortName.indexOf(d.dis) === -1) {
				return true;
			} else {
				return false;
			}
		});
};

BuildWidget.prototype.exitScatterPlot = function () {
	this.scatterGroup.selectAll("circle")
		.data(this.data.data[this.params.year].values, function (d) {
			return d.Specialty;
		})
		.exit()
		.classed("hidden", true)
		.remove();
};



