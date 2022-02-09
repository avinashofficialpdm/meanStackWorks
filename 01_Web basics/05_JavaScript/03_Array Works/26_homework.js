var products=[
    [100,"oreo",40,50],
    [101,"goodday",30,50],
    [102,"hidendseek",50,0],
    [103,"moms's",20,10],
    [104,"treat",70,5],
    [105,"oreo",50,80],
    [106,"oreo",70,50],


]


// print costly product detail -  reduce
console.log("Costly product details ",products.reduceRight((p1,p2)=>p1[2]>p2[2]?p1:p2));


// print outofstock products filter
console.log("Out of stock product details ",products.filter(pro=>pro[3]==0));

// print oreo details find
console.log("Oreo details ",products.find(pro=>pro[1]=="oreo"));

// sort products based on available stock order by desc sort
console.log("Sorted order in available stock is",products.map(pro=>pro[3]).sort((stock1,stock2)=>stock2-stock1));

// print product details having maximum available stock reduce
console.log("Maximum available product detail ",products.reduce((p1,p2)=>p1[3]>p2[3]?p1:p2));