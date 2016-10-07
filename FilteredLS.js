var fs = require('fs');
var path = require('path');


var directory = process.argv[2];
var fileType = '.' + process.argv[3];

fs.readdir(directory,function (err,files) {
	if (err) throw err;
	files.forEach(function(file){
	
	 if(path.extname(file) === fileType) {

	console.log(file);
}	



});
});
