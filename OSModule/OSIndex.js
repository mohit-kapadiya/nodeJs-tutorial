const os = require('os');

console.log( "architecture",os.arch());

const freeMemory = os.freemem()
console.log(`free memory : ${freeMemory/1024/1024/1024}`)

const totalMemory = os.totalmem();
console.log(`total memory : ${totalMemory/1024/1024/1024}`);

console.log('host name',os.hostname());

console.log('platform',os.platform());

console.log('type of os' , os.type());


console.log('temp dir' , os.tmpdir());
