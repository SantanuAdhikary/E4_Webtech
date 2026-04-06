

let getData = async ()=>{

    try{
        
        let res = await fetch("https://fakestoreapi.com/products");
        let data=     await res.json();
        // console.log(data)

        let ol = document.querySelector("ol")
        data.map((ele)=>{    
            // ! create list 
            let li = document.createElement("li")

            //! write content inside list 
            li.innerText= ele.title;

            // ! append the list inside ol 
            ol.append(li);
        })
    }
    catch(err)
    {
        console.log("data not found")
    }
  
}

getData();

