BuildWidget.prototype.buildColourList = function (target) {
	var self = this;
	var thisProp;

	function makeSafe (i) {
		return i.toLowerCase().split(' ').join("_");
	}

	var extendedDiscipline = ["All"];
	for (var i = 0; i < this.data.discipline.length; i++) {
		extendedDiscipline.push(this.data.discipline[i]);
	}

	this.checkboxList = d3.select(target)
	  .append("ul");

	this.checkboxes = this.checkboxList
		.selectAll("li")
		.data(extendedDiscipline)
		.enter()
	  .append("li")
		.style("border-bottom-color", function (d) {
			if (d === "All") {
				return self.params.uiColour.lightGrey;
			} else {
				return self.colourScale(d);
			}
		});
	
	this.checkboxes.append("input")
		.attr("type","checkbox")
		.attr("checked","true")
		.attr("value", function (d) {
			return makeSafe(d);
		})
		.attr("name", function (d) {
			return makeSafe(d);
		})
		.attr("id", function (d) {
			return makeSafe(d);
		});

	this.checkboxes.append("label")
		.text(function (d) { return d;})
		.attr("for", function (d) {
			return makeSafe(d);
		});

	this.checkboxes.on("change", function () {
		var checkbox = d3.select(this).select("input");

		if (checkbox.attr("value") === "all") {
			console.log();
			thisProp = checkbox.node().checked;

			self.checkboxes.each(function () {
				d3.select(this).select("input").node().checked = thisProp;
			});
		}

		self.updateView();

	});
};
