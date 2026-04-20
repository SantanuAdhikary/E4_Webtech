

let input = document.querySelector("input")

let appendData = (data)=>{

    if(input.value!="0")
     input.value += data;
    else
        input.value = data
    // console.log(data)
}

let calculate =()=>{

    let input_data = input.value;

    let total = eval(input_data)   //! important : evaluate expression

    // console.log(input_data)
    // console.log(total)

    input.value = total
}


let clearScreen =()=>{
    input.value = ""
}

let back =()=>{

    let input_data = input.value;
    let updatedData = input_data.slice(0,-1)

    // console.log(updatedData)

    input.value = updatedData
}