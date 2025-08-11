// var 
// var  x = 10        ;                         //global variable declared
// function test (){ 
//     var y = 20 ;                             //functional scope variable
//     console.log(y)
// }
// test()
// console.log(x);

// var test = "javascript"
// function best(){
//     var rest ="FRiday"
//     console.log(rest)
    

// }
// best()
// console.log(test)

// var browser = "chrome"
// browser = "edge"
// var browser ="safari"
// var browser                                   //sets the value as undefined
// browser
// console.log(browser)


// var tim = "hi tim"                                     // we do not use var much in js because if it satisfies one condition the value is reinitialised and redeclare and now we cannot user our first tim anywhere in the code
// var t = 2
// if (t>1)
//     var tim = "hi not tim"
// console.log(tim)

//let  ->used within a block{}
let name = "Sanjyot"
let time  = 2
if (time>1){
    let name = "together"
    console.log(name)                        // let does'nt redeclair value and it's scopr is within block {}
}
console.log(name)

// constant                               //you cannot reassign value in const

const mg = "test mg"
console.log(mg)
//mg = "test kg"                             // we will get error because mg is initialist in const so we cannot reinitialise it again
