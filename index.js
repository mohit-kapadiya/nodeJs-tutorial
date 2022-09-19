const fs = require("fs");

// creating a new file

 
    fs.writeFileSync("readWrite.txt" ,"Welcome to Node Js");
    fs.writeFileSync("readWrite.txt" ," Hiee Mohit ,Welcome to Node Js");
 


// append file


    fs.appendFileSync("readWrite.txt" , "Hiee , How r u ? I am fine , Thank you"); 


// read file

const BUF_DATA = fs.readFileSync("readWrite.txt");
console.log(BUF_DATA);

const ORG_DATA = BUF_DATA.toString();
console.log(ORG_DATA);

/*    

        Node js includes an additional data type called Buffer
    (Not available in browser's JavaScript)
    Buffer is mainly used to store binary data,
    while reading from a file or receiving packets over the network. 
   
*/


// rename the file

    fs.renameSync('read.txt', 'readWrite.txt'); 

// delete File

  /*   
        fs.unlinkSync('readWrite.txt')  
  */


// delete dir or folder

/*     
    fs.rmdirSync('mohit')
    
*/

