// Given an array of integers, replace every element with its neighbouring numbers (integers next to it),
// then find the duplicate numbers and sum them up. It is guaranteed that provided integers are unique,
// which means they will not repeat.
// 
// For example for the input: -3,5,8,-1,6,11
// * given that neighbouring numbers for -3 are -4 and -2
// * resulting array after replacement with neighbouring numbers would be: -4,-2,4,6,7,9,-2,0,5,7,10,12 
// * duplicate numbers are -2,7
// * the result will be 5.

function overlappingSpreads(data) {
    let replacedArr = []
    data.map(item => {
        const prevNum = item - 1
        const nextNum = item + 1
        replacedArr = [...replacedArr, prevNum, nextNum]
    })

    const sumOfEachDuplicate = []
    replacedArr.sort().map((item, index) => {
        const nextItem = replacedArr[index + 1]
        item == nextItem && sumOfEachDuplicate.push(item)
    })

    return sumOfEachDuplicate.length !== 0 ? sumOfEachDuplicate.reduce((a, b) => a + b) : 'No duplicate numbers'
}

overlappingSpreads([-3, 5, 8, -1, 6, 11]);
