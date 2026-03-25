


// JSON (JavaScript Object Notation) is a lightweight data-interchange format 
// that is easy for humans to read and write, and easy for machines to parse and generate.  
 
//!  Advantages of JSON: - 

//? Human-Readable:

//  JSON's structure is easy for developers to understand and  write. 

//? - Lightweight: 

// JSON is a minimal format that reduces the size of the data being transmitted. 

//? - Language-Independent:

//  JSON can be used with many programming languages, 
// including JavaScript, Python, Ruby, Java, etc. 

let pen = {
    price : 20 ,
    color : "red",
    brand : "camlin"
}

console.log(pen)
console.log(typeof pen)

// ! JSON.stringify()

// this method is used to convert any javascript object into json string

let jsondata = JSON.stringify(pen);

console.log(jsondata)
console.log(typeof jsondata)


// ! JSON.parse()

// this method is used to convert any json data into javascript object.

let newPen = JSON.parse(jsondata)

console.log(newPen)
console.log(typeof newPen)