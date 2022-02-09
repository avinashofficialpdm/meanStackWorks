var array = [1,2,3,6,7,8]
// create an array if num<5 num-1 else num+1

var arr= array.map(num=>num<5?num-1:num+1)
console.log(arr);