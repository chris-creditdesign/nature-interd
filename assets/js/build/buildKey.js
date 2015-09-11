BuildWidget.prototype.buildColourList = function (target) {
	var self = this;

	d3.select(target)
	  .append("ul")
		.selectAll("li")
		.data(self.data.discipline)
		.enter()
	  .append("li")
		.attr("class", "palette")
		.html(function (d, i) {
			var checked = 'checked';
			
			var safeName = d.toLowerCase().split(' ').join("_");

			var innerHTML = "<label ><input type='checkbox' value='" + safeName + "' " + checked + "> " + d + "</label>";

			return innerHTML;
		})
		.style("border-color", function(d) {
			return self.colourScale(d);
		});
};