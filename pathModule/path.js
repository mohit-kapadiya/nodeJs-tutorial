const path = require('path');

console.log("dir name",path.dirname('D:/mohit/nodejs/pathModule/path.js'))

console.log("extension name" , path.extname('D:/mohit/nodejs/pathModule/path.js'))

console.log("base name" , path.basename('D:/mohit/nodejs/pathModule/path.js'))

console.log("all about file info" , path.parse('D:/mohit/nodejs/pathModule/path.js'));

const fileData = path.parse('D:/mohit/nodejs/pathModule/path.js');
console.log("name of the file", fileData.base)
