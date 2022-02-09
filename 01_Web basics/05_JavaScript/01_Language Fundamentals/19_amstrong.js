var num1 = 153
var original = num1
var lastDigit
var amstrongCheck = 0

while (num1 > 0) {
    lastDigit = num1 % 10
    amstrongCheck += lastDigit ** 3
    num1 = Math.floor(num1 / 10)
}
console.log(amstrongCheck);

if (original == amstrongCheck) {
    console.log(`${original} is an amstrong number`);
} else {
    console.log(`${original} is not an amstrong number`);
}