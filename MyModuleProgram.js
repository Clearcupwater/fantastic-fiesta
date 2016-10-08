var mymodule = require('./MyModule.js');

var directory = process.argv[2];
var fileType = process.argv[3];


mymodule(directory, fileType, function (err, files) {

	if (err) {

		return console.error('There was an error:', err);
	};
		
	files.forEach(function(file){
		console.log(file);
		
	})




})



