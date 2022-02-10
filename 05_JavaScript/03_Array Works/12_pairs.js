var arr = [2,3,4,5]
arr.sort((n1,n2)=>n1-n2)
var pairNum =7
var upp=arr.length-1
var low=0
while(low<upp){
    let currentSum = arr[low]+arr[upp]
    if(currentSum==pairNum){
        console.log(`Pairs are ${arr[low]},${arr[upp]}`);
        break;
    }
    else if(currentSum>pairNum){
        upp--
    }
    else if(currentSum<pairNum){
        low++
    }
    // low++
    // upp--

}