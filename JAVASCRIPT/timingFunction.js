console.log("timing function in js ")

console.log("start")


let wish =()=>{
    console.log("happy birthday 🎁🎁🎂🎂")
}


// !  setTimeout()

//  this is one higher order method used to delay the execution of any function. 

// it takes two parameters (callback function , time). 

// it executes the callback function after the given time.

// if we are not giving any time, then this cb function will execute at the end.


// setTimeout(wish,6000)


// setTimeout(()=>{
//     console.log("i am settimeout function")
// },4000)



console.log("middle")
console.log("end")


// ! setInterval()

let greeting = ()=>{
    console.log("good evening")
}

// setInterval(greeting,1000);

// setInterval(()=>{
//           console.log("I am setInterval")
// },1000)



// !  clearInterval()

// this method is used to stop the interval.

let interval = setInterval(()=>{
    console.log("Hi")
},1000)


setTimeout(()=>{
    clearInterval(interval);
},6000)


// ! clearTimeout()

// this is used to stop the timeout.

let time = setTimeout(() => {
    console.log("hi")
}, 2000);

clearTimeout(time);