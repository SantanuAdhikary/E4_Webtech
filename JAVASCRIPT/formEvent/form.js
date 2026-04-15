

let form = document.querySelector('form')
// console.log(form)


form.addEventListener("submit",(e)=>{

    //! stop refresh of form
     e.preventDefault();

     //! target the input tags and get the value present inside input
     let userName = document.getElementById("userName").value 
     let userPass = document.getElementById("userPass").value 
     console.log({userName,userPass})

    console.log(" form sumitted")

    //! make the input value again empty 
    document.querySelector("#userName").value = ""
    document.querySelector("#userPass").value = ""

})



let form2 = document.getElementById("form2")
// console.log(form2)

form2.addEventListener("submit",(e)=>{

    e.preventDefault();

    let  num1 = parseInt( document.querySelector("#num1").value )
    let  num2 = parseInt( document.querySelector("#num2").value)


    let sum = num1 + num2 

    let output = document.querySelector(".output")

    output.innerHTML = `<h1> the addition of ${num1} and ${num2} is ${sum} </h1>`

    document.querySelector("#num1").value = ""
    document.querySelector("#num2").value = ""

    console.log("submitted")
})