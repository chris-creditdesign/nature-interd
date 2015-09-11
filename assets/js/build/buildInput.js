BuildWidget.prototype.buildInput = function() {
	var self = this;

	this.slider = d3.select(this.target + "> .widget-selector > .widget-slider")
		.style("padding", ("0 " + (this.params.margin.right - 10) + "px 0 " + (this.params.margin.left - 10) + "px"));

	this.slider.append("input")
				.attr("type","range")
				.attr("name","year")
				.attr("min", this.data.years[0])
				.attr("max", (this.data.years[this.data.years.length - 1]))
				.attr("step", 1)
				.attr("value", 0)
				.style("width", (this.params.width + 20) + "px")
				// .style("margin-top", this.params.sliderHeight + "px")
				.on("input", function() {
					self.params.year = (this.value - self.data.years[0]);
					self.updateScatterPlot();
				});

	/*	selection.on("input") doesn't seem to work in ie
		repeating the call to drawFrame() here on slide end */
	jQuery(".outerwrapper input[type='range']").click(function(){
		this.blur();
		this.focus();
		self.params.year = (this.value - self.data.years[0]);
		self.updateScatterPlot();
	});
	
};


	// <form oninput="result.value=parseInt(a.value)+parseInt(b.value)">
	// 	<input type="range" name="b" value="50" /> +
	// 	<input type="number" name="a" value="10" /> =
	// 	<output name="result"></output>
	// </form>

// var outerwrapper = d3.select(".outerwrapper");

/*	makeRange()
	Append an input[type="range"] and call drawFrame on change */
// function makeRange () {
// 	range = outerwrapper.select(".widget-selector")

// }

// makeRange();