var data=[
    {districtname:"thrissur",weather:29},
    {districtname:"ekm",weather:32},
    {districtname:"ktm",weather:29},
    {districtname:"idk",weather:18},
    {districtname:"thrissur",weather:32},
    {districtname:"ekm",weather:30},
    {districtname:"ktm",weather:30},
    {districtname:"idk",weather:20},
]
var highTemp = 0
var highTempDist = ""
for(let record of data){
    if(record["weather"]>highTemp){
        highTemp=record["weather"]
        highTempDist=record["districtname"]
    }
}

console.log(highTempDist," ",highTemp);

// OR

console.log(Object.entries(data));
// console.log(Object.entries(data).sort((n1,n2)=>n1[1]-n2[1]));