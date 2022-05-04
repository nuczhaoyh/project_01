let fs = require('fs')
fs.readFile('./files/1.txt', 'utf8', function(error, dataStr) {
    console.log(error);
    console.log('--------');
    console.log(dataStr);
})