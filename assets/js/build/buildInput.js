BuildWidget.prototype.buildInput = function() {
	var self = this;

	this.svg = d3.select(this.target + "> .widget-selector")
				.append("input")
				.attr("type","range")
				.attr("min", 0)
				.attr("max", (this.data.data.length -1))
				.attr("step", 1)
				.attr("value", 0)
				.on("input", function() {
					self.params.year = this.value;
					self.updateScatterPlot();
				});				
};


// var outerwrapper = d3.select(".outerwrapper");

/*	makeRange()
	Append an input[type="range"] and call drawFrame on change */
// function makeRange () {
// 	range = outerwrapper.select(".widget-selector")

	/*	selection.on("input") doesn't seem to work in ie
		repeating the call to drawFrame() here on slide end */
// 	jQuery(".outerwrapper input[type='range']").click(function(){
// 		this.blur();
// 		this.focus();
// 		drawFrame(this.value);
// 	});
// }

// makeRange();