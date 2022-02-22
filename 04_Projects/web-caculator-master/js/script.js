function displayNum(num){
    result.value+=num
}

function clearBox(){
    result.value=""
}
function evaluateExp(){
    result.value=eval(result.value)
}

function backSpace(){
    let currValue=result.value;
    result.value=currValue.slice(0,-1)
}