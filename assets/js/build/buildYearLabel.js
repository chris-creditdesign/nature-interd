BuildWidget.prototype.buildYearLabel = function() {
	this.yearLabel = this.svg.append("text")
		.attr("transform", "translate(" + this.params.margin.left + "," + this.params.margin.top + ")")
		.style("text-anchor","start")
		.attr("dx", 15)
		.attr("dy", 40)
		.style("font-size", "30px")
		.style("fill", this.params.uiColour.darkGrey)
		.text(this.data.years[this.params.year]);
};