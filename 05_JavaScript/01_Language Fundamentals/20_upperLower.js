var num = 3

var lowerLimit =8
var upperLimit = 36
var i = 1
var cube=0
while(i<upperLimit){
    cube= i**num 
    if(cube>=lowerLimit && cube<=upperLimit){
        console.log(`number is ${i} and Cube is ${cube}`);
    }
    i++

}