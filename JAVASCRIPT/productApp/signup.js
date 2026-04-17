

let form = document.querySelector("form")

form.addEventListener("submit",(e)=>{

    e.preventDefault();

    let inp1 = document.getElementById("inp1").value 
    let inp2 = document.getElementById("inp2").value 
    let inp3 = document.getElementById("inp3").value 


    //! adding data into localstorage 

    localStorage.setItem("signupName",inp1)
    localStorage.setItem("signupEmail",inp2)
    localStorage.setItem("signupPass",inp3)

    //console.log({inp1,inp2,inp3})

    alert("register done")

    open("./login.html")
})


