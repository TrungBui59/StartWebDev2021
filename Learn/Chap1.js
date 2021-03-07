// Variable
const x = 1 // cannot change value of const
let y = 5 // can change y quite easily
console.log(x, y) // output: 1 5
y += 10
console.log(x, y) // output 1 15
y = 'sometext'
console.log(x, y)   // 1, sometext are printed
//x = 4 // cause error

// Array
const t = [1, -1, 3] // t is a const but can be modify because array is an object
t.push(5) // this add 5 to the end of the array
t1 = t.concat(5) // same as push but create another array: Functional Programming
console.log(t.length) // output: 4
console.log(t[1]) // output: -1

console.log(t)
console.log(t1)
// For each loop: take each value in the t array and print it out
t.forEach(value => {
    console.log(value)
})

// Map(function not data structure)
//The map() method creates a new array 
//populated with the results of calling a provided function on every element in the calling array.
const t2 = t.map(value => value * 2)
console.log(t2)

// Destructing Asignment

const [first, second, third, ...rest] = t
// ...rest will result rest = one array of all the rest elements
console.log(first, second, third, rest)

// Object
const Trung = {
    name: 'Trung Bui',
    sex: 'Male',
    age: 19
}
const object2 = {
  name: 'Full Stack web application development',
  level: 'intermediate studies',
  size: 5,
}

const object3 = {
  name: {
    first: 'Dan',
    last: 'Abramov',
  },
  grades: [2, 3, 5, 3],
  department: 'Stanford University',
}

// Two way to get properties of Object
console.log(Trung.name)
const fieldName = 'age'
console.log(Trung[fieldName])
console.log(Trung)

// The previous two ways could use to create more properties
Trung.address = "Hanoi"
Trung['school name'] = "HSGS" // because there is a space in between we could not declare using the previous way
console.log(Trung)

// Function
const mul = (p1, p2) => {
  console.log(p1)
  console.log(p2)
  return p1 * p2
}

let a = mul(5, 3)
console.log(a)

let k = [1, 2, 3, 4]
let k2 = k.map(value => mul(value, value))
// k2 = [2, 4, 6, 8]

// we could declare using the function keyword

