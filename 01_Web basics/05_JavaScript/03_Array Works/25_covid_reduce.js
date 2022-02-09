var covid_data=[
    [1,"trivandrum",40000,200,38000,8,5],
    [2,"kollam",35000,250,33000,7,3],
    [3,"kottayam",50000,500,45000,5,2],
    [4,"alapuzha",25000,150,24000,9,5],
    [5,"ernamkulam",70000,500,65000,9,5],
    [6,"thrissur",65000,550,60000,8,7],
    [7,"iduky",1000,50,9500,9,6]   
]

// highest cases place
var highCase = covid_data.reduce((data1,data2)=>data1[2]>data2[2]?data1:data2)
console.log(highCase[1]);

// q3 district with lowest death cases

var greencity = covid_data.reduce((d1,d2)=>d1[3]<d2[3]?d1:d2)
safeZone = covid_data.filter(data=>data[3]==greencity[3])
console.log(safeZone);