function chunkArrayInGroups(arr, size) {
    const retArr = []
    arr.map((item, index) => {
        // if the index is divisible by two then we should separate the array from there
        if ((index + 1) % size == 0) {
            // arr.slice(index + 1, arr.length).length >>>> number of elements left in the arr
            retArr.push(arr.slice(index - (size - 1), index + 1))
            if (arr.slice(index + 1, arr.length).length !== 0 && arr.slice(index + 1, arr.length).length < size) {
                retArr.push(arr.slice(index + 1, arr.length))
            }
        }
    })
    return retArr
}

chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2);
