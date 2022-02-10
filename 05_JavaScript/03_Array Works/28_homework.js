var arr=[
    [10,50],
    [20,60],
    [1,2],
    [5,8],
    [30,40]
]

// print squares of all numbers
console.log(arr.flat().map(num=>num**2));

// print total sum 

// print highest element
console.log(arr.flat().reduce((n1,n2)=>n1>n2?n1:n2));


