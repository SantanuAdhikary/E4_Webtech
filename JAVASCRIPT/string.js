

console.log("string in javascript");

// ! what is string 

// string is a collection of characters, in javascript we can create string in 3 ways. 

let stuName = "miller";
let deptName = 'cse';
let collegeName = `mgr college`;

console.log(typeof stuName)              // string
console.log(typeof deptName)            // string
console.log(typeof collegeName)        // string


// !  String Interpolation ***

// printing any variable inside string is called String interpolation. 
// which varialbe we want to access inside the string that should be wrapped by the ${}
// the string should be created by the ` ` 
// here we can execute any expression also.
 
console.log(`student name is : ${stuName}`)

let a = 10 ; 
let b = 20 ; 
console.log(`the addition of ${a} and ${b} is : ${(a+b)} `)


// !  how to knwo the length of the string 

// in javascript we have length property. 

let msg = "i am fine";
console.log(msg.length)
console.log(`the length of the string is : ${msg.length}`)

// !  String methods 

// !  1.  charAt(index)

      // this method is used to know at the given index which character is present. 

      let ename = "scott";
      console.log(ename.charAt(3))

//todo:=> Note:   String having index value like array.
                  //  the index starts from 0. 
                  // if the length of the string is n , then last index will be n-1.


// todo: task =>   reverse string

let sub = "javascript"
let rev = ""

for(let i=sub.length-1 ; i>=0 ; i--)
{
      rev = rev + sub.charAt(i);
}

console.log("subject is : ",sub)
console.log("reverse is : ",rev)


// ! 2. toUpperCase()

// this method is used to convert any string into uppercase and it will return one new string. 

// it does not modify the original string.

let str = "Good Morning"

let upper = str.toUpperCase()
console.log(upper)
console.log(str.toUpperCase())


// ! 3. toLowerCase()

// it is used to convert any string into lowercase and it will return one new string.
// it will not modify the original string.

console.log(str.toLowerCase())
console.log(str)

// ! 4. indexOf()

// it is used to know the index of the given character.

// if any character is present more than one time, it will consider first one. 

// if any character is not present it will return -1.

console.log(str.indexOf('r'))     // 7
console.log(str.indexOf("i"))    // 9
console.log(str.indexOf("o"))   // 1
console.log(str.indexOf("g"))  // 11
console.log(str.indexOf("a")) // -1



let input = "abcdefghc"

for(let i=0 ; i<input.length ; i++)
{
      for(let j=i+1 ; j<input.length; j++)
      {
            if(input[i] == input[j])
            {
                  console.log(input[i]);
                  break;
            }
      }
}


// ! 5. lastIndexOf()

// it is used to give the last occurance of any character.

let str2 = "how are you"

console.log(str2.indexOf('o'))              // 1
console.log(str2.lastIndexOf('o'))         // 9
console.log(str2.lastIndexOf('a'))        // 4

// ! 6. concat()

// it is used to merge two or more than two strings and it will return one new string.

console.log(str.concat(" ",str2 , "?"))