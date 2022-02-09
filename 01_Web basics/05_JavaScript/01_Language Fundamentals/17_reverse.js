var num = 123
var str = ""
var lastDigit 
while(num!=0){
    lastDigit = num%10
    str+=lastDigit
    num=Math.floor(num/10)

}
console.log(str);


// 4!
// 4*3*2*1

// amstrong number
// 123(1**3+2**3+3**3)=36
// 153(1**3+5**3+3**3)=153 so this is ana amstrong number


// var num =2
// lowlimit =8
// upplimit = 36
// 2**2 = 4 so no need of print this value
// 3**2 = 9 it can be print 
// 
// 
// 
// 7**2 = 49 no need of print this value