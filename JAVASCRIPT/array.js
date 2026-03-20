

// !  Array 

// array is a linear datastructure where we can store multiple data in continious manner.

// in javascript array can store both homogeneous and heterogeneous data.

// ! how to create array 

let arr = [10,20,30,40,50]; 

// ! how to print the array 

console.log(arr)

let heteroArr = [10,"hi",true,undefined,null,2n,[90]] ;

console.log(heteroArr)

// !  how to know the length of the array 

 //  arrayname.length is used to know the length of the array

 console.log("length is ",heteroArr.length)

//  !   Array Methods 


// !  1. push()

// this method is used to add element at the end.
// it will return the modified length of the array.

let players = ["rohit","virat","rahul","bumrah"];
console.log("original array : ",players)

players.push("siraj");
console.log("after push operation : ",players)

// ! 2. pop()

// it is used to remove the element from the end.
// it will return the removed element.

let subjects = ["sql","java","web","mt"];

subjects.pop();
console.log(subjects)


// !  3. unshift()

// this method is used to add element at the starting.

let teams = ["csk","rcb","kkr","mi"];

teams.unshift("pk")
console.log(teams)

// ! 4. shift()

// this is used to remove the element from the starting.

let actors = ["vijay","rajnikanth","kamal hasan","suriya"];
actors.shift()

console.log(actors)

// ! 5. indexOf()

// it is used to know the index of given element.
// if the element is not present it will give -1.

let webseries = ["breaking bad","got","money heist","friends","loki","got"];

console.log(webseries.indexOf("got"))

// ! 6. lastIndexOf()

// it is used to know the last occurance index of given element.
// if the element is not present it will give -1.

console.log(webseries.lastIndexOf("got"))

// ! 7. includes()

// it is used to check element is present or not and it will return boolean value.

console.log(webseries.includes("got"))
console.log(webseries.includes("game of thrones"))



// !  8. splice()

 // this method is used to delete , replace or add any element in the array.
 // it can take 3 parameters(startIndex, delete count, replacement value)
 // this method will modify the original array.

 // note : slice method will not modify the original array.

//todo: we are deleting the elements 
let a = [10,20,30,40,50,60,70];
a.splice(1,3)
console.log(a)

//todo: after deleting replacing the element
let b = [10,20,30,40,50,60,70];
b.splice(2,4,"hello");
console.log(b)

// todo : add the element in any position(without any deletion)
let c = [10,20,30,40,50];
c.splice(3,0,900)
console.log(c)


// ! 9. concat()

// this method is used to combine two or more than two arrays and it will return one new array.

let locations = ["mumbai","chennai","bangalore"]
let states = ["maharastra","tamilnadu","karnataka"];
let food =["vadapav","dosa","idli"];

let merge = locations.concat(states,food)
console.log(merge)

console.log(locations)
console.log(states)


// ! 10. reverse()

// this method is used to reverse the original array.

locations.reverse()
console.log(locations)

// ! 11. join()

// this method is used to convert array into string.

let msg = ["good","evening","everyone"];

console.log(msg.join(" "))

// ! reverse string by using methods 

let str = "hello"
console.log(str)

let charArr = str.split("");
console.log(charArr)

let revArr = charArr.reverse();
console.log(revArr)

let revStr = revArr.join("")
console.log(revStr)

console.log(str.split("").reverse().join(""))