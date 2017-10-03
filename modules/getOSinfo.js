var os = require('os');
var formatTime= require('../modules/formatTime');

function getOSinfo() {
	if (os.type() === 'Windows_NT') {
		console.log("System: " + "Windows");
	}
	else if (os.type() === 'Darwin'){
		console.log("System: " + "macOS");
	}
   
   	var time = Math.floor(os.uptime());
    console.log("Release: " + os.release());
    console.log("CPU model: " + os.cpus()[0].model);
    formatTime.print(time);
    console.log("User name: " + os.userInfo().username);
    console.log("Home dir: " + os.homedir());  
}

exports.print = getOSinfo;








