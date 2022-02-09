var num1 = 24
var num2 = 48
var gcd = 1
for (var i = 1; i <= num1 && i <= num2; i++) {
    if (num1 % i == 0 && num2 % i == 0)
        gcd = i

}
console.log(gcd);