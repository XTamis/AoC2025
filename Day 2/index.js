const fs = require('fs');

let total = 0;

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

            const firstHalf = stringDigit.slice(0, stringDigit.length / 2);
            const secondHalf = stringDigit.slice(stringDigit.length / 2, stringDigit.length)

            if (firstHalf === secondHalf) {
                total += digit;
                console.log("INVALID: " + digit);
            }
        }
    }));

    console.log(total);
});
