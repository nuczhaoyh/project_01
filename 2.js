let fs = require('fs')
fs.writeFile('./files/2.txt', '我是第二个js文件', 'utf8', function(err) {
    console.log(err);
})