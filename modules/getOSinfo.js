var os = require('os');
var formatTime= require('../modules/formatTime');

function getOSinfo() {
	var typeSystem = os.type();
	if (typeSystem === 'Windows_NT') {
		typeSystem = "Windows";
	}
	else if (typeSystem === 'Darwin'){
		typeSystem = "macOS";
	}
   
   	var time = Math.floor(os.uptime());
   	console.log("System: " + typeSystem);
    console.log("Release: " + os.release());
    console.log("CPU model: " + os.cpus()[0].model);
    formatTime.print(time);
    console.log("User name: " + os.userInfo().username);
    console.log("Home dir: " + os.homedir());  
}

exports.print = getOSinfo;








