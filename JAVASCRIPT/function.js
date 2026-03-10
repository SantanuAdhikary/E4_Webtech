
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



// ! anonymous function 

// any function that does not have any name.

// function()
// {

// }


// ! function with expression

let greet = function(a)
{
    console.log("welcome to javascript session")
    console.log(a)
}
greet(10);

//  !  write a program to check prime number by using method.


let isPrime = function(n)
{
    let count = 0 ;
    for(let i=1  ; i<=n ; i++)
    {
        if(n % i == 0)
            count++;
    }
    return count == 2;
}

console.log(isPrime(7))
console.log(isPrime(8))


let isPrime2 = function(n)
{
    for(let i=2 ; i<= Math.floor( n/2) ; i++)
    {
        if(n % i == 0)
            return false;
    }

    return true;
}

console.log(isPrime2(7))



// !  Arrow Function

let display = ()=>{
    console.log("i am display function")
}

display()


// ! reverse of a number 


let reverse = (n)=>{
    let rev = 0 ;
    while(n>0)
    {
        let ld = n % 10 ; 
        rev = rev * 10 + ld ;
        n = Math.floor(n / 10) ;
    }
    console.log("reverse is : ",rev);
}
reverse(1234)

// ! arrow function without return keyword

let multiplicatoin = (a , b)=> a * b 

console.log(multiplicatoin(5,20))



// !  nested function 

// when we are creating one function inside another function. 

let outer = ()=>{

    console.log("i am outer function")

   let inner =()=>{
        console.log("i am inner function")
    }
    inner();
}

outer();