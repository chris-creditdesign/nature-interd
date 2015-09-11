BuildWidget.prototype.buildInput = function() {
	var self = this;

	var brush = d3.svg.brush()
		.x(this.yearScale)
		.extent([0,0])
		.on("brush", brushed);

	this.sliderSvg.append("g")
		.attr("class", "axis")
		.attr("transform","translate(" + this.params.margin.left + ",10)")
	  .call(this.yearAxis)
		.select(".domain")
		.attr("stroke-width", "10")
		.attr("stroke-linecap", "round")
		.style("shape-rendering","auto")
		.style("stroke", this.params.uiColour.lightGrey);

	var slider = this.sliderSvg.append("g")
		.attr("class","slider")
		.attr("transform","translate(" + this.params.margin.left + ",0)")
		.call(brush);

	slider.selectAll(".extent, .resize")
		.remove();

	slider.select(".background")
		.attr("height", this.params.sliderHeight);

	var handle = slider.append("circle")
		.attr("class", "handle")
		.attr("transform", "translate(0, " + 10 + ")" )
		.attr("r", 10);

	function brushed() {
		var value = brush.extent()[0];

		if (d3.event.sourceEvent) { /* not a programmatic event */
			value = self.yearScale.invert(d3.mouse(this)[0]);
			brush.extent([value, value]);
		}

		self.params.year = self.data.years.indexOf(Math.round(value));
		self.updateView();
		self.yearLabel.text(self.data.years[self.params.year]);


		handle.attr("cx", self.yearScale(value));
	}
};


