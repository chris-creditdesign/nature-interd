BuildWidget.prototype.buildShowTrail = function() {
	var self = this;

	this.scatterGroup.selectAll("circle")
		.on("click", function (d) {
			var index = self.data.showTrail.indexOf(d.Specialty);

			if (index === -1 ) {
				self.data.showTrail.push(d.Specialty);
			} else {
				self.data.showTrail.splice(index, 1);
			}

			self.updateView();
		});
};