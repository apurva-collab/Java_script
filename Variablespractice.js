//Declare a variable called username and assign your name to it. Print it using console.log().

var newname = "Apurva"
console.log(newname )

//Create a constant called PI and assign 3.14. Try changing its value. What happens?

// const PI=3.14
// PI=4.44
// console.log(PI) 


var age = 10
var age = 20
var age = 44
console.log(age)


let na = "John";
let na2 = "Doe";
console.log(na);

const city1="New york"
console.log(city1)
console.log("--------------------")

console.log(x);
var x = 10;      //this will print undefined as x is not initialised first 
console.log("--------------------")
 
// console.log(y)    //this will give error because y is not assigned before
// let y = 20; 


let y = 2;
const z = 3;
function testScope() {
  if (true) {
    var x = 1;
    let y = 2;
    const z = 3;
  }
  console.log(x); // ?
  console.log(y); // ?
  console.log(z); // ?
}
testScope();


let b = 1;
{
  let b = 2;
  console.log(b);
}
console.log(b);

console.log("=======================");
const obj = { name: "Alice" };
obj.name = "Bob";
console.log(obj);


const arr = [1, 2, 3];
arr.push(4);
console.log(arr);

console.log("=======================");
for (let i = 0; i < 5; i++) {
  console.log(i);
}
    
console.log("=======================");
console.log("Start");

setTimeout(() => {
  console.log("Middle");
}, 0);

console.log("End");


console.log("=======================");
for (var i = 1; i <= 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}



let p = 5;
p++;
console.log(p);

const q = 10;
console.log(q);

















