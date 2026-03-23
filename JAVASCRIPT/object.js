
console.log("object in javascript")

// ! how to create object by object literals

let student = {
    sname : "virat",
    age : 18,
    isPlayer : true,
    salary : undefined,
    skills : ["html","css","js"],
    address : {
                city:"bangalore",
                pin:123654
            },
    work : function()
            {
                console.log("eat sleep repeat")
            }
}


console.log(student)

// ! how to access object properties

// ? syntax :     objectname.key

console.log("student name is : ",student.sname)
console.log("student age is : ",student.age)
console.log("student city is : ",student.address.city)
student.work();


// ! how to modify value 

// ?  syntax:  object.key = value

student.age = 20 ; 
student.sname = "virat kohli"
console.log(student)

// ! how to add new element 

student.phNo = 9721456780
console.log(student)

// ! how to delete 

// ? syntax:   delete object.key;

delete student.salary;
console.log(student)


// !    Object methods 


let emp ={
    ename:"miller",
    sal:10000,
    dept:"DA",
    eid:2150
}

// !  1. Object.keys()

// this method is used to provide all the keys in the form of array.

let keys = Object.keys(emp);
console.log(keys)


// !  2. Object.values()

// this method is used to provide all the values in the form of array.

let values = Object.values(emp);
console.log(values)

// ! 3. Object.entries()

// this method returns one nested array where inside each array it will wrap key and value.

let key_value = Object.entries(emp)
console.log(key_value)

// ! 4. Object.freeze()

let pen = {
    price : 20,
    color:"red"
}

console.log("BEFORE FREEZE")
console.log(pen)

console.log("AFTER FREEZE")
Object.freeze(pen);

pen.price = 50 ;        //! modification is not possible
pen.brand = "camlin"   //!  adding not possible
delete pen.color;     //! delete not possible
console.log(pen)


// !  5. Object.isFrozen()

// it is used to check any object is frozen or not.
// it will return boolean value.

console.log(Object.isFrozen(pen))
console.log(Object.isFrozen(emp))


// ! 6. Object.seal()

// it is similar to freeze method , we can't add or delete any property but here we can modify the element.

let laptop ={
    brand : "hp",
    price : 72000
}
console.log("before seal")
console.log(laptop)

console.log("after seal")
Object.seal(laptop);

laptop.color = "black"     // add is not possible
delete laptop.price       // delete is not possible
laptop.price = 80000     //! we can modify

console.log(laptop)


// ! 7. Object.isSealed()

// it is used to check any object is sealed or not. 
// it will return boolean value.

console.log(Object.isSealed(laptop))
console.log(Object.isSealed(student))


// ! 8. Object.assign()

// it is used to combine two or more than two objects and it will return one new object.

//? syntax:    Object.assign(target, source1, source2 , source3....)

let ob1 = {
    name : "board",
    color:"white"
}

let ob2 = {
    price : 5000,
    height:"50m",
    width : "200m"
}

let ob3 = Object.assign({},ob1,ob2)
console.log(ob3)
console.log(ob2)
console.log(ob1)



// ! 9. hasOwnProperty()

// used to check property is present or not.
// it will return boolean value.

console.log(ob2.hasOwnProperty("price"))
console.log(ob2.hasOwnProperty("location"))





