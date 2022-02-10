                    // Array Methods

array.push() // used to add an element to aan array
//  example : array.push(20)

array.map()- // using to map all the elements in an array
// example:creating an array which elements are square of elements in given array
console.log(arr2 = arr.map(num=>num**2));


array.filter() - //using to filter specific objects from an array
// example: printing the details of employees who is working in sales
console.log(employees.filter(emp=>emp[2]=="sales"));


array.find() - //using to find an exact element in an object in array
// example: find the name of the employee who is working as a developer. in this case there is a condition. and we don't have to print
// all the details of that employee. we want to print only the name of employee who is working as developer.
console.log(employees.find(emp=>emp[3]=="tvm")[1]);
// NB:HERE IT TAKES ONLY THE FIRST TRUE CONDITION IN AN ARRAY


array.sort()  // used to sort the elements in an array
// example : sorting an array in ascending order
arr.sort((n1,n2)=>n1-n2)
// example :  sorting the elements in descending order
arr.sort((n1,n2)=>n2-n1)


array.reduce() // used to find a results like sum,highest element, lowestelement,avrage.... reducing the file with our needs
// example : [1,2,3,4,5] we want to find the largest element .
array.reduce((n1,n2)=>n1>n2?n1:n2) 



array.reduceRight()

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

array.reduceRight() //when two elements satisfies the condition, reduce() will takes the first element as the result. But ReduceRight()
// will takes the last element that satosfies the condition.
var highPaid = employees.reduceRight((e1,e2)=>e1[4]>e2[4]?e1:e2) //this is used to print the details of FIRST object in the array that satisfy the condition
console.log(highPaid[1]);


array.forEach() //used to take the elements one by one from an array
// in default case the array will print as an array. by using forEach, we can print the elements one by one as a list
// example : on normal printng ; [1,2,3,4,5] 
// printing using forEach() :  1
//                             2
//                             3
//                             4
array.forEach(num=>console.log(num))



array.flat() //used to merge all elements in a array of array to a new array
// example: [[1,2],[3,4],[6,7]] then result is [1,2,3,4,6,7]
// method is
array.flat()


array.includes()  || str.includes("a")  // used to check whether an element is present in an array or string and returns a true or false
var arr = [1,2,3,4,5,6]
console.log(arr.includes(4));
let text = "Hello World, welcome to the universe. 12";
console.log(text.includes("12"));


array.some() // used to know is there atleast one element that satisfies the condition
// it returns only true or false
// Example : arr=[1,2,3,4,5]. we want to chech is there any elemnt greater than 3
// in 4th itration, condition became true. then it returns true . and it shouldn't goes for next itration

// array
// nested array
// array methods

// push() ------
// sort()  -------
// filter()  ---------
// map() --------
// find() ------
// reduce()  -------
// reduceRight() -----
// some() ----
// includes() -----
// forEach() -----
// flat() -------
// split()
// Array.from()