var arr=[10,30,2,6,11,15]

// 2 is found or not in this array
var flag=1
for(let element of arr){
    
    if(element==2){
        flag=0
        console.log(`2 is found in this array`);
    }
    
}
if(flag==1){
        console.log(`2 is not found in this array`);
    
}