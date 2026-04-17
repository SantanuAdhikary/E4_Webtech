

let form = document.querySelector("form")

form.addEventListener("submit",(e)=>{
    e.preventDefault();

    let loginEmail = document.getElementById("loginEmail").value 
    let loginPass = document.getElementById("loginPass").value 
    console.log({loginEmail,loginPass})

    //  get the data from localstorage

    let signupEmail = localStorage.getItem("signupEmail")
    let signupPass = localStorage.getItem("signupPass")
    console.log({signupEmail,signupPass})

    if(signupEmail==loginEmail && signupPass == loginPass)
    {
        alert("login done successfully")
        open("./home.html")
    }
    else{
        alert("wrong credentials")
    }

    document.getElementById("loginEmail").value = ""
    document.getElementById("loginPass").value = ""


})