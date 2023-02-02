// this code will work with even a weird string like this "asdDFE---_____mka12____     oertUYW"
function spinalCase(str) {
    const words = str.match(/[^_ -]+/g)
    const hasSpaceOrUnderS = str.match(/[ _]/g)
    // if no space or underscore is present
    if (!hasSpaceOrUnderS) {
        const lets = []
        str.split('').map((letter, index) => {
            letter === letter.toUpperCase() ? lets.push(`-${letter.toLowerCase()}`) : lets.push(letter)
        })
        return lets.join('')
    }
    // if there is a word in the words array like "AllThe", this loop will handle it
    words.map((word, index) => {
        const cond = word.match(/[A-Z]/g)
        if (cond && word.includes(cond[1])) {
            const condInx = word.indexOf(cond[1])
            words[index] = `${word.slice(0, condInx)}-${word.slice(condInx)}`
        }
    })
    return words.join('-').toLowerCase()
}

spinalCase("AllThe-small Things");

/*
    THOUGH THE SOLUTION IN FCC IS WAY MORE NEATER AND CLEANER, IT WILL NOT FUNCTION WITH WEIRD STRINGS -- LIKE THE ONE ABOVE

    However, the overpowered side of the FCC's solution is that it is mindblowing:
    ```str = str.replace(/([a-z])([A-Z])/g, "$1 $2")``` ("$n")

    This code will place a whitespace whenever it finds an uppercase character in a string and the second argument tells, that,
    inside the Regex, take the substring of the PARENTHESIZED STRINGS. So, second argument is actually the character at the 
    regexParenthesis[1 and 2] indexes and you can place whatever you want in between them..
    The integer value has to be like this:0 > $n < 100, for that code to work.
*/