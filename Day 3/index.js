const fs = require('fs');

let total = 0;

fs.readFile('input.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }

    const inputArr = data.split('\n').filter(item => item);

    inputArr.forEach(bank => {
        const batteryAmount = 12;
        const batteryArr = Array(batteryAmount).fill(null);

        let filled = 0;
        let toRemove = bank.length - batteryAmount;

        for (let x = 0; x < bank.length; x++) {
            const digit = bank[x];

            while (
                filled > 0 &&
                toRemove > 0 &&
                batteryArr[filled - 1] < digit
                ) {
                filled--;
                toRemove--;
            }

            if (filled < batteryAmount) {
                batteryArr[filled] = digit;
                filled++;
            } else {
                toRemove--;
            }
        }

        total += Number(batteryArr.join(""))
    });
    console.log(total);
});