// //ways to declare a function 
// //1. function declaration
// function add(a,b){
//     return a+b
// }
// function priint(){
//     console.log("this is js function delaration")
// }
// priint()

// const sum=add(5,6)
// console.log(sum)
// console.log("-----------------------")

// //Function expression :annonymous function
// const mul= function(x,y){
//     return x*y
// }
// const multiply = mul(6,5)
// console.log(multiply)  //30

// //arrorw function operation
// const div=(t1,t2) => t1/t2
// const divide=div(20,5)  //returns questent 
// console.log(divide)

// //function constructor   last parameter behaves as parameter body
// const subs=new Function('a','b','return(a-b)')
// const substraction=subs(10,4)
// console.log(substraction)  //6

// //IIFE (immediately invoked function expression)
// ;(function(){
//     console.log("Server is up and running on port 3000");
// })();


//generator function        -----------------//it will always have a value property and done property
function* generateId() {
    let id = 1
        while(true) {
        yield id
        id++
    }
}
const generateobj = generateId()
console.log(generateobj.generateId)
//function* yield keyword
// function* generateNumberSequence(){
//     yield 1
//     yield 2
//     yield 3
//     yield 4
// }
// const generator=generateNumberSequence()
// console.log(generator.next().value)
// console.log(generator.next().value)
// console.log(generator.next().value)
// console.log(generator.next().value)

// //anonymous function //no specific name
// const numbe=[1,2,3,4,5]
// const Printsquare=numbe.map(function(e){
//     return e*e

// })
// console.log(Printsquare)

// //recursive function ->calls itself during execution
// function factorial(n){
//     if(n===0 || n===1){
//         return 1
//     }
//     else {
//         return n * factorial(n-1)
//     }

// }
// console.log(factorial(0))

// //higher order function ----------function that takes function as an argument
let a = 1
let b = 5
function add(a, b, callback) {
    let result = a + b
    callback(result)
    console.log(result)
}

add(a, b, function(sum) {
    console.log(sum)
})

    



