Object.prototype.myFromEntries = function () {
  const obj = {};
  for (const [key, value] of this) {
    obj[key] = [value];
  }
  return obj;
}

const entries = [
  ['a', 1],
  ['b', 2],
  ['c', 3],
  ['a', 4],
];

console.log('entries', entries.myFromEntries());

export default myFromEntries;