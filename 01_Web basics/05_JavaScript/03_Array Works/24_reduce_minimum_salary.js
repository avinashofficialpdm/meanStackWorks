var employees=[
    [1000,"ram","developer","kochi",65000,1],
    [1000,"ravi","developer","kochi",35000,2],
    [1000,"arjun","qa","tvm",34000,1],
    [1000,"tom","qa","tvm",45000,2],
    [1000,"jim","ba","banglore",55000,3],
    [1000,"tinu","ba","banglore",35000,2],
    [1000,"fred","sales","mumbai",45000,2],
    [1000,"abi","sales","mumbai",65000,5],

]

console.log("Minimum salary is ",employees.map(emp=>emp[4]).reduce((n1,n2)=>n1<n2?n1:n2));

var highPaidemp = employees.reduce((e1,e2)=>e1[4]>e2[4]?e1:e2) //this is used to print the details of LAST object in the array that satisfy the condition
console.log(highPaidemp[1]);


var highPaid = employees.reduceRight((e1,e2)=>e1[4]>e2[4]?e1:e2) //this is used to print the details of FIRST object in the array that satisfy the condition
console.log(highPaid[1]);
