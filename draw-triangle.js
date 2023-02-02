const draw = (symbol, numOfLines) => {
    let str = ''
    // k is the number of occurences of the symbol in one row
    for (let i = 0, k = 1; i <= numOfLines, k < numOfLines + 1; i++, k++) {
        str += `${symbol.repeat(k)}${'\n'}`
    }
    console.log(str)
    return str
}

draw('*', 5);
