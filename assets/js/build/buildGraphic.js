BuildWidget.prototype.buildGraphic = function() {
	this.svg = d3.select(this.target + "> .chart").append("svg")
		.attr("width", this.params.width + this.params.margin.left + this.params.margin.right)
		.attr("height", this.params.height + this.params.margin.top + this.params.margin.bottom);

	var clip = this.svg.append("defs").append("svg:clipPath")
					.attr("id", "clip")
				  .append("svg:rect")
					.attr("x", 0)
					.attr("y", 0)
					.attr("width", this.params.width)
					.attr("height", this.params.height);

	this.yAxisGroup = this.svg.append("g")
		.attr("class", "y axis")
		.attr("transform", "translate(" +this.params.margin.left + "," + this.params.margin.top + ")");

	this.xAxisGroup = this.svg.append("g")
		.attr("class", "x axis")
		.attr("transform", "translate(" + this.params.margin.left + "," + (this.params.margin.top + this.params.height) + ")");

	this.trailsGroup = this.svg.append("g")
							.attr("class","trailsGroup")
							.attr("clip-path", "url(#clip)")
							.attr("transform","translate(" + this.params.margin.left + "," + this.params.margin.top + ")");	

	this.scatterGroup = this.svg.append("g")
							.attr("class","scatterGroup")
							.attr("clip-path", "url(#clip)")
							.attr("transform","translate(" + this.params.margin.left + "," + this.params.margin.top + ")");	

	this.sliderSvg = d3.select(this.target + "> .widget-slider ")
		.append("svg")
		.attr("width", this.params.width + this.params.margin.left + this.params.margin.right)
		.attr("height", this.params.sliderHeight);

	this.dropdown = d3.select(this.target + "> .widget-selector")
		.append("select");
};
