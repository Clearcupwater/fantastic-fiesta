var fs = require('fs');

var fileLocation = process.argv[2];
var count = 0;

fs.readFile(fileLocation, (err,data) =>{
	if (err) throw err;
	count = data.toString().split('\n').length - 1;
	console.log(count);		



});

