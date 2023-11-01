/**
 * Ways of writing a function
 * 1. Function Decalratation 
 * 2. Function expression 
 * 3. anoymous fucntion 
 * 4. arrow function
 *  */  

//1. Function Declaration

// function twoSum(num1 , num2){
//     return num1 + num2
// }

// const result = twoSum(2 , 4 )
// console.log(result)

// // 2. Fucntion Expression

// const twoSumJs = function(num1 , num2){
//     return num1 + num2
// }

// const result2 = twoSumJs(45 ,5)
// console.log(result2)

// //Anonymous function
// const myArray = []
// myArray.map(function(num1 , num2) {
//     return num1 + num2
// })

// //4. Arrow Function

// // let my twoSumArrow = (num1 , num2) => {
// //     return num1 + num2
// // }

// const result3 = twoSumArrow(78 , 45)
// console.log(result3)

// //4.1 Arrow function - one liner 
// const twoSumArrow3 = ( num1 , num2 ) => num1 + num2
//  const result4 = twoSumArrow3(78 , 45)
//  console.log("result4 ->", result3)

 /**
  * 1Write a function that take in 2 numbers and return the largest number
  * 2 store the results of the first function in a variable then write another
  * function that take results and multiplies it by 2 
  */
 
 function largesNumber(num1 , num2 ) {
    if(num1 > num2){
        return num1 
    } else {
        return num2
    }
    
 }
const result6 = largesNumber(30 , 100)

 console.log(result6)

 function otherFunction() {
  return result6 * 2 
 }
 console.log(otherFunction())

 /**
 * The Problem
 * Write a program that takes one number and print the number.
 * If the number is multiple of 3 print “Fizz” instead of the number.
 * If the number is multiple of 5 print “Buzz” instead of the number.
 * If the number is multiple of both 3 and 5 print “FizzBuzz”.
 */

 function moduleProblem(num){
    if(num % 3 === 0 && num % 5 === 0){
        return "FizzBuzz"
    } else if(num % 3 === 0 ){
        return "Fizz"} else if(num % 5 === 0){
        return "Buzz"
    } else {
        return 'not found'
    }
 }
 console.log(moduleProblem(20))

 //4. Given a string, return true if the string is a palindrome or false if it is not.  Palindromes are strings that form the same word if it is reversed. *Do* include spaces and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false
//   palindrome("racecar") === true

function palindromeStr(str){

}