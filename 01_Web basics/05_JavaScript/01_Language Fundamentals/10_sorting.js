var num1 = 108
var num2 = 760
var num3 = 86

var low
var medium
var high

if(num1>num2){
    medium = num1
    low = num2
}else{
    medium = num2
    low = num1
}
if(medium>num3){
    high = medium
    if(num3>low){
        medium = num3
    }else{
        medium = low
        low = num3
    }
}else{
    high = num3
}

num1 > num2 ? (medium = num1) && (low = num2) : (medium = num2) && (low = num1)

medium > num3 ? (high = medium) && (num3 > low ? (medium = num3) : (medium = low) && (low = num3)) : high = num3

console.log(`lowest number is ${low}`);
console.log(`Medium number is ${medium}`);
console.log(`Highest number is ${high}`);