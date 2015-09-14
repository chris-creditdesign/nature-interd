BuildWidget.prototype.updateView = function() {
	var selectedDisciplines = []; 

	var checkboxes = jQuery(".outerwrapper #key input:checked");

	while (this.data.disciplineShortName.length > 0) {
		this.data.disciplineShortName.shift();
	}

	for (var i = 0; i < checkboxes.length; i++) {
		this.data.disciplineShortName.push(checkboxes.eq(i).val());
	}

	this.enterScatterPlot();
	this.updateScatterPlot();
	this.exitScatterPlot();
	this.hideTooltip();
	this.buildTooltip();

};