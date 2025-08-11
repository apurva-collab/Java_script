//print square of any number 

const square = a=> a*a
const print= square(4)
console.log(print)
//printing msg
const msg = ()=>"printing msg"
console.log(msg())
//addition

const add = (a,b)=>a+b
const addition = add(2,4)
console.log(addition)
//print name
const name = {
    firstname: "Test1",
    Lastname: "test2"
}
const fullname = name.firstname +" " + name.Lastname
console.log(fullname)

//anothe way 
const name1=()=>"apurva test"
console.log(name1())

//print age
const age = (username='guest',age=0)=>`hello ,${username} you are ${age} years old`;
const gre1=age();
console.log(gre1);
const gre2=age('neena',14);
console.log(gre2);

//rest parameter ----------ni smjha

//max value
const max=(a,b,c)=>{
   return Math.max(a,b,c)

}
const maxval=max(4,6,1)
console.log(maxval)