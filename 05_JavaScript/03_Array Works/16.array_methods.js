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
// descending order in their salary
// employees.sort((emp1,emp2)=>emp2[4]-emp1[4])
// console.log(employees);

// ascending order in their experience

employees.sort((emp1,emp2)=>emp1[5]-emp2[5])
console.log(employees);