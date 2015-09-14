function buildParams (argument) {
	var params = {};

	params.colour =  [
		"#e30513",  /* Arts */
		"#e84d0e",  /* Biology */
		"#f18700",  /* Biomedical Research */
		"#fbb900",  /* Chemistry */
		"#ffed00",  /* Clinical Medicine */
		"#d3d700",  /* Earth and Space */
		"#009640",  /* Engineering and Technology */
		"#79c6bf",  /* Health */
		"#009dd4",  /* Humanities */
		"#544595",  /* Mathematics */
		"#951b81",  /* Physics */
		"#b7195d",  /* Psychology */
		"#a99892" /* Social Sciences */

		// Need two more
	];

	params.uiColour = {
		veryLightGrey: "#ddd",
		lightGrey: "#999",
		grey: "#666",
		darkGrey: "#333"		
	};

	params.key = {
		xAxisLabel: "References to outside disciplines (%)",
		yAxisLabel: "Citations from outside disciplines (%)"
	};

	/*	Margin, Width and height */
	params.margin = {top: 20, right: 20, bottom: 50, left: 50};
	params.width = jQuery('.outerwrapper').width()  - params.margin.left - params.margin.right;
	params.height = jQuery('.outerwrapper').width() - params.margin.top - params.margin.bottom;

	params.dotRadius = params.width > 350 ?  5 : 3;

	params.yearPixelsPerTick = 40;
		
	params.sliderHeight = 50;

	params.year = 0;

	return params;
}