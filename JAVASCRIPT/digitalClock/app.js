
let inner = document.querySelector(".inner")

let displayTime =()=>{
    let now = new Date();
    let time = now.toLocaleTimeString();
    // console.log(time)

    inner.innerHTML = `<h1>${time}</h1>`
}

displayTime()

setInterval(displayTime,1000)