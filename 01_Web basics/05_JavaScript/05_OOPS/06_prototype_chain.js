var arr = [10,20,30]

console.log(arr.__proto__);

// in this case prototype of arr is Array.and prototype of array in object
// prototype of arr is Array. Thats why we can access array methods in arr without explicitly write inheritance code 
// a variable automatically inherites the objects when it initializes. 
// Example: var a=10. here we can access all the methods of number object
// Example : var mm = "lddjdd". here we can access all the string methods