

let getData = async()=>{
    try{
          let res =await fetch("https://fakestoreapi.com/products");
          let data = await res.json();
        //   console.log(data);

        let outer = document.querySelector(".outer")

        data.map((ele)=>{

            let div = document.createElement("div");
            div.classList.add("card");

            div.innerHTML = ` <img src=${ele.image}><h3>${ele.title}</h3> <h2>price : ${ele.price} Rs</h2> <h2> rating is : ${ele.rating.rate}</h2>`
            outer.append(div);
        })
    }
    catch(err)
    {
        console.log("data not found")
    }
}

getData();