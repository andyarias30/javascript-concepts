/**
 * Loops
 * 1. for loop
 * 2. for each
 * 3. while
 * 4. map
 */

// 1. for loop
const studentsArray = [
    {id: 1, name: 'Andy' , field:'Software Developer'},
    {id: 2, name: 'John' , field: 'Doctor'},
    {id: 3, name: 'Jane', field: 'Doctor'},
    {id: 4, name: 'Joe', field: 'Software DEveloper'},
    {id: 5, name: 'Jasmine', field: 'Doctor'},
]




//2. for each

// studentsArray.forEach((item, index) => {})


//3. map
const newArray = studentsArray.map((item , index) => {
    console.log(index, '->', item)
    item.age = index + 10 // ading an age to each item
    return item
})
console.log('after my map', newArray)

// map one liner 
studentsArray.map((item, index) => `<h2>item${item.field}</h2>`)

//loop on an array and if id is a multilple of 3 console fizz 
// if id is multiple of 5 console buzz

function fizzBuzz(){
    studentsArray.map((item, index) => {
        if(num % 3 === 0 && num % 5 === 0){
            return "FizzBuzz"
        } else if(num % 3 === 0 ){
            return "Fizz"} else if(num % 5 === 0){
            return "Buzz"
        } else {
            return 'not divisible'
        }
    })
}