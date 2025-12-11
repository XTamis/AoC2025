const fs = require('fs');

function zeroPasses(pointer, direction, clicks) {
    let count = 0;

    for (let i = 0; i < clicks; i++) {
        pointer = direction === 'R'
            ? (pointer + 1) % 100
            : (pointer - 1 + 100) % 100;

        if (pointer === 0) count++;
    }

    return count;
}

function zeroPoint(pointer) {
    return pointer === 0 ? 1 : 0;
}

function rotate(pointer, direction, clicks) {
    if (direction === 'R') {
        return (pointer + clicks) % 100;
    } else {
        return (pointer - clicks + 100) % 100;
    }
}

function partOne(data) {
    let pointer = 50;
    let zeroPointer = 0;

    for (const line of data) {
        const direction = line[0];
        const clicks = Number(line.slice(1));

        pointer = rotate(pointer, direction, clicks);
        zeroPointer += zeroPoint(pointer);
    }

    return zeroPointer;
}

function partTwo(data) {
    let pointer = 50;
    let zeroPointer = 0;

    for (const line of data) {
        const direction = line[0];
        const clicks = Number(line.slice(1));

        zeroPointer += zeroPasses(pointer, direction, clicks);
        pointer = rotate(pointer, direction, clicks);
    }

    return zeroPointer;
}

fs.readFile('input.txt', 'utf8', (err, content) => {
    if (err) {
        console.error('Error reading input:', err);
        return;
    }

    const data = content.split('\n').filter(Boolean);

    console.log("Part One:", partOne(data));
    console.log("Part Two:", partTwo(data));
});