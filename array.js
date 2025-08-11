//Declaration of array
let array =[]  //EMPTY ARRAY

let fruit=["apple","banana","papaya","grapes"]  //ARRAY WITH STRINGS
//push method
fruit.push("pineapple")      //pineapple got pushed at the last element
console.log(fruit)

//pop method
let number=[1,2,3,4,5] //ARRAY WITH NUMBERS
number.pop()           //removes last element
console.log(number)

//shift method        //removes the first method
fruit.shift()
console.log(fruit)
 
//unshift method                          //adds value in the first element
array.unshift(1100) 
console.log(array)
array.unshift(2200,3300)
console.log(array.length)

// splice
let animals=["cat","goat","fish","monkey","dog"]        
animals.splice(1,1,"cow")          //removing 1 element from 1st index and 
console.log(animals)               //o/p is [ 'cat', 'cow', 'fish', 'monkey', 'dog' ]
animals.splice(0,2,"which animal")  //o/p is [ 'which animal', 'fish', 'monkey', 'dog' ]
console.log(animals)                

//slice method
let country =["india","amaerica","australia","england","srilanka"]
let result =country.slice(1,4)  //include 1st index 2nd index 3rd index and output fill be also 1,2,3 index it will exclude the 4th index
console.log(result) //[ 'amaerica', 'australia', 'england' ]

//concat method  use to concat 2 arrays and store in 3rd array
 let alpha =["a","b","c","d","e","f","g"]
 let beta = ["A","B","C","D"]
 let gamma = alpha.concat(beta) 
 console.log(gamma)   //['a', 'b', 'c', 'd','e', 'f', 'g', 'A','B', 'C', 'D']
 let gamma1 =beta.concat(alpha)
 console.log(gamma1)  //['A', 'B', 'C', 'D','a', 'b', 'c', 'd','e', 'f', 'g']

//index of function      gives first index of any elemen
let veg1 =["tomato","potato","onion","peas"]
let veg2 =["tomato","peas","potato","onion","peas"]
let newveg =veg1.indexOf("onion")
console.log(newveg)  //2
let newveg1=veg2.indexOf("peas")
console.log(newveg1)  //1
let newveg2=veg1.indexOf("corriander")   //-1 because coriender is no where
console.log(newveg2)
let secontPeas= veg2.indexOf("peas",2) //count from second index so here second pea index will also be printed
console.log(secontPeas)  //4

//include medthod
let na=["raj","ravi","mohan","shiv","shivam"]
let newname=na.includes("ravi","rina") //it gives output as true or false , here it will give true because eithe r of the thing is correct
console.log(newname)
let newname1=na.includes("rina")
console.log(newname1)   //false

//foreach method
let n=[1,2,3,4,5]
n.forEach((e)=>{
    console.log(e+5,e*2)
})
  
  
  
  
