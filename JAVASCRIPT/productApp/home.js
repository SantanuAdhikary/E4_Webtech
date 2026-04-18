

let userName = localStorage.getItem("signupName")
console.log(userName)

let h2 = document.getElementById("h2")
h2.innerText = userName


let logout = document.querySelector(".logout")

logout.addEventListener("click",()=>{

    open("./signup.html")
})


let main = document.querySelector("main")
let getData =async()=>{
    try{
          let res = await fetch("https://fakestoreapi.com/products");
          let data = await res.json();
          data.map((ele)=>{     
                let div = document.createElement("div")

                div.innerHTML = `<img src=${ele.image}> 
                                <h3>${ele.title}</h3>
                                <h3>Price : ${ele.price} $</h3>
                              <h3> Ratings : ${ele.rating.rate}</h3> `

                div.classList.add("card");
                main.append(div)
          })
    }
    catch(err)
    {
        console.log(err)
    }
}

getData();  