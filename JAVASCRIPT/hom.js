


// ! map() method

// map() is one higherOrderArray method, it is used to traverse the array.

// in the callback function it can take 3 parameters.(element , index, original array)

// map method is used to return one new array and we can modify all the elments .

let arr = [10,20,30,40,50]

arr.map((ele,index,array)=>{

    console.log(index , ele, array)
})


// ! multiply all the elements by 5 

let product =  arr.map((ele)=>{
        return ele * 5 ;
 })

 console.log(product)


 let names = ["tabrez","nikhil","sekhar","nagraj"];

let upper = names.map((ele)=>{
           return ele.toUpperCase();
 })

 console.log(upper)



//  ! filter()

// filter is higherOrder Array method. 

// it is used to traverse the array and check the condition.

// it will return one new array.

// in the callback function it can take 3 parameters.(element , index, original array)

let f = arr.filter((ele)=>{

      return ele != 30
})

console.log(f)



// ! reduce()

// reduce is one higherOrder array method it is used to convert the array elements into single value.

// it can take 4 parameters. (accumulator,element,index,array)

// when we to add , multiply all the elements of the array we can use this reduce() method.

let sum = arr.reduce((acc, ele)=>{
         return acc + ele;
})

console.log(sum)



// ! forEach()

// this is used to traverse the array. 
// it can also take 3 parameters
// it can not return.

arr.forEach((ele,index,array)=>{
    console.log(ele,index,array)
})


// !  sort() 

// it is used to sort the array into ascending or descending order.

// it will modify the original array.

let unsortedArr = [8,5,19,4,21,15]
console.log(unsortedArr)

unsortedArr.sort((a,b)=> b-a)
console.log(unsortedArr)

