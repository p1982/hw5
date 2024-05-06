// Task 1: Advanced Array Filtering

function customFilterUnique(array, callback) {
    if (!Array.isArray(array) || typeof callback !== 'function') {
        throw new Error('Invalid arguments. Expected an array and a callback function.');
    }
    const nameSet = new Set();
    const uniqueNames = [];
    array.forEach(item => {
        const name = callback(item);
        if (!nameSet.has(name)) {
            nameSet.add(name);
        } else {
            nameSet.delete(name)
        }
    });
    return [...nameSet];
}

// Example usage:
const data = [
    { name: 'Tomas' },
    { name: 'Tomas' },
    { name: 'Ilya' },
    { name: 'Alexandrina' }
];

const uniqueNames = customFilterUnique(data, item => item.name);
console.log(uniqueNames); // Output: []

// Task 2: Array Chunking

function chunkArray(array, chunkSize) {
    if (!Array.isArray(array)) {
        throw new Error('The first argument must be an array.');
    }

    if (!Number.isInteger(chunkSize) || chunkSize <= 0) {
        throw new Error('The second argument must be a positive integer.');
    }

    const chunkedArray = [];
    for (let i = 0; i < array.length; i += chunkSize) {
        chunkedArray.push(array.slice(i, i + chunkSize));
    }
    return chunkedArray;
}

// Example usage:
const arrayToChunk = [1, 2, 3, 4, 5, 6, 7, 8];
const chunkedArray = chunkArray(arrayToChunk, 3);
console.log(chunkedArray); // Output: [[1, 2, 3], [4, 5, 6], [7, 8]]


// Task 3: Array Shuffling

function customShuffle(array) {
    if (!Array.isArray(array)) {
        throw new Error('Invalid arguments. Expected an array and a callback function.');
    }
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    // let temp = null;
    // let arrayLength = shuffledArray.length;
    // let random = null
    // while(arrayLength){
    //     arrayLength--;
    //     random = Math.floor(Math.random() * arrayLength)
    //     temp = shuffledArray[random]
    //     shuffledArray[random] = shuffledArray[arrayLength]
    //     shuffledArray[arrayLength] = temp
    // }
    return shuffledArray;
}

// Example usage:
const arrayToShuffle = [1, 2, 3, 4, 5];
const shuffledArray = customShuffle(arrayToShuffle);
console.log(shuffledArray); // Output: [4, 1, 5, 3, 2]

// Task 4: Array Intersection and Union

function getArrayIntersection(arr1, arr2) {
    if (!Array.isArray(arr1)  || !Array.isArray(arr2)) {
        throw new Error('Invalid arguments. Expected an array and a callback function.');
    }

    const set1 = new Set(arr1);
    const intersection = arr2.filter(item => set1.has(item));
    // const intersection = arr2.filter(item => arr1.includes(item));
    return intersection;
}

function getArrayUnion(arr1, arr2) {
    if (!Array.isArray(arr1)  || !Array.isArray(arr2)) {
        throw new Error('Invalid arguments. Expected an array and a callback function.');
    }
    return  [...new Set([...arr1, ...arr2])];
}

// Example usage:
const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];

const intersection = getArrayIntersection(array1, array2);
console.log('Intersection:', intersection); // Output: [3, 4, 5]

const union = getArrayUnion(array1, array2);
console.log('Union:', union); // Output: [1, 2, 3, 4, 5, 6, 7]

// Task 5: Array Performance Analysis

function measureArrayPerformance(func, array) {
    if (!Array.isArray(array) || typeof func !== 'function') {
        throw new Error('Invalid arguments. Expected an array and a callback function.');
    }

    const startTime = performance.now();
    func(array);
    const endTime = performance.now();
    return endTime - startTime;
}

// Example usage:
const testArray = Array.from({ length: 100000 }, (_, index) => index + 1);


const mapExecutionTime = measureArrayPerformance(array => array.map(item => item * 2), testArray);
console.log('Map execution time:', mapExecutionTime, 'milliseconds');

const chunkExecutionTime = measureArrayPerformance(chunkArray, testArray, 1000);
console.log('Chunk execution time:', chunkExecutionTime, 'milliseconds');