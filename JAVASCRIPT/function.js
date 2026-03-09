
// !  how to create function / method 


// it is a block of code, perform some specific task.
// any function when we want to execute we have to call it.  

// ! 1. named function 

   // function that having some name, is called named function.

function wish()
{
    console.log("good evening everyone..");
}

wish();


// ! function with parameters 

 function add(a , b)
 {
    console.log("addition is : ",(a+b));
 }

 add(40,70);


//  ! function with return value 

function subtraction(a,b)
{
    return a - b ;

}

let ans = subtraction(20,5)
console.log(ans)

console.log(subtraction(200,100))


// !  return power of any number 

function power(b,p)
{
    let mul = 1 ; 
    for(let i=1 ; i<=p ; i++)
    {
        mul = mul * b ;
    }
    return mul;
}

console.log(power(2,5));
console.log(power(5,3));
console.log(power(4,2));