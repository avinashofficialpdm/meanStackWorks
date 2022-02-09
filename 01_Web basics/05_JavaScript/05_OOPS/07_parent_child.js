// Method overriding
// same method in parent class and child class

class parent{
    bike(){
        console.log("Passion pro");
    }
}

class child extends parent{
    bike(){
        console.log("Royal enfield");
    }
}

var ch = new child()
ch.bike()

// notes about function overloadng

function add(){
    console.log("One");
}
function add(n1,n2){
    console.log(two);
}
function add(n1,n2,n3){
    console.log("three");
}

add(10,20) // here it calls the last implementd function