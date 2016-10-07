var fs = require('fs');

var fileLocation = process.argv[2];
var buffer = fs.readFileSync(fileLocation);
var bufferStr = buffer.toString();
var fileArray = bufferStr.split('\n');
var counter = 0;

for (i = 0; i <fileArray.length; i++){
	counter = counter + 1; 
	

} 

console.log(counter-1);
