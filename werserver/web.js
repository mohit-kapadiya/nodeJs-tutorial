
/* 
    web server will handle all the http request for the web application 
*/


const http = require('http');
const fs = require('fs');

const server = http.createServer((req ,res)=>{

    // create api 

    const apiData = fs.readFileSync(`${__dirname}/UserAPI/user.json`, 'utf-8');
    console.log(`${__dirname}`)
    console.log(apiData);
   
    if(req.url === "/"){
        res.end("Welcome to the web")
    }else if(req.url === "/about"){
        res.end("Welcome to about page")
    }else if(req.url === '/home'){
        res.end("Welcome to home page")
    }else{
        res.writeHead(404 , {"Content-type" :"text/html"});
        res.end("404 error pages. Page doesn't exist")
    }

})

server.listen(8000,'127.0.0.1', ()=>{
    console.log('listening to the port number 8000')
})