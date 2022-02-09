var arr=[
    [1,2],
    [11,3],
    [4,15],
    [5,16]
]

for(let subArr of arr){
    let arr2=subArr
    for(let num of subArr){
        if(num<10){
            console.log(num);
        }
    }
}