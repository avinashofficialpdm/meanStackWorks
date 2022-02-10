var array = [10,10,20,20,30,30,40,40,50,50,50]

var wordCount={}
for(let num of array){
    if(num in wordCount){
        wordCount[num]+=1
    }else{
        wordCount[num]=1
    }
}

// OR

array.map(num=>num in wordCount?wordCount[num]+=1:wordCount[num]=1)

console.log(wordCount);