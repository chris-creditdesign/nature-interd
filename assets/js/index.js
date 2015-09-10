(function() {
	var d3url = "http://www.nature.com/polopoly_static/js/d3.v3.min.js";

	var init = function($) {
		/*	Load D3 */
		$.getScript(d3url, function() {

			var outerwrapper = d3.select(".outerwrapper");

			/*	makeRange()
				Append an input[type="range"] and call drawFrame on change */
			function makeRange () {
				range = outerwrapper.select(".widget-selector")
											.append("input")
											.attr("type","range")
											.attr("min", 0)
											.attr("max", 10)
											.attr("step", 1)
											.attr("value", 0)
											.on("input", function() {
												console.log(this.value);
											});				

				/*	selection.on("input") doesn't seem to work in ie
					repeating the call to drawFrame() here on slide end */
				// jQuery(".outerwrapper input[type='range']").click(function(){
				// 	this.blur();
				// 	this.focus();
				// 	drawFrame(this.value);
				// });
			}

			makeRange();

		});
	};

	setTimeout(function() {
		if (typeof jQuery !== 'undefined'){
			init(jQuery);
		} else {
			setTimeout(arguments.callee, 60);
		}
	}, 60);
})();