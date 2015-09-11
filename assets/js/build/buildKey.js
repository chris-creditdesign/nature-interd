// BuildWidget.prototype.buildBox = function() {
// 	this.keyBox = this.keyGroup.append("rect")
// 		.attr("x", 10)
// 		.attr("y", 10)
// 		.attr("width", 150)
// 		.attr("height", 200)
// 		.attr("fill", "#fff")
// 		.attr("stroke", this.params.uiColour.grey)
// 		.attr("stroke-width", 1)
// 		.attr("opacity", 0.8);
// };

BuildWidget.prototype.buildColourList = function (target) {
	var self = this;

	d3.select(target)
	  .append("ul")
		.selectAll("li")
		.data(self.data.discipline)
		.enter()
	  .append("li")
		.attr("class", "palette")
		.text(function(d) {
			return d;
		})
		.style("border-color", function(d) {
			return self.colourScale(d);
		});
};