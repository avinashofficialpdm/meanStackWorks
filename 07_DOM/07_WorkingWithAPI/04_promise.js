var luckyContext = new Promise((res,rej)=>{
    let lotNum=4
    let selectNum=Math.floor(Math.random()*10)
    if(selectNum==lotNum){
        res("Won")
    }else{
        rej("lose")
    }
})
luckyContext.then(data=>console.log(data)).catch(err=>console.log(err))
