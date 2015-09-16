BuildWidget.prototype.enterTrails = function() {
	var self = this;

	this.trailsGroup.selectAll("path")
		.data(self.data.trails, function (d) {
			return d.key;
		})
		.enter()
	  .append("path")
		.attr("d", function (d) {
			return self.line(d.trail);
		})
		.attr("fill", "none")
		.attr("stroke-weight", 1)
		.attr("stroke", function (d) {
			return self.colourScale(d.Discipline);
		})
		.classed("hidden", function (d) {
			if (self.data.showTrail.indexOf(d.Specialty) === -1) {
				return true;
			} else if (self.data.disciplineShortName.indexOf(d.dis) === -1) {
				return true;
			} else {
				return false;
			}
		});
};

BuildWidget.prototype.updateTrails = function () {
	var self = this;

	this.trailsGroup.selectAll("path")
		.classed("hidden", function (d) {
			if (self.data.showTrail.indexOf(d.Specialty) === -1) {
				return true;
			} else if (self.data.disciplineShortName.indexOf(d.dis) === -1) {
				return true;
			} else {
				return false;
			}
		});
};
