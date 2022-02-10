class student{
    constructor(s_name,course,age,fee){
        this.StudentName=s_name
        this.course=course
        this.age= age
        this.fee=fee
    }
    printStudent(){
        console.log(this.StudentName,this.course,this.age,this.fee);
    }
}

var akhil = new student("Akhil","Data science",23,60000)
akhil.printStudent()

// constructor is calling iteself when the object is created. and initializing the instance variables.
// used to initialize the instance variables -(this.age,this.name,......)

