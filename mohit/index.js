const fs = require('fs');

fs.mkdirSync("Thapa");

fs.writeFileSync('Thapa/bio.txt', "My Name is Mohit");

fs.appendFileSync('Thapa/bio.txt' , " I have 1 year of experience of angular developer ")

// get data without buffer data

const ORG_DATA = fs.readFileSync('Thapa/bio.txt', 'utf-8');
console.log(ORG_DATA);

// delete file 


    fs.unlinkSync('Thapa/bio.txt') 


// delete  dir or folder


    fs.rmdirSync('Thapa') 
