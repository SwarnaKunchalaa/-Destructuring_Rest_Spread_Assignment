let arr = [1, 2, 3, 4, 5, 6, 7, 8]

let result = access(arr)

console.log(result)

function access(arr){
    first = arr[0]
    second = arr[1]
    last = arr[arr.length-1]
    let result = [first, second, last]
    return result
}

