
// ! Lexical Scopping 


// when we have nested function, inner function can access all the properties of outer function but outer function can not access the property of inner function, this is called Lexical Scopping.

let parent = ()=>{

    let bike = "hero";
    let money = 10000;

    let child =()=>{

        let mobile = "iphone";
        console.log("parent bike name is : ",bike);
        console.log("parent having ",money);
        console.log("my phone name is : "+mobile);
    }
    // console.log("my child phone name is : ",mobile);
    child();
}
parent();


let countDigits =(n)=>{

    let count = 0 ; 

    while(n > 0)
    {
        n = Math.floor(n/10);
        count++;
    }
    return count;
}

let power =(b,p)=>{

    let mul = 1 ; 
    
    for(let i=1 ; i<=p ; i++)
    {
        mul = mul * b
    }
    return mul;
}

let armStrong =(n)=>{

    let count = countDigits(n);
    let sum = 0 ;
    let temp = n ;
    while(n>0)
    {
        let ld = n % 10 ;
        sum = sum + power(ld, count) ; 
        n = Math.floor( n / 10) ;
    }

    console.log("sum is ",sum)
    console.log("total digits is : ",count)
    console.log("number is : ",n)
    console.log("temp is : ",temp)

    if(temp == sum)
        console.log("it is armstrong number")
    else
        console.log("it is not armstrong number")
}

armStrong(1634)
console.log("------------------------")
armStrong(153)
console.log("------------------------")
armStrong(145)