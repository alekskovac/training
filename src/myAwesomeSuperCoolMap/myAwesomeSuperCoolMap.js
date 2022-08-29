Array.prototype.myAwesomeSuperCoolMap = function (callbackFn) {
    let newArr = [];
    for (let i = 0; i < this?.length; i++) {
      newArr.push(callbackFn(this[i], i, this));
    }
    return newArr;
  }

  const arr = [1, 2, 3, 4];
  console.log('myAwesomeSuperCoolMap', arr.myAwesomeSuperCoolMap((x) => x + 1));
  console.log('arr sum', arr.reduce((previousValue, currentValue) => previousValue + currentValue, 0));

export default Array.prototype.myAwesomeSuperCoolMap;