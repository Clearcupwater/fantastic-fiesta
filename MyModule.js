var fs = require('fs');
var path = require('path');

module.exports = function (directory, extensionfilter, results) {

var directory = directory;
var fileType = '.' + extensionfilter;


fs.readdir(directory,function (err,files) {
        if (err) 
		throw err; 
		return results(err);
        list = files.filter(function(file){

         return path.extname(file) === '.' + filterStr;
}

	results(null,list);
});
});

results(err,data){







}



}















}
