
console.log("dom")


// ! targetting element by id

//? syntax:    document.getElementById("id");

let logo = document.getElementById("logo")

// how to apply inline css from js 

logo.style.color = "red"
logo.style.textTransform = "uppercase"

console.log(logo)


// ! targetting by tagname

  let lists =  document.getElementsByTagName("li");

  console.log(lists)

  
  console.log(lists[1])
  console.log(lists[0])
  console.log(lists[2])

  lists[1].style.textTransform = "uppercase"
  lists[2].style.textTransform = "uppercase"
  lists[0].style.textTransform = "uppercase"


//   I want to target nav tag and apply css

let nav = document.getElementsByTagName("nav")

console.log(nav)


//! nav.style => we can't write (bcz this nav is array)

nav[0].style.display = "flex"
nav[0].style.justifyContent = "space-between "
nav[0].style.alignItems = "center "
nav[0].style.height = "100px "



let main = document.getElementsByTagName("main")
console.log(main)


main[0].style.backgroundColor = "lightpink"
main[0].style.height = "250px"

// ! targetting elements by class name 

let cards = document.getElementsByClassName("card")
console.log(cards)

console.log(cards[0])
console.log(cards[1])
console.log(cards[2])

// ! how to know what are the class added for any element

console.log(cards[0].classList);

// ! how to add class 


cards[0].classList.add("profileCard")
cards[1].classList.add("profileCard")
cards[2].classList.add("profileCard")

//! how to remove class

cards[1].classList.remove("profileCard")