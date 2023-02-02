function revertString(str) {
    const specialChars = [',', '!', '...', '.', ':', ';', '%']
    const letters = str.split('').reverse();

    // special conditions
    const isFirstCharSpecial = specialChars.includes(letters[0]);
    const startsWithCapital = str[0] === str[0].toUpperCase();
    const allCapital = letters.map(l => l === l.toUpperCase()).filter(b => !b).length === 0;

    // handle conversion of the case
    const convertCase = (startsWithCapital, hasDots, specialFirst) => {
        if (allCapital) return;
        if (!startsWithCapital) return;
        if (hasDots) {
            letters[3] = letters[3].toUpperCase();
            letters[letters.length - 4] = letters[letters.length - 4].toLowerCase();
            return;
        }

        if (specialFirst) {
            letters[1] = letters[1].toUpperCase();
            letters[letters.length - 2] = letters[letters.length - 2].toLowerCase();
            return;
        }

        letters[0] = letters[0].toUpperCase();
        letters[letters.length - 1] = letters[letters.length - 1].toLowerCase();
        return;
    }

    if (isFirstCharSpecial) {
        const isFirstCharThreeDots = letters[0] + letters[1] + letters[2] === '...';
        // cover the case for three dots
        if (isFirstCharThreeDots) {
            letters.push(letters[0], letters[1], letters[2]);
            letters[0] = '', letters[1] = '', letters[2] = '';
            convertCase(startsWithCapital, isFirstCharThreeDots, false);
        } else {
            letters.push(letters[0]);
            letters[0] = '';
            convertCase(startsWithCapital, false, isFirstCharSpecial);
        }
    } else {
        convertCase(startsWithCapital, false, false);
    }

    // check if there are specialchars in the reversed str
    for (let i = 0; i < letters.length; i++) {
        const whitespaceAfter = letters[i + 1] === ' ';
        const item = specialChars.includes(letters[i]);

        if (item && letters[i - 1] === ' ') {
            letters[i - 1] = letters[i];
            letters[i] = ' ';
        }

        // handle words in the string with capital chars
        if (!allCapital && !item && letters[i] === letters[i].toUpperCase() && whitespaceAfter) {
            letters[i] = letters[i].toLowerCase();
            for (let k = i; k >= 0; k--) {
                if (letters[k - 1] === ' ') {
                    letters[k] = letters[k].toUpperCase();
                    break;
                }
            }
        }
    }

    return letters.join('');
}

revertString('Here is the explanation: Bla, bla bla bla...');
