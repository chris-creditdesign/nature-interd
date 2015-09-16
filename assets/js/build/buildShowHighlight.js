BuildWidget.prototype.buildShowHighlight = function() {
	var self = this;

	this.scatterGroup.selectAll("circle")
		.on("click", function (d) {
			var index = self.data.highlighted.indexOf(d.Specialty);

			if (index === -1 ) {
				self.data.highlighted.push(d.Specialty);
			} else {
				self.data.highlighted.splice(index, 1);
			}
			
			self.updateView();
		});
};
