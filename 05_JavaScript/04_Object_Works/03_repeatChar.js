var str = "ABABDF"
// find the first repeating character
var wordCount ={}
var chars = Array.from(str)
console.log(chars);

for(let char of chars){
    if(char in wordCount){
        wordCount[char]+=1
        if(wordCount[char]==2){
            console.log("First Repeating character is",char);
            break;
        }
    }else{
        wordCount[char] =1
    }
}