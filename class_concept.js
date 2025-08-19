//classes and constructors are used togethr in js      
class House{
    houseColor(){
        console.log('color of the house is red')
    }
    houseAddress(){
        console.log('Address is noida')
    }
}
let Houseone = new House()
Houseone.houseColor()
Houseone.houseAddress()

class Food{
    FoodColor(){
        console.log('color of the food is brown')
    }
    FoodAddress(){
        console.log('Food is from zomato')
    }
    FoodColor1(){
        console.log('color of the food is black')
    }
    FoodAddress1(){
        console.log('Food is from swiggy')
    }
}
let Foodone = new Food()
Foodone.FoodColor()
Foodone.FoodAddress()
console.log("--------------------------")
let Foodtwo = new Food()
Foodtwo.FoodColor1()
Foodtwo.FoodAddress1()
