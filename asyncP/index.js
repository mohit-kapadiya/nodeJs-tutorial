const fs = require('fs')

// create new dir or folder

 fs.mkdir('Thapa', (err)=>{
    console.log(err)
});

// create new file

fs.writeFile('Thapa/bio.txt', 'Hii I am Mohit',(err)=>{
    console.log(err);
}) 

// add  a more data into file

fs.appendFile('Thapa/bio.txt' , '. I am software engineer' , (err)=>{
    console.log(err)
} )


// read data without getting buffer

fs.readFile('Thapa/bio.txt' , 'utf-8' , 
(err, data)=>{
    console.log(err);
    console.log(data);
})

// rename async file

fs.rename('bio.txt' , 'readWrite.txt' , (err)=>{
    console.log(err)
})

// delete async file

fs.unlink('bio.txt' ,(err)=>{
    console.log(err);
} )


// delete folder

fs.rmdir('asyncP' , (err)=>{
    console.log(err);
})

