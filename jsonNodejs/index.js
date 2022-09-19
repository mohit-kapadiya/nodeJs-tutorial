const fs = require("fs")

const student ={
    first :'Mohit',
    lastName :'Kapadiya',
    contact_no : '8511877454',
    city :'jetpur'
}

// convert obj to json

const jsonData = JSON.stringify(student);
console.log(jsonData);

// convert json to obj

const objData = JSON.parse(jsonData);
console.log(objData);


// write json file

fs.writeFile('json1.json', jsonData , (err)=>{
    console.log(err)
}); 

// read json file

fs.readFile('json1.json' , 'utf-8', (err, data)=>{
    console.log(err);
    console.log("json Data" , data)
    const objectData = JSON.parse(data);
    console.log(objectData);
})