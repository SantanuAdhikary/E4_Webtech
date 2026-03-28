

let p1 = new Promise((resolve,reject)=>{
        
     let isResolved = true;

     if(isResolved)
      resolve("resolve 1")
    else
       reject("reject 1")
})

let p2 = new Promise((resolve,reject)=>{
        
     let isResolved = true;

     if(isResolved)
      resolve("resolve 2")
    else
       reject("reject 2")
})
let p3 = new Promise((resolve,reject)=>{
        
     let isResolved = false;

     if(isResolved)
      resolve("resolve 3")
    else
       reject("reject 3")
})
let p4 = new Promise((resolve,reject)=>{
        
     let isResolved = false;

     if(isResolved)
      resolve("resolve 4")
    else
       reject("reject 4")
})


let p5 = new Promise((res,rej)=>{

})

// !  Promise.any()

// this method will provide first resolved promise.

Promise.any([p1,p2,p3,p4])
.then((data)=>{
    console.log(data)
})
.catch((err)=>{
    console.log(err)
})


// ! Promise.all()

// if all the promise having resolve it will return all resolved data.

// if any reject is there then it will give first reject data.

Promise.all([p1,p2,p3,p4])
.then((data)=>{
    console.log(data)
})
.catch((err)=>{
    console.log(err)
})

// ! Promise.allSettled()

// it checks all the promises and it gives array of objects.

// if promise is resolved it will give status and value.

// if promise is rejected it will give status and reason.

Promise.allSettled([p1,p2,p3,p4])
.then((data)=>{
    console.log(data)
})
.catch((err)=>{
    console.log(err)
})


// ! Promise.race()

// this method will give the output for which promise is executing first.

// it will give both for resolve and reject.

Promise.race([p4,p2,p3,p1])
.then((data)=>{
    console.log(data)
})
.catch((err)=>{
    console.log(err)
})