

let para = document.getElementsByTagName("p")

console.log(para[0])

let p = document.getElementById("para")

console.log(p)

let cards = document.getElementsByClassName("card")

console.log(cards)
console.log(cards[0])

cards[0].style.backgroundColor = "orangered"
cards[1].style.backgroundColor = "skyblue"
console.log(cards[1])


let section = document.getElementsByTagName("section")


section[0].classList.add("box")
console.log(section[0].classList)

section[0].innerText = " i am section"
section[0].innerHTML = "<h2> i am section</h2>"
section[0].classList.remove("box")



let li = document.createElement("li")
li.innerText = " i am list form js"

let ul = document.getElementsByTagName("ul")

ul[0].append(li)