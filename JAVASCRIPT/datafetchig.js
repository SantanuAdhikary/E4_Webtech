
let getData =async ()=>{

    try{
        let res = await fetch("https://api.github.com/users");
    console.log(res);

    let data= await res.json();
    console.log(data)
      
       data.map((ele)=>{
        console.log(`user name is : ${ele.login}`)
        console.log(`user id is : ${ele.id}`)
        console.log("--------------------------------------------------")
       })
    }
    catch(err)
    {
        console.log(err)
    }
}

getData();