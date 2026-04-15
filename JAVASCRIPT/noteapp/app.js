

let addBtn = document.getElementById("addBtn")
// console.log(addBtn)

let ul = document.querySelector("ul")
console.log(ul)

addBtn.addEventListener("click",()=>{

    let input = document.querySelector("input").value
    // console.log(input)

    if(input!="")
    {
        let li = document.createElement("li")
        li.innerText = input;
    
        ul.append(li);
        console.log("added")
        document.querySelector("input").value = ""

    }
})