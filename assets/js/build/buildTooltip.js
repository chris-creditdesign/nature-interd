BuildWidget.prototype.buildTooltip = function() {
	var self = this;

	this.scatterGroup.selectAll("circle")
		.on("mouseover", function (d) {
			var myCircle = d3.select(this);

			var tooltipWidth = parseInt(d3.select("#widget-tooltip").style("padding-left"),10) + parseInt(d3.select("#widget-tooltip").style("width"),10) + parseInt(d3.select("#widget-tooltip").style("padding-right"),10);

			var top = (parseFloat(myCircle.attr("cy")) + self.params.margin.top);
			var left = (parseFloat(myCircle.attr("cx")) + self.params.margin.left);

			if ( parseFloat(myCircle.attr("cx")) > (self.params.width / 2) ) {
				left -= tooltipWidth;
			}

			d3.select("#widget-tooltip")
				.style("top",  top + "px")
				.style("left", left + "px")
				.classed("hidden", false);

			d3.select("#name").text(d.Specialty);
			d3.select("#cit").text(d.cit + "%");
			d3.select("#ref").text(d.ref + "%");

		})
		.on("mouseout", function (d) {
			self.hideTooltip();
		});

	d3.select("#health-tooltip")
		.style("top",  (self.yScale(85) + this.params.margin.top) + "px")
		.style("right", (self.xScale(55) + this.params.margin.right) + "px")
		.classed("hidden", function () {
			if (self.data.year === (self.data.years.length - 1) && self.params.width > 500) {
				return false;
			} else {
				return true;
			}
		});

	d3.select("#medicine-tooltip")
		.style("top",  (self.yScale(27) + this.params.margin.top) + "px")
		.style("right", (self.xScale(3) + this.params.margin.right) + "px")
		.classed("hidden", function () {
			if (self.data.year === (self.data.years.length - 1) && self.params.width > 500) {
				return false;
			} else {
				return true;
			}
		});
};

BuildWidget.prototype.hideTooltip = function () {
	this.scatterGroup.selectAll("circle").attr("stroke-width", 0);
	d3.select("#widget-tooltip").classed("hidden", true);
};
