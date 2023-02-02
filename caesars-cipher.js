// One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher.
// In a shift cipher the meanings of the letters are shifted by some set amount.
// A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places.
// Thus A ↔ N, B ↔ O and so on.

// Write a function which takes a ROT13 encoded string as input and returns a decoded string.
// All letters will be uppercase.Do not transform any non - alphabetic character(i.e.spaces, punctuation), but do pass them on.
// ------------------------------------------------------------------------------------------------------

function rot13(str) {
    const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
    const split = str.split('')
    split.map((wordLetter, wordIndex) => {
        letters.includes(wordLetter) && letters.map((letter, letterIndex) => {
            if (letter == wordLetter) {
                letters[letterIndex - 13]
                    ? split[wordIndex] = letters[letterIndex - 13]
                    : split[wordIndex] = letters[letterIndex + 13]
            }
        })
    })
    console.log(split.join(''))
    return split.join('')
}

rot13("ZNXRF AB FRAFR V XABJ");
