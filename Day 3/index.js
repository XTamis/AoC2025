const fs = require('fs');

let total = 0;

fs.readFile('input.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }
    const inputArr = data.split('\n').filter(item => item);

    inputArr.forEach((bank => {
        let firstLargest = 0;
        let secondLargest = 0;

        for (let x = 0; x < bank.length; x++) {
            if (bank[x] > firstLargest && x != bank.length - 1) {
                firstLargest = bank[x];
                secondLargest = 0;
            } else if (bank[x] > secondLargest) {
                secondLargest = bank[x];
            }
        }

        totalNumber = firstLargest + secondLargest;
        total += Number(totalNumber);
    }));

    console.log(total);
});
