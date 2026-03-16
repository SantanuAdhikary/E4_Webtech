

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


// ! 7. includes()

// it is used to know any string is present or not inside another string.
// it will return boolean

let str3 = "good evening"

console.log(str3.includes("good"))
console.log(str3.includes("morning"))

// ! 8. replace() 

// replace method is used to replace one string with another string.
// it will replace only the first string

console.log(str3.replace("evening","morning"))

let aboutMe = "I am from bangalore, I love bangalore. bangalore is beautiful"

// ! 9. replaceAll()

// this method will replace all the occurances of the given string.

console.log(aboutMe.replaceAll("bangalore","chennai"))


// ! 10. slice()

// it is used to extract one part of any string. 

// it takes two parameters(startIndex, endIndex)

// it will not include the end index value.

// we can pass one parameter also, that will be consider as startIndex. from that startindex it will extract till the end of the string.

// here we can give negative value also. last index is consider as -1.

console.log(str3.slice(0,4))
console.log(str3.slice(5))
console.log(str3.slice(-7,-3))
console.log(str3.slice(-7))
console.log(str3.slice(4,0)) 
console.log(str3.slice(-1,-4)) 

//todo:  how to remove last character

      console.log(str3.slice(0,-1)) 


// ! count vowels 

let sentence = "Setback for Mahagathbandhan in Bihar as 4 MLAs skip voting in Rajya Sabha polls"

let updatedSentence = sentence.toLowerCase();

console.log(updatedSentence)
let count = 0 ;
for(let i=0 ; i<updatedSentence.length;i++)
{
      let ch = updatedSentence.charAt(i);
      if(ch=='a' || ch=='e' || ch=='i' || ch=='o' || ch=='u')
            count++;
}

console.log(`vowel present ${count} times`)


// ! check string is pallindrome or not 

let str4 = "malayalam"

let revStr4 = ""

for(let i=str4.length-1 ; i>=0 ; i--)
{
      revStr4 += str4[i]
}

console.log(revStr4)

if(str4 == revStr4)
      console.log("it is palindrome")
else
      console.log("it is not palindrome")

