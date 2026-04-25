
console.log(this)


function f1()
{
    console.log("i am f1 function")
    console.log(this)
}
f1();


let f2 =()=>{
    console.log("i am arrow function f2")
    console.log(this)
}

f2();




let student ={
    sname : "rahul",
    phNo:12345678,
    skills : ['java','sql','web']
}

function studentDetails(id,age)
{
     console.log(this.sname);
     console.log("student id is ",id)
     console.log("student age is ",age)
}

// !  call() 
studentDetails.call(student,101,13)

// ! apply()

studentDetails.apply(student,[231,15])

// ! bind()

let res = studentDetails.bind(student,345,12)
res()



//! in arrow function this keyword everytime call window object.

let emp ={
    ename : "miller",
    sal : 7000,
    eid:123
}

let empDetails=()=>{

    console.log(this.ename) // undefined
}

empDetails.call(emp);





// ! class 

class Employee
{
    ename;
    eid;
    sal;
    constructor(ename,eid,sal)
    {
         this.ename = ename;
         this.sal = sal;
         this.eid = eid;
    }
}

let e1 = new Employee("scott",100,30000);
let e2 = new Employee("blake",200,20000);

console.log(e1)
console.log(e2)


// ! Inheritance 

class Parent
{

     age;
     bike;
    constructor(age,bike)
    {
        this.age = age ;
        this.bike = bike;
    }

    money()
   {
        console.log("hi")
   }
}

class Child extends Parent{

    constructor(age,bike)
    {
        super(age,bike)
    }
}

let c1 = new Child(50,"RE");

console.log(c1.bike)


