const collectStats = (arr) => {
    const obj = {};
    arr.forEach((char) => {
        if (obj[char]) {
        obj[char]++;
        } else {
        obj[char] = 1;
        }
    });
    return obj;
}

console.log(collectStats(['a', 'b', 'c', 'a', 'b', 'c', 'd', 'f']));


const arry = [1, 2, 3, 4];

// array of strings
const arrOfStrings = ['a', 'b', 'c', 'a', 'b', 'c', 'd'];

const obj = {'a': [0, 3], 'b': [1, 4], 'c': [2, 5], 'd': [6]};

console.log('arrayOfString', arrOfStrings.reduce(function(acc, curr) {
 acc[curr] = (acc[curr] || 0) + 1;
 return acc;
}, {}));