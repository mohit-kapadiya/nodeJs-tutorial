
const EventEmitter = require('events');
const event = new EventEmitter();


event.on("sayName",()=>{
    console.log("My name is Mohit")
})

event.on("sayName",()=>{
    console.log("My name is Rahul")
})

event.on("sayName",()=>{
    console.log("My name is Jayesh")
})

event.on('checkPage',(sc,msg)=>{
    console.log(`status code is ${sc} && the page is ${msg}`)
})


event.emit("sayName")

event.emit('checkPage' , 200 , 'ok')

/* 

emitter objects emit named events that cause previously registred listeners to be called :
so , an emitter object basically has two main feature :
1) Emitting name events ,
2) Registering and unregistering listener function

*/