
console.log("calculator by using switch");

let option = parseInt(prompt("enter the option"));
let num1 ;
let num2 ; 

switch (option) {
    case 1: console.log("welcome to addition");
             num1 = parseInt(prompt("enter the first number")) ; 
             num2 = parseInt(prompt("enter the second number")) ; 
             let sum = num1 + num2
             alert(sum)
             break;
    case 2: console.log("welcome to subtraction");
             num1 = parseInt(prompt("enter the first number")) ; 
             num2 = parseInt(prompt("enter the second number")) ; 
             let sub = num1 - num2
             alert(sub)
             break;
    case 3: console.log("welcome to multiplication");
             num1 = parseInt(prompt("enter the first number")) ; 
             num2 = parseInt(prompt("enter the second number")) ; 
             let mul = num1 * num2
             alert(mul)  
             break;
    case 4: console.log("welcome to division");
             num1 = parseInt(prompt("enter the first number")) ; 
             num2 = parseInt(prompt("enter the second number")) ; 
             let div = num1 / num2
             alert(div)  
             break;

    default: console.log("wrong option")
      
}