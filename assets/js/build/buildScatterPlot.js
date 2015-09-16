BuildWidget.prototype.enterScatterPlot = function() {
	var self = this;
	
	this.scatterGroup.selectAll("circle")
		.data(this.data.data[this.data.year].values, function (d) {
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
		.attr("r", self.params.dotRadius)
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
		})
		.classed("dot-selected", function (d) {
			if (self.data.highlighted.indexOf(d.Specialty) === -1) {
				return false;
			} else {
				return true;
			}
		});
};

BuildWidget.prototype.updateScatterPlot = function() {
	var self = this;

	this.scatterGroup.selectAll("circle")
		.data(this.data.data[this.data.year].values, function (d) {
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
		})
		.classed("dot-selected", function (d) {
			if (self.data.highlighted.indexOf(d.Specialty) === -1) {
				return false;
			} else {
				return true;
			}
		});
};

BuildWidget.prototype.exitScatterPlot = function () {
	this.scatterGroup.selectAll("circle")
		.data(this.data.data[this.data.year].values, function (d) {
			return d.Specialty;
		})
		.exit()
		.classed("hidden", true)
		.remove();
};
