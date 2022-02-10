var arr = [1,2,3,4,5,6,7]

console.log("Total = ",arr.reduce((n1,n2)=>n1+n2));

console.log("Maximum value = ",arr.reduce((n1,n2)=>n1>n2?n1:n2));

console.log("Minimum value = ",arr.reduce((n1,n2)=>n1<n2?n1:n2));

var employees=[
    [1000,"ram","developer","kochi",25000,1],
    [1000,"ravi","developer","kochi",35000,2],
    [1000,"arjun","qa","tvm",34000,1],
    [1000,"tom","qa","tvm",45000,2],
    [1000,"jim","ba","banglore",55000,3],
    [1000,"tinu","ba","banglore",35000,2],
    [1000,"fred","sales","mumbai",45000,2],
    [1000,"abi","sales","mumbai",65000,5],

]

// print the total salary of all employees

var empsal = employees.map(emp=>emp[4])
var totalsalary = empsal.reduce((n1,n2)=>n1+n2)
console.log(totalsalary);

// OR

var totalsalary1 = employees.map(emp=>emp[4]).reduce((n1,n2)=>n1+n2)
console.log(totalsalary1);

//  OR

console.log(employees.map(emp=>emp[4]).reduce((n1,n2)=>n1+n2));



