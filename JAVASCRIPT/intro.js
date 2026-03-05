console.log("i am external javascript");


// ! how to create variables 

// var , let , const 

var ename ;  // variable declaration

ename = "miller"; // variable initialization 

console.log("employee name is ",ename);

let companyName ;   // variable declaration 

companyName = "TCS" ; // variable initialization 

console.log("company name is : "+companyName);

var eid = 1200;   // variable declaration and initialization

let salary = 20000.50 ; // variable declaration and initialization

console.log("employee id is ",eid);
console.log("employee salary is ",salary);

salary = 30000;   // re-initialization
console.log("employee updated salary is ",salary);

var phoneNumber = 1234567890;

console.log("phone number is : ",phoneNumber);

phoneNumber = 9087654321;
console.log("updated phone number is : ",phoneNumber);


var deptNo = 5;

console.log("deptno is : ",deptNo);

var deptNo = 8;
console.log("deptno is : ",deptNo);


const AADHAR_NO = 123456789817;

console.log("aadhar number is : ",AADHAR_NO);

// const AADHAR_NO;    ❌
// AADHAR_NO = 12345098765;  ❌

// const PAN_NO;

var PAN_NO = 891234567;

console.log(PAN_NO)



{
    var a = 10 ; 
    let b = 20 ; 
    const c = 30;

    console.log("a is : "+a)
    console.log("b is : "+b)
    console.log("c is : "+c)
}
console.log('outside of block')
console.log("a is : "+a) // 10
console.log("b is : "+b)
console.log("c is : "+c)


