const fs = require('fs');

let total = 0;
let lastAdded = 0;

fs.readFile('input.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }
    const inputArr = data.split(',').filter(item => item);

    inputArr.forEach((code => {
        const components = code.split('-').map(Number);

        for (let digit = components[0]; digit <= components[1]; digit++) {
            const stringDigit = String(digit);

            for (let division = 2; division <= stringDigit.length; division++) {
                if (lastAdded === digit) {
                    continue;
                }

                const divided = stringDigit.length / division;

                if (Number.isInteger(divided)) {
                    let parts = [];
                    for (let i = 0; i < stringDigit.length; i += divided) {
                        parts.push(stringDigit.slice(i, i + divided));
                    }

                    if (parts.every(v => v === parts[0])) {
                        total += digit;
                        lastAdded = digit;
                    }
                }
            }
        }
    }));

    console.log(total);
});
