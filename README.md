# Indirect costs: Keeping the lights on

Interactive graphic for @NatureNews

Published online: http://www.nature.com/news/indirect-costs-keeping-the-lights-on-1.16376#/interactive

Built with [d3.js](http://d3js.org/).

### Build process

Uses [Grunt](http://gruntjs.com/) for file concatenation, to compile [Sass](http://sass-lang.com/) and apply [JSHint](https://github.com/gruntjs/grunt-contrib-jshint). If you've not used Grunt before, be sure to check out the [getting started guide](http://gruntjs.com/getting-started).

Install dependencies with `npm install`

Type `grunt` to automatically watch for changes and concat a version of `index.html` into the build and dist folders.

**build/index.html** can be used for local testing. You'll need to set up a local server, which is nice and easy to do with Python 2 on a mac.

	cd build
	python -m SimplHTTPServer 

**dist/index.html** is a 'headerless' file ready to be copied into the polopoly CMS as a HTML widget.


### Extract relevant data from CSV file

Number of lines before editing:

	wc -l data/latestdata.csv
	9719 data/latestdata.csv

List of columns: `data/latestdata.csv`


1. Discipline
2. Specialty
3. Year
4. AllRef
5. OutSpecRef
6. OutDiscRef
7. AllCit
8. OutSpecCit
9. OutDiscCit


Remove Professional fields, all subjects and discipline averages:

	csvcut -c 1,2,3,6,9 data/latestdata.csv |
	csvgrep -c 1 -m "Professional Fields" -i |
	csvgrep -c 1 -m "All subjects" -i | 
	grep "Arts,Arts" -v | 
	grep "Biology,Biology" -v | 
	grep "Biomedical Research,Biomedical Research" -v | 
	grep "Chemistry,Chemistry" -v | 
	grep "Clinical Medicine,Clinical Medicine" -v | 
	grep "Earth and Space,Earth and Space" -v | 
	grep "Engineering and Technology,Engineering and Technology" -v | 
	grep "Health,Health" -v | 
	grep "Humanities,Humanities" -v | 
	grep "Mathematics,Mathematics" -v | 
	grep "Physics,Physics" -v | 
	grep "Psychology,Psychology" -v | 
	grep "Social Sciences,Social Sciences" -v > build/data/interd-data.csv

Number of lines after editing:

	wc -l build/data/interd-data.csv
	8285 build/data/interd-data.csv
