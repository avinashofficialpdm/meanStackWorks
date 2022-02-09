var num1=20
var num2=30
var num3=5

if(num1>num2){
    if(num1>num3){
        console.log(`${num1} is greater`);
    }
    else{
        console.log(`${num3} is greater`);
    }
}else if(num2>num3){
    console.log(`${num2} is greater`);
}else{
    console.log(`${num3} is greater`);
}



console.log((num1 > num2) ?(num1 > num3 ? `${num1}`: `${num3}`) : (num2 > num3 ? `${num2}` : `${num3}`))