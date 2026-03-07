
console.log("conditional statements in javascript")

// !  if statement

// it checks the condition, if the condition is true then only it will execute.
// if the condition is flase it will not execute.

//?   syntax 

// if(condition)
// {
//       code
// }

let age = 38 ; 

if(age>=18)
{
    console.log("you are eligble for vote");
}

// ! if-else statement 

//  in this statement if the condition is true it will execute if block, otherwise it will execue else block.

let marks = 30 ; 

if(marks>=35)
    console.log("you are pass")
else
    console.log("you are fail")


// ! else if ladder 

// when we need to check more than one condion , then we can go for else if ladder. 

let score = 70 ; 

if(score>=80)
    console.log("your grade is A")
else if(score>=60)
    console.log("your grade is B")
else if(score>=45)
    console.log("your grade is c")
else if(score>=35)
    console.log("your grade is D")
else
    console.log("you are fail")



// ! nested if else 

let num = 40 ; 
if(num >=0 )
{
    if(num % 2 == 0)
       console.log("posivive even")
    else
        console.log("positive odd")
}
else
{
    if(num % 2 == 0)
       console.log("negative even")
    else
        console.log("negative odd")
}


// ! how to take the data from the user and how to print

// let sname = prompt("enter your name");
// let phNo = prompt("enter your phone number")

// alert(sname);
// alert(phNo);

// ! take two numbers from the user and add 

// let n1 = parseInt( prompt("enter first number"))
// let n2 = parseInt(prompt("enter second number"))
// alert(n1 + n2)