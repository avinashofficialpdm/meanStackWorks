function add(...args){
    return args.reduce((n1,n2)=>n1+n2)
}
console.log(add(10,20,30,40));
console.log(add(10,20,30,40,60,70));

function max(...args){
    return args.reduce((n1,n2)=>n1>n2?n1:n2)
}
console.log(max(10,20,30,40,50));