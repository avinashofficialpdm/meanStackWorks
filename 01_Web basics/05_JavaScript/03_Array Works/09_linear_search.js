var arr = [10,11,12,33,45,3,22,34,5,44,90,66]

var element = 459
var count = 1
var flag = 0
for(let num of arr){
    if(element==num){
        flag = 1
        break
    }
    count++
}

console.log(flag==1?"found":"not found");
console.log(count);