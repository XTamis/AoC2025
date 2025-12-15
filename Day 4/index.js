const fs = require('fs'); 

let total = 0;
let indexToReplace = [];

fs.readFile('input.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }

    const inputArr = data.split('\n').filter(item => item);

    function countRolls() {
        for (let row = 0; row < inputArr.length; row++) {
            for (let col = 0; col < inputArr[row].length; col++) {
                let counter = 0;

                if (inputArr[row][col] !== '@') {
                    continue;
                }

                for (let rowsToCheck = -1; rowsToCheck <= 1; rowsToCheck++) {
                    for (let colsToCheck = -1; colsToCheck <= 1; colsToCheck++) {
                        const currentRow = row + rowsToCheck;
                        const currentCol = col + colsToCheck;
                        const valueToCheck = inputArr[currentRow]?.[currentCol];

                        if (valueToCheck !== undefined && valueToCheck === '@') {
                            if (currentRow === row && currentCol === col) {
                                continue;
                            }

                            counter++;

                            if (counter >= 4) {
                                break;
                            }
                        }
                    }
                }

                if (counter < 4) {
                    total++;
                    indexToReplace.push({row, col});
                }
            }
        };
    }

    countRolls();

    while (indexToReplace.length != 0) {
        indexToReplace.forEach(index => {
            inputArr[index.row] = replaceChar(inputArr[index.row], index.col);
        });

        indexToReplace = [];
        countRolls();
    }

    console.log(total);
});

function replaceChar(orgRow, index) {
    let firstPart = orgRow.substr(0, index);
    let lastPart = orgRow.substr(index + 1);

    let newRow = firstPart + "." + lastPart;

    return newRow;
}