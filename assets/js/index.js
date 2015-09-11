(function() {
	var d3url = "http://www.nature.com/polopoly_static/js/d3.v3.min.js";
	var dataurl = "/data/interd-data.csv";

	var init = function($) {
		/*	Load D3 */
		$.getScript(d3url, function() {
			d3.csv(dataurl, function (error, d) {
				
				if (error) {
					// $(".status-message").css("display","block");
					console.log(error);
				} else {
				
					var data = buildData(d);

					var params = buildParams();

					var widget = new BuildWidget("#interd-graphic", params, data);

					widget.buildGraphic();
					widget.buildScales();
					widget.buildAxes();
					widget.enterScatterPlot();
					widget.buildInput();
					widget.buildTooltip();

					widget.buildColourList("#key");

				}
			});

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