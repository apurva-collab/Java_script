// function checkage(age) {
//     if (age>18){
//         console.log("you are elegible to vote")
//     }
//     else{
//     console.log("you cant vote")
//     }


// }
// checkage(10)
// checkage(0.1)
// checkage(100)
// checkage(18)

// function number(num){
//     if (num>0){
//         console.log("number is positive")
//     }
//     else if(num<0) {
//         console.log("number is negative")
//     }
//      else{
//          console.log("number is 0")
//      }
// }
// number(10)
// number(-1)
// number(0)
// number(-3)
// nested if-else

// function checkgrade(grade){
//     if (grade>90){
//         grade="A"
//     }
//     else
//     if (grade>70){
//         grade="B"
//     }
//     else{

//         grade="c"
//     }

//     console.log(grade)
// }
// checkgrade(10)
// checkgrade(100)
// checkgrade(90)

// let browser = "firefox"                                             //✅ if (browser == "chrome") is true, so "chrome browser" is printed.
// if (browser == "chrome"){                                            //❌ if (browser == "firefox") is false, so nothing prints.
// console.log("chrome browser")                                                                    //❌ if (browser == "edge") is false — so the corresponding else block runs, and "launch proper browser" is printed.
// }
// if (browser == "firefox"){                                                                    //The key issue:
//  console.log("firefox browser")                                                                   // Only this last if has an else attached:
//                                                                                               // if (browser == "edge") {
//                                                                         //   ...
// }                                                                     // }
// // else {                                                             // else {
// //     console.log("launch proper browser")                           //   ...
// // }                                                                  // }
// if (browser == "edge"){
//     console.log("edge browser")

// }

//  else {
//      console.log("launch proper browser")
//  } 
//THe above code had some issue which are mentioned in the code hence making the 2nd code to resolve the issue using if else-if 

let browser = "edge"                            //This code is stillbetter than the first one because else statement is attached with every if 
if(browser ==  "Chrome"){                       //but if there will be 100 if's and else will be in 101 place then it will traverse 100 if 
   console.log("chrome browser")                //if above 99 does'nt satisfy the statement this will make it slow although the answer will be correct 
}                                               //break cannot be used alone if if else there should be while fore loop etc to use break 
else if(browser=="firefox"){
   console.log("firefox browser")
}
else if(browser=="safari"){
   console.log("safari browser")
}
else{
   console.log("launch proper browser")
}