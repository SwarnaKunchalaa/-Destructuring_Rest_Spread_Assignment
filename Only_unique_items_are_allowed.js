let arr = [34, 5, 6, 3, 5, 8, 9, 10, 4, 8];

let setArr = new Set();
arr.map(ele=>{
    setArr.add(ele)
});

for(item of setArr.values()){
    console.log(item)
}

