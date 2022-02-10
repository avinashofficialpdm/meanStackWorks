// number district poitive case death cured 1stdose 2nddose
var covid_data=[
    [1,"trivandrum",40000,200,38000,8,5],
    [2,"kollam",35000,250,33000,7,3],
    [3,"kottayam",50000,500,45000,5,2],
    [4,"alapuzha",25000,150,24000,9,5],
    [5,"ernamkulam",70000,500,65000,9,5],
    [6,"thrissur",65000,550,60000,8,7],
    [7,"iduky",1000,50,9500,9,6]   
]
// print all poitive cases
console.log(covid_data.map(data=>data[2]));

// printing positive cases with district name
console.log(covid_data.map(data=>[data[1],data[2]]));

// q1 higest test + ve case district

// q2 district with higest 1 dose vaccination rate
   
// q3 district with lowest death cases

// q4 sort district with +ve cases

// q5 sort the districts based on 1st dose

// q6 is there any states with +ve cases > 60000

// q7 print trissur details

// q8 total nu,ber of +ve cases

// q9 total number of cured cases

// q10 cured numbers of iduky