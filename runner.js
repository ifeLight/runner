var exec  = require("child_process").execSync

var command = process.argv[2];
var minutes = Number( process.argv[3]);

setInterval(function() {
    // body
    data = exec(command)
    console.log(data.toString());
}, minutes * 60000);

