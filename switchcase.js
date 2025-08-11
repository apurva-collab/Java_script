//This below code is not an example of switch case but will use this to make a switchcase
// function check(days){
//     if (days=="0"){
//         console.log("sunday")
//     }
//     else if (days=="1"){
//         console.log("monday")
//     }
//     else if (days=="2"){
//         console.log("tuesday")
//     }
//     else if (days=="3"){
//         console.log("wednesday")
//     }
//     else if (days=="4"){
//         console.log("thursday")
//     }
//     else if (days=="5"){
//         console.log("friday")
//     }
//     else if (days=="6"){
//         console.log("saturday")
//     }
//     else {
//         console.log("wrong number")
//     }
    
        
// }
// check(0)
// check(10)


//IN this below code it will not cgeck one by one if the input value is 6 it will directly print saturday will not go to previous switch statements.

function checkdaysoftheweek(dayoftheweek){
    let day;
    switch (dayoftheweek) {
        case 0:
            day = "sunday"
            break

        case 1:
            day = "monday"
            break

        case 2:{
            day = "tuesday"
            break
        }

        case 3:
            day="wednesday"
            break

        case 4: {
            day = "thursday"
            break
        }

        case 5:
        day="friday"
        break;
        case 6:
        day="saturday"
        break;

    default:
        console.log("wrong input value")
        break;
}
return day
}

console.log(checkdaysoftheweek(1))

function browsercheck (browser){
    let brow
    switch (browser){
        case "chrome":
        brow = "chrome1"
        break
        case 1:
        brow = "edge"
        break
        case 2:
        brow = "firefox"
        break
        default:
        console.log("wrong input")
        break
    }
    return brow
    
}
console.log(browsercheck("chrome"))