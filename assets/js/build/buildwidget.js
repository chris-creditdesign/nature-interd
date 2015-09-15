function BuildWidget (target, params, data) {
	this.target = target;
	this.params = params;
	this.data = data;
}

BuildWidget.prototype.build = function() {
	this.buildGraphic();
	this.buildScales();
	this.buildAxes();
	this.enterScatterPlot();
	this.enterTrails();
	this.buildShowTrail();
	this.buildInput();
	this.buildTooltip();

	this.buildColourList("#key");
	this.buildYearLabel();

};

BuildWidget.prototype.destroy = function() {
	this.svg.remove();
	this.sliderSvg.remove();
	this.dropdown.remove();
	this.checkboxList.remove();

	while (this.data.showTrail.length > 0) {
		this.data.showTrail.pop();
	}
};
