
/* 
    Streams are objects that let you read data from a source and write data to a destination 
    in continuous fashion. 

    four types of streams

    Readable : Stream which is used for read operation.
    Writable : Stream which is used for write operation.
    Duplex :  Stream which is used for read and  write operation.
    Transform : A type of duplex stream where the output is computed based on input

    Each type of stream is an EventEmitter instance and throws servel events at different 
    instance of time.

    events:
    1) data -> that event is fire when data is availible to read
    2) end -> that event is fire no more data to read
    3) error -> that event is fire where receiving any error
    4) finish -> that event is fire where all data has been flushed to underlying system
*/

const fs = require('fs');
const http = require('http');

const server = http.createServer();

server.on('request',(req,res)=>{
    
   /*  fs.readFile('input.txt',(err,data)=>{
        res.end(data.toString())
    }) */

    // stream approach

   
   
        const rStream = fs.createReadStream("input.txt");
        rStream.on("data" , (data)=>{
            res.write(data);
        });

        rStream.on('end',()=>{
            res.end();
        })

        rStream.on('error', ()=>{
            res.end("file not found")
        })
        
   

    // readStream.pipe();
    // on the spot read and write 
    const readStream = fs.createReadStream('input.txt');
    readStream.pipe(res);
});

server.listen(8000 , '127.0.0.1')

 