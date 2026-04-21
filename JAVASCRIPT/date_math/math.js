

// ! Math Object

console.log(Math.random())

console.log(Math.ceil(4.8))         //! 5
console.log(Math.ceil(4.000001))   //!5  


console.log(Math.floor(8.2))        //! 8
console.log(Math.floor(8.99999))   //! 8


console.log(Math.round(3.6))    //! 4
console.log(Math.round(3.3))   //! 3
console.log(Math.round(3.5))  //! 4

console.log(Math.sqrt(81))   //! 9

console.log(Math.max(10,30,1,21,5))   //! 30
console.log(Math.min(10,30,20,5))    //! 10

console.log(Math.abs(-89))     //! 89

console.log(Math.PI)   //! 3.141592653589793

console.log(Math.pow(2,5))  //! 32



// !  Date Object 


let date = new Date()

console.log(date)

console.log("hour is : ",date.getHours())
console.log("minute is : ",date.getMinutes())
console.log("second is : ",date.getSeconds())
console.log("milisecond is : ",date.getMilliseconds())


console.log("year is : ",date.getFullYear())
console.log("date is :",date.getDate())
console.log("month number is :",date.getMonth())
console.log("day number is :",date.getDay())


const months = [
  "January", "February", "March", "April",
  "May", "June", "July", "August",
  "September", "October", "November", "December"
];

console.log("month is : ",months[date.getMonth()])   //! month is :  April

const days = [
  "Sunday", "Monday", "Tuesday",
  "Wednesday", "Thursday", "Friday", "Saturday"
];

console.log("day is : ",days[date.getDay()])   //! day is :  Tuesday



console.log(date.toLocaleTimeString())      //!  6:51:52 PM
console.log(date.toLocaleDateString())      //! 4/21/2026



