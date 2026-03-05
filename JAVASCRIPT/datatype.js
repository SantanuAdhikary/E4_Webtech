
// ! primitive datatypes 


                      //! 1. number datatype 

let age = 21;

console.log(age)

// ! how to know the datatype 
  // typeof operator 

console.log(typeof age)

let height = 5.7 ;

console.log("height is : ",height);
console.log("datatype is : "+typeof height)


// ! 2. string datatype 

let str1 = 'hello everyone'
let str2 = "good evening everyone"
let str3 = `how are you ?`

console.log(typeof str1)
console.log(typeof str2)
console.log(typeof str3)


// !  3. boolean 

var isStudent = true;
let isPlayer = false;

console.log(isPlayer)
console.log(isStudent)
console.log(typeof isPlayer)
console.log(typeof isStudent)


// ! 4. undefined 

// any variable that declared but not initialized , is called as undefined. 

// typeof undefined is => undefined.

let salary;

console.log(salary)
console.log(typeof salary)

// ! 5. null 

// when we don't know the value that time we can assign the value with null. 

// typeof null is object.

let phNo = null

console.log(phNo)
console.log(typeof phNo)  // object

// ! 6. bigint

let amount = 2n;

console.log(amount);
console.log(typeof amount);

// !  non primitive datatypes 

// ! 1. array 

let arr = [10,20,30,"hello",true,null,undefined,2n] ;

console.log(arr);


// ! 2. function / method 

function wish()
{
    console.log("happy new year");
}

wish();

// ! object


let student = {

    sname : "rahul",
    age : 20,
    isMarried: false
}

console.log(student)

console.log("student name is : ",student.sname)