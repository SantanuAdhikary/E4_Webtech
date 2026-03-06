

// ! variable hoisting

// when we are accessing any variable before its declaraion, but if the declaration is done by var keyword, then the declaration part will be moving to the top.
// it is called variable hoisting.

console.log(a)
var a =90;

// console.log(b)
let b = 30;


//! difference of let and  var keyword 

// ! let 
// let keyword having local scope. 
// re-declaration is not possible.
// variable hoising is not posssible 


// ! var 
// var keyword having global scope. 
// re-declaration is  possible.
// variable hoising is posssible.


// ! where we can execute our js code

// 1.  we can execute our js code inside browser with the help of html file. (internal js , external js)

// 2. we can execute our js code outside of the browser by using nodejs

// ! what is nodejs 

// nodejs is runtime environment that helps to execute js file outside of the browser. 

// it is opersource and cross-platform.