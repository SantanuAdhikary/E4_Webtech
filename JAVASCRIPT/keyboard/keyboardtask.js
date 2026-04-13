

console.log("keyboard event ");


let input = document.querySelector("input");
console.log(input);

// ! keypress event 

input.addEventListener("keypress",(e)=>{
    // console.log("key is pressed")
   // console.log(e.target.value)
})


let section = document.querySelector("section")

input.addEventListener("keyup",(e)=>{
    // console.log("key is up")
    // console.log(e.target.value)

    section.innerHTML = `<h2> ${e.target.value}  </h2>`
})


let count =0 ;

let hasNumber = /['0'-'9']/.test("abac0")
let hasUpper = /['A'-'Z']/.test("Abac0")

if(hasNumber)  count++
if(hasUpper) count++

console.log(count)