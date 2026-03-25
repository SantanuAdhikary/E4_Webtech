
// ! how to traverse array of object 


let players = [
    {
        name : 'rohit',
        age:35,
        city : "mumbai"
    },
    {
        name : 'virat',
        age:34,
        city : "delhi"
    },
    {
        name : 'iyer',
        age:30,
        city : "kolkata"
    },
    {
        name : 'bumrah',
        age:32,
        city : "gujrat"
    }
]

console.log(players)

players.map((ele)=>{

    console.log("player name is : ",ele.name.toUpperCase())
    console.log("player age is : ",ele.age)
    console.log("player city is : ",ele.city.toUpperCase())
    console.log("--------------------------------")
})