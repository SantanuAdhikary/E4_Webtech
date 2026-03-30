

let fetchedData = fetch("https://fakestoreapi.com/products")
console.log(fetchedData)  // promise

fetchedData
.then((data)=>{
        console.log(data)   // response
        let jsondata = data.json();

       console.log(jsondata)  // promise 

       jsondata
       .then((data)=>{
        console.log(data)
       })
       .catch((err)=>{
        console.log(err)
       })
})
.catch((err)=>{

    console.log("data not found")
})


// !  print all the items separately by traversing
 
let fetchedData2 = fetch("https://fakestoreapi.com/products")

console.log(fetchedData2);


fetchedData2
.then((data)=>{
    console.log(data)

    let jsondata = data.json();
    console.log(jsondata)

    jsondata
    .then((data)=>{
        console.log(data)  //! original data (in the form of array )

        data.map((ele)=>{
            console.log(`id is => ${ele.id}`)
            console.log(`title is => ${ele.title}`)
            console.log(`price is =>${ele.price} Rs`)
            console.log(`ratings is => ${ele.rating.rate}`)
            console.log(`count is => ${ele.rating.count}`)
            console.log(`description is => ${ele.description}`)
            console.log(`category is => ${ele.category}`)
            console.log('-----------------------------------')
        })

    })
    .catch((err)=>{
        console.log(err)
    })
})
.catch((err)=>{
    console.log(err)
})