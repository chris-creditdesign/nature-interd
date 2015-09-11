BuildWidget.prototype.buildColourList = function (target) {
	var self = this;

	var extendedDiscipline = ["All"];
	for (var i = 0; i < this.data.discipline.length; i++) {
		extendedDiscipline.push(this.data.discipline[i]);
	}

	console.log(self.colourScale("After"));

	d3.select(target)
	  .append("ul")
		.selectAll("li")
		.data(extendedDiscipline)
		.enter()
	  .append("li")
		.attr("class", "palette")
		.html(function (d, i) {
			var checked = 'checked';
			
			var safeName = d.toLowerCase().split(' ').join("_");

			var innerHTML = "<label ><input type='checkbox' value='" + safeName + "' " + checked + "> " + d + "</label>";

			return innerHTML;
		})
		.select("input")
		.style("background-color", function (d) {
			if (d === "All") {
				return self.params.uiColour.lightGrey;
			} else {
				return self.colourScale(d);
			}
		});
};