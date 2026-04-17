

let userName = localStorage.getItem("signupName")
console.log(userName)

let h2 = document.getElementById("h2")
h2.innerText = userName


let logout = document.querySelector(".logout")

logout.addEventListener("click",()=>{

    open("./signup.html")
})