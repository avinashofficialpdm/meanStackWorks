// 31-01-2022

var student ={
    name : "Avinash",
    age : 20,
    course : "Mearn",
    place : "Pandalam",
    rollNo : 21
}


// printing a value in an object
console.log(student.name);
console.log(student.course);


// checking a property exists in an object -- Using in  --VERY IMPORTANT
console.log("course" in student);


// Adding anew property value using var["newPropertyName"] = value
student["gender"]="male"
console.log(student);
// Adding anew property value and var.newPropertyName = value
student.isVaccinated = true
student.vaccine = "covishield"
console.log(student);


// changin or updating a value
student.vaccine = "co-Vaccine"
console.log(student);
student.age = 30
console.log(student);


// adding a value with present value
student.age+=10
console.log(student);

// printing all elemnts with itration using for
for(let key in student){
    console.log(student[key]);
}


student.subjects = ["maths"]
console.log(student);
student.subjects.push("English")
console.log(student);



// demo object ---- line 3
// printing a value in an object ----- line 12
// checking a property exists in an object -- Using in  --VERY IMPORTANT ------ line 17
// Adding anew property value -using two ways. 1- using var["newPropertyName"] = value and var.newPropertyName = value ---- line 21
// changin or updating a value ------line 30
// adding a value with present value. Example: we want to add age by 10. then ------line 37
// printing all elemnts with itration using for(let keyword in variable) ----line 41