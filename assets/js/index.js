(function() {
	var d3url = "http://www.nature.com/widget_assets_polopoly/v518n7538/d3.v3.min.js";
	// var dataurl = "http://www.nature.com/widget_assets_polopoly/v525n7569/interd-data.csv";
	var dataurl = "data/interd-data.csv";

	var init = function($) {
		/*	Load D3 */
		$.getScript(d3url, function() {
			d3.csv(dataurl, function (error, d) {

				var data, params, widget;
				var width = $(window).width();
				var didResize = false;
				
				if (error) {
					$(".status-message").css("display","block");
				} else {
					$(".outerwrapper").css("display","block");

					data = buildData(d);
					params = buildParams();
					widget = new BuildWidget("#interd-graphic", params, data);

					widget.build();
				}

				$( window ).resize(function() {
					if($(window).width() != width){ 
						width = $(window).width();
						didResize = true;

						/* Throttle the resize */
						setTimeout(function () {
							if (didResize) {
								widget.destroy();
								widget.params = buildParams();
								widget.build();
								widget.updateView();
								
								didResize = false;
							}
						}, 60);

					}
				});
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
