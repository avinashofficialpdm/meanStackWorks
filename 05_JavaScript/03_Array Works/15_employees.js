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

// print all employee names

// for(let employee of employees){
//     console.log(employee[1]);
// }

// print number of employees

// console.log(`Number of employees is  ${employees.length}`);

// print developer details

// for(let employee of employees){
//     if(employee[2]=="developer"){
//         console.log(employee);
//     }
// }

// print employee details whose salary greater than 30000

// for(let employee of employees){
//     if(employee[4]>30000){
//         console.log(employee);
//     }
// }

// print details of employee arjun

for(let employee of employees){
    if(employee[1]=="arjun"){
        console.log(employee);
    }
}