
let inc = document.querySelector(".inc")
let dec = document.querySelector(".dec")
let reset = document.querySelector(".reset")
let num = document.getElementById("num")

// console.log(inc)

let count = 0 ;


inc.addEventListener("click",()=>{
    count = count + 1;
    console.log(count)
    num.innerText = count
})


dec.addEventListener("click",()=>{
    
    if(count>0)
        count = count - 1 ;
    num.innerText = count

})


reset.addEventListener("click",()=>{

    count = 0 ;
    num.innerText = count;
})