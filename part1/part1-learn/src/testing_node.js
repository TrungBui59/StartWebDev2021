// Variable
// 3 ways to define a variable in JS
// let, have scope and changable
let x = 6
// const, have scope and unchangable
const y = 6
// var, changable but dont have scope. DONT USE IT BECAUSE IT IS EXTREMELY MESSY
var z = 6

// console.log : print
console.log(x, y, z)

// ARRAYS
const t = [1, 2, 3, 4]
t.push(5) //add 5 to the END of the array, not return anything
console.log(t.length) //return 5
console.log(t[0]) // return 1

t.forEach(value => {
  console.log(value) // print 1, 2, 3, 4, 5, THIS IS VERY USEFULL IN REACT
})

const t2 = t.concat(6) // also add 6 to the END of the array but return a new array
console.log(t2)
const m1 = t2.map(value => value * 2) // map function: the same as Python3, THIS IS VERY USEFULL IN REACT
console.log(m1)

//DESTRUCTING ASSIGNMENT: This is frequently use
const [first, second, ...rest] = t2
console.log(first)
console.log(second)
console.log(rest)

//Object
const Trung = {
  name : "Trung Bui",
  age : 19,
  education: "Freshman"
}
//There are two way of accessing the value of an object
console.log(Trung["name"]) //This is unlike Python3, you need to put it as String back to the field
console.log(Trung.name)

// We could use this accesing property to add value to an object
Trung.laptop = "Macbook Pro M1"
Trung["address"] = "Cary Quad"
console.log(Trung["laptop"])
console.log(Trung.address)

//Functions
// Old way: using function
function product(a, b) {
  return a * b
}
//new way: using const
const sum = (int1, int2) => {
  return int1 + int2
}

// this in object
// I still using myself as example again
const newTrung = {
  name : "Trung Bui",
  age : 19,
  education: "Freshman",
  greet: function() {
    console.log("Hello, my name is " + this.name)
  },
  setAge: function(inputAge) {
    this.age = inputAge
  },
  doAddition: function(int1, int2) {
    console.log(int1 + int2)
  }
}
newTrung.greet()
console.log(newTrung["age"])
newTrung.setAge(20)
console.log(newTrung["age"])
newTrung.doAddition(1, 2)
// We could create a reference outside of the object to use its methods:
const outsideAdd = newTrung.doAddition // dont use () because it is the reference not the result itself
outsideAdd(5, 5)
let referenceToGreet = newTrung.greet
referenceToGreet() // this will ouput "Hello, my name is undefined" because it doesnt know what "this" is
referenceToGreet = newTrung.greet.bind(newTrung) // This will fix it by binding the object to the function
referenceToGreet()
