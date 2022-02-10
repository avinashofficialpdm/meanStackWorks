var num1 = 28
var num2 = 30
var num3 = 25


if (num1 > num2 && num1 > num3) {
    if (num2 > num3) {
        console.log(`largest is ${num1}`);
        console.log(`Second largest is ${num2}`);
        console.log(`lowest is ${num3}`);
    } else {
        console.log(`largest is ${num1}`);
        console.log(`Second largest is ${num3}`);
        console.log(`lowest is ${num2}`);
    }
} else if (num2 > num1 && num2 > num3) {
    if (num1 > num3) {
        console.log(`largest is ${num2}`);
        console.log(`Second largest is ${num1}`);
        console.log(`lowest is ${num3}`);
    } else {
        console.log(`largest is ${num2}`);
        console.log(`Second largest is ${num3}`);
        console.log(`lowest is ${num1}`);
    }
} else if (num3 > num1 && num3 > num2) {
    if (num1 > num2) {
        console.log(`largest is ${num3}`);
        console.log(`Second largest is ${num1}`);
        console.log(`lowest is ${num2}`);
    } else {
        console.log(`largest is ${num3}`);
        console.log(`Second largest is ${num2}`);
        console.log(`lowest is ${num1}`);
    }
}