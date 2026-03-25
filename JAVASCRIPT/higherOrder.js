
console.log("higher order and callback function")


let sleep =()=>{
    console.log("i am sleeping")
}

let emp =(ename,eid,work)=>{

    console.log("i am emp function")
    console.log("emp name is ",ename)
    console.log("emp id is  ",eid)
    work();
}

emp("miller",101,sleep);

// any funtion that takes another function as parameter is called higher order function.

// the function is sent as a parameter to the higher order function is called as callback function.

let homework =()=>{
    console.log("i am doing home work")
}

let student =(work)=>{

    console.log("i am student")
    work();
}
student(homework);

student(()=>{
    console.log("i am now playing")
})

student(function(){
    console.log("i am wathing ipl")
});

// ! IIFE (Immediate Invoke Function Expression)

(function()
{
    console.log("i am iife function")
})();


(function(a,b)
{
    console.log("i am another iife function")
    console.log(a+b)
})(10,20);



// !  calculator by using higher order function 

console.log("calculator")

let add =(a,b)=>{
  console.log("addition is : ",(a+b))
}

let sub =(a,b)=>{
    console.log("subtraction is : ",(a-b))
}

let mul =(a,b)=>{
    console.log("multiplication is : ",(a*b))
}

let div=(a,b)=>{
    console.log("division is : ",(a/b))
}


let calculator =(a,b,operate)=>{

    operate(a,b)  
}

let option = 3 ; 

switch(option)
{
    case 1 : calculator(400,100,add)
            break;
    case 2 : calculator(300,200,sub)
            break;
    case 3 : calculator(200,100,mul)
            break;
    case 4 : calculator(200,50,div)
            break;
}


