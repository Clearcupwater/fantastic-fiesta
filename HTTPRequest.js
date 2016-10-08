var http = require('http');

var httpLocation = process.argv[2];

http.get(httpLocation,function callback (response){
	response.setEncoding('utf8');
	response.on("data", function (data) {
		console.log(data);
	


	});	

	
	response.on("error", function(error){
		console.error(error);


	});



	})




