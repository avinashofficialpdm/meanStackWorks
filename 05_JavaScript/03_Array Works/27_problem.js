var arr=[
    [10,50],
    [20,60],
    [1,2],
    [5,8],
    [30,40]
]

// print all numbers greater then 10
// arr.flat().filter(num=>num>10).forEach(num=>console.log(num))

arr.flat().filter(num=>num>10).forEach(num=>console.log(num))

// print square of all numbers
console.log(arr.flat().map(num=>num**2));

// print total sum
console.log(arr.flat().reduce((n1,n2)=>n1+n2));

// print highest element
console.log(arr.flat().reduce((n1,n2)=>n1>n2?n1:n2));


// print vowels from this string
var str = "hello hai"

console.log(Array.from(str));