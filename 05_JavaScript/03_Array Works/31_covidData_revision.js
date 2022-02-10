var covid_data=[
    [1,"trivandrum",40000,200,38000,8,5],
    [2,"kollam",35000,250,33000,7,3],
    [3,"kottayam",50000,500,45000,5,2],
    [4,"alapuzha",25000,10,24000,9,5],
    [5,"ernamkulam",70000,500,65000,9,5],
    [6,"thrissur",65000,550,60000,8,7],
    [7,"iduky",1000,50,9500,4,6]   
]

// q1 higest test + ve case district
var highestPosDist = covid_data.reduce((data1,data2)=>data1[2]>data2[2]?data1:data2)
console.log("Higest test + ve case district :",highestPosDist[1]);

// q2 district with higest 1 dose vaccination rate
var highVacc = covid_data.reduce((data1,data2)=>data1[5]>data2[5]?data1:data2)
console.log("District with higest 1 dose vaccination rate :",highVacc[1]);
   
// q3 district with lowest death cases
var lowDeath = covid_data.reduce((data1,data2)=>data1[3]<data2[3]?data1:data2)
console.log("District with lowest death :",lowDeath[1]);

// q4 sort district with +ve cases
covid_data.sort((case1,case2)=>case1[2]-case2[2]).map(data=>data[1]).forEach(numm=>console.log(numm))

// q5 sort the districts based on 1st dose
console.log( covid_data.sort((case1,case2)=>case1[5]-case2[5]).map(data=>data[1]));

// q6 is there any states with +ve cases > 60000
console.log(covid_data.some(data=>data[2]>60000));

// q7 print trissur details
console.log(covid_data.find(data=>data[1]=="thrissur"));

// q8 total number of +ve cases
console.log(covid_data.map(data=>data[2]).reduce((num1,num2)=>num1+num2));

// q9 total number of cured cases
console.log(covid_data.map(data=>data[4]).reduce((num1,num2)=>num1+num2));

// q10 cured numbers of iduky
console.log(covid_data.find(data=>data[1]=="iduky")[4]);