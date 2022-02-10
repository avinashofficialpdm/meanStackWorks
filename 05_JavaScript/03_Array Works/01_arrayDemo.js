var expences=[28000,79000,53000,12000,72080]

// console.log(expences[0]);

for(let amount of expences){
    console.log(amount);
}

// find total expence
// fine highest expences
// find lowest expence
var total=0
for(let amont of expences){
    total+=amont
}
console.log(`Total expence is ${total}`);



var temp=0
for(let amont of expences){
   if(temp<amont){
       temp=amont
   }
   
   
}
console.log(`Largest is ${temp}`);



var temp1=expences[0]
for(let amont of expences){
   if(temp1>amont){
       temp1=amont
   }
   
   
}
console.log(`Lowest is ${temp1}`);
