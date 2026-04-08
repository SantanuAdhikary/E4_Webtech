

console.log("event in javascript")


let wish =()=>{

    console.log("🎂🎂🥳🥳Happy Birthday 🎂🎂🥳🥳")
}


let changeColor =()=>{

    let card = document.querySelector(".card")
    console.log(card)
    card.style.backgroundColor = "pink";
    console.log("color changed")
}
let changeColor2 =()=>{

    let card = document.querySelector(".card")
    card.style.backgroundColor = "white";

}


let printMsg =()=>{

    alert("i am double click event")
}


let copyText =()=>{

    let box1 = document.querySelector(".box1");
    console.log(box1.innerHTML)

    let box2 = document.querySelector(".box2");
    box2.innerHTML = box1.innerHTML;

    box1.innerHTML = ""


}