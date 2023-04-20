let str = "You are building a word count generator that will take a large string of text as input and output the words and the number of times they are present in the string. Your task is to write a function that can count the occurrences of each word in the string and return a Map containing each word's count. For simplicity, you can assume that the string only contains alphabetic characters and spaces.";

let [...arr] = str.split(" ");

function count_words(arr){
    let mapp = new Map();
    let temp;
    arr.map(ele=>{
        if(mapp.has(ele)){
           mapp.set(ele,mapp.get(ele)+1)
        }
        else{
            mapp.set(ele,1);
        }
    })
    return mapp;
}

let mapp = count_words(arr);

for(let [key, value] of mapp){
    console.log(key+" "+value)
}
