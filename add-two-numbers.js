// Create a function that sums two arguments together.If only one argument is provided,
//  then return a function that expects one argument and returns the sum.
// For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.

const addTogether = (num1, num2) => {
    if (typeof num1 !== 'number') return undefined
    if (!num2) {
        return (num3) => {
            if (typeof num3 !== 'number') return undefined
            return num1 + num3
        }
    } else {
        if (typeof num2 !== 'number') return undefined
        return num1 + num2
    }
}

addTogether(2, '3');
addTogether(5)(7);