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

	this.buildInput();
	this.buildTooltip();

	this.buildShowHighlight();

	this.buildColourList("#key");
	this.buildYearLabel();

};

BuildWidget.prototype.destroy = function() {
	this.svg.remove();
	this.sliderSvg.remove();
	this.dropdown.remove();
	this.checkboxList.remove();
};
