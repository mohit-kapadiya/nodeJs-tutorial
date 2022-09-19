const add = (a,b)=>{
    return a+b
}

const sub = (a,b)=>{
    return a-b
}

const mul = (a,b)=>{
    return a*b
}

const div = (a,b)=>{
    return a/b
}



// we can change the name of var where define of after .exports 

/* 
module.exports.add1 = add;
module.exports.sub1 = sub */

/* 
module.exports.add = add;
module.exports.sub = sub; */

// suitable work
module.exports = {add , sub , mul , div}