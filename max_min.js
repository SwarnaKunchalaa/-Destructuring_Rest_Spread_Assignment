function findMaxMin(arr){
    let min = Math.min(...arr)
    let max = Math.max(...arr)
    let obj =  {"max": max, 
                "min": min};
    return obj;
}

let arr = [4,6,2,3,1,8,9,6,7];
result = findMaxMin(arr)
console.log(result);