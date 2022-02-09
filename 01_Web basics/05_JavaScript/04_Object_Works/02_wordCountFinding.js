var str= "hello hai hello hai"

// var words = str.split(" ")
// console.log(words);
var wordCount = {}

// for(let word of words){
//     if(word in wordCount){
//         wordCount[word]+=1
//     }else{
//         wordCount[word] = 1
//     }
// }

str.split(" ").map(word=>word in wordCount?wordCount[word]+=1:wordCount[word]=1)

console.log(wordCount);