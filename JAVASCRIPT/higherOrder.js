
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