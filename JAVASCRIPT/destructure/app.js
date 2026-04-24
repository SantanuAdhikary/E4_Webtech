

// ! rest parameter 


// The rest parameter syntax (...) allows a function to accept an indefinite number of arguments as a single array. It was introduced in ES6 to provide a cleaner, more flexible way to handle multiple arguments compared to the legacy arguments object. 

//! Characteristics

// Syntax: It is denoted by three dots (...) followed by a chosen parameter name (e.g., ...args).
// True Array: Unlike the Arguments Object, the rest parameter is a real JavaScript Array instance. This means you can use methods like .map(), .filter(), and .reduce() directly on it.
// Position: It must always be the last parameter in a function definition.
// Single Use: A function can only have one rest parameter.

let m1 =(a,b,...c)=>{
 
    console.log(a)
    console.log(b)
    console.log(c)
}

m1(10,20,30,50,60);

// ! spread operator 


let a = [3,8,9,10]
let b = [5,6,1,8]

let c = [...a,...b]
console.log(c)


let ob1 = {
     name : "virat",
     age: 10
}

let ob2 ={
    city : "bangalore",
    pin:567890
}

let player = {...ob1,...ob2}
console.log(player)


// ! shallow copy

let arr = [10,20,30,40]
let copy = arr;

console.log("arr is ",arr)
console.log("copy is ",copy)

copy.push(100);

console.log("arr is ",arr)
console.log("copy is ",copy)


// ! deep copy 

let names = ["rahul","rohit","virat"]

let players = [...names] ;


players.push("iyer")
console.log("players ",players)
console.log("names ",names)



// ! object destructure 

let student = {
    sname : 'vk',
    age:18,
    city:"chennai",
    pin:123456,
    skills : ['java','python','webtech'],
    eat : function()
    {
        console.log("like vature")
    }
}

let {pin,sname,age,city,skills,eat}  = {...student};

console.log("pin is : ",pin)
console.log("sname is : ",sname)
console.log("age is : ",age)
console.log("city is : ",city)
console.log("skills are : ",skills)
eat();