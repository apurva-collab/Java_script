//for loop
// for(let i=2;i<=10;i++){
//     console.log(i)
// }

//for..of loop
// const array=[1,2,3,4,5]
// for(const e of array){
//     console.log(e)
// }
// const array = Array.from({ length: 100 }, (_, i) => i + 1);

// for (const e of array) {
//     console.log(e);
// }

//while loop
// let p =1
// while(p<=10){
    

//     console.log(p)
//     p++;
// }


//do-while loop
// let p=2
// do {
//     console.log(p)
//     p+=2
// }
// while(p<=10)

//break
// let num = 0
// while(num<=100){
//     console.log(num)
//     if(num%5==0){

//         console.log("HI")
//         break                   //it will break the loop where ever it will find the condition is satisfied
        
//     }
//     else {
//         console.log("invalid input")
//     }
//     num++

// }

//for off loop example
const browser = ["chrome", "firefox", "edge", "safari"]
for (const e of browser) {
    if (e == "edge") {
        console.log("launch edge browser...........")
        break
    }
    else if (e != "edge") {
        console.log("invalid")
    }
}