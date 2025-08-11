//Map(),filter(),reduce() in arraymethods() is pending

//every  checks all the elemnt in array
let num=[1,2,3,4,5]
let less=num.every((e)=>e<5) 
console.log(less)   //will return false because function is not satisfied the last function i.e less than 5
let less1=num.every((e)=>e<10) 
console.log(less1)   //return true because valueis satisfied all the no. are less than 10 
console.log("...............")
//some   checks atkeast 1 element pass the array
let check=[1,2,3,4,5]
let mod=check.some((e)=>e%2===0)
console.log(mod)   //this will return true because atleast 1 elemnt passes the criteria
console.log("...............")
//find  checks if the first eleemt satisfies the array
let checknew=[1,4,3,2,5]
let monew=checknew.find((e)=>e%2===0)
console.log(monew)     //this will return the value if satisfies or undefined , here  output will be 4 because 4 i sthe first elemet which satisfies the condition
let newarr = [1,17,3,17,5]
let total=newarr.find((e)=>e%2===0)   //this will return undefined
console.log(total)
console.log("...............")
//indexOf():
let fruit=["apple","mango","banana","pineapple"]
let fruits=fruit.indexOf("orange")
console.log(fruits) //-1    because orange is not preset in the array
let newfruit=fruit.indexOf("mango")
console.log(newfruit)    //1
console.log("...............")

//lastIndexOf    returns the last index no. of the element
let index1=["apple","mango","apple","mango","mango"]
let checkindex=index1.lastIndexOf("orange")
console.log(checkindex) //-1    because orange is not preset in the array
let checkindexnew=index1.lastIndexOf("mango")
console.log(checkindexnew)    //4
let checkindexnewagain=index1.lastIndexOf("apple")
console.log(checkindexnewagain) //2
console.log("...............")

//reverse     ..reverse the array
let rev=["apple","mango","banana","pineapple","grapes"]
let checkrev=rev.reverse()
console.log(checkrev) 