
// ! promise 

// promise is one javascript object , it is used to handle the asynchronized operation.

// for creating promise we need new keyword.

// it will take one callback function, in that there will be two parameters. (resolve, reject)

// promise having 3 states (pending , fullfilled, rejected)

// if we want to handle resolve we need .then() block and if we want to handle reject we need .catch() block.

// both then and catch block we have to take one callback function.

// finally() block will execute everytime and it will execute before then and catch .


console.log("promise in javascript");

let p = new Promise((resolve, reject)=>{

    let isMorning = true;

    if(isMorning)
        resolve("hi good morning")
    else
       reject("bye, good night");
     
})

console.log(p)

p.then((data)=>{
   console.log(data)
})
.catch((err)=>{
     console.log(err)
})
.finally(
    console.log("tata....")
)




