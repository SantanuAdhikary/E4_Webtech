
console.log("looping statement in js")

// ! what is loop

// if we want to perform some task again and again or repeatedly, we can use looping statement. 

// in javascript we have for,while,do while loop.

//! for loop

//todo:  add numbers from 1 to 10

let n = 10 ;
let sum = 0 ;
for(let i=1 ; i<=n ;i++)
{
   sum += i;
}

console.log("sum is ",sum);


// ! while loop 

// this loop is called as entry-controlled loop.
// first it will check the condition , if the condition is ture then only it will enter inside the loop.

// todo: print all the even numbers b/w 50 to 60 

let num = 50;

while(num <=60 )
{
    if(num % 2 == 0)
        console.log(num);

    num++;
}

// ! 3. do while loop

// it is called exit-controlled loop. 

// if the condition is false then also atleast one time this loop will execute.

// todo :  multiply 1 to 5 ; 

let i = 10 ; 
let mul = 1 ; 
do{
    mul = mul * i;
    i++;
}while(i<=5);

console.log("multiplication is : "+mul)



// ! break 

// it is used to stop the execution of the loop.
// we can use break keyword in looping statement and in swith statement

for(let i=1  ;i<=10 ; i++)
{
    if(i==6)
        break;
    console.log(i);
}

// ! continue 

// it is used to skip the current iteration, and go for the next one. 

console.log("continue example")

for(let i=10; i<=20 ; i++)
{
    if(i==15 || i==17)
        continue;

    console.log(i);
}