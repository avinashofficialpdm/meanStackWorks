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

// print the names of all employees 

// var empNames = employees.map(emp=>emp[1])
// console.log(empNames);

var numbers = [10,11,12,13,14,15]

console.log(numbers.filter(num=>num>12));

// print the details of developers

console.log(employees.filter(emp=>emp[2]=="developer"));