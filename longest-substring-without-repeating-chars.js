// find the longest substring in the given string S where no characters are repeating
// in other words all chars are unique
const lengthOfLongestSubstring = s => {
    if (s.length == 0) return 0
    const split = s.split('')
    const reduced = []
    split.reduce((a, b, index) => {
        const strToCompare = `${a}${b}`
        if (!a.includes(b)) reduced.push(strToCompare)
        if (a.includes(b)) {
            const subStr = a.substring(a.lastIndexOf(split[index]))
            reduced.push(subStr)
            return subStr
        }
        return strToCompare
    })

    const result = reduced.reduce((a, b) => a.length > b.length ? a : b).length
    const result2 = reduced.reduce((a, b) => a.length > b.length ? a : b)
    console.log('STRING IS: ', result2)

    return result
}

lengthOfLongestSubstring('pwwkewwertyuiiiicderty');
