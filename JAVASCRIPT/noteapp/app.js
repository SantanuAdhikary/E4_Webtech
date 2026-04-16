

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
        
                let button = document.createElement("button")
                button.classList.add("deleteBtn")
                button.innerText = "delete"
                li.append(button)

                button.addEventListener("click",()=>{
                    li.remove();
                })
        
        ul.append(li);
        console.log("added")
        document.querySelector("input").value = ""  



    }
})