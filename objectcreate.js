//objects literals
const info = {
    name:'Michel',
    age:20,
    occupation:'engineer'
}
console.log(info.name," ",info.age," ",info.occupation)

//constructor function
function car(brand,model,color){
    this.brand=brand
    this.model=model
    this.color=color
}
const c1=new car("bmw",1155,"pink")
console.log(c1.brand)

//class style
class constomer{
    constructor(name,payment){
        this.name=name
        this.payment=payment
    }
}
const new1 = new constomer("naveen",15000)
console.log(new1)


/////////need to study more various ways in depth ----------smjha ni 