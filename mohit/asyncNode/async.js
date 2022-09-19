const fs = require('fs');

// Write File


fs.writeFile('readAsync.txt' , 'Hii I am Mohit',
(err)=>{
    console.log(err)
});


// Read File

fs.readFile('readAsync.txt' , 'UTF-8',
(err , data)=>{
    console.log(err);
    console.log(data);
})


// check difference between sync and async file 


// sync file

const syncData = fs.readFileSync('readAsync.txt','utf-8');
console.log(syncData);
console.log('Outside Data');

// async file

fs.readFile('readAsync.txt' , 'utf-8' , 
(err , data)=>{
    console.log(err);
    console.log(data);
})

console.log("Outside Data")
