// Arrays

const myArr = [0,1,2,3,4,5]

console.log(myArr[0])

// Arrays Method 

myArr.push(5)
myArr.pop()
myArr.unshift(8) // add begning
myArr.shift() // remove
myArr.includes(9)
myArr.indexOf(3)
// console.log(myArr)


// slice and splice 

const arr = [1,2,3,4,5]

const arr1 = arr.slice(1,3) 
console.log("A", arr)
console.log(arr1)
// slice is not include range and also not modified original array 
const arr2 = arr.splice(1,3)
console.log("B", arr)
console.log(arr2)
// splice is include range and also modified original array 

 