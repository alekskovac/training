Array.prototype.myAwesomeSuperCoolMap = function (callbackFn) {
    let newArr = [];
    for (let i = 0; i < this.length; i++) {
      newArr.push(callbackFn(this[i], i, this));
    }
    return newArr;
  }

  const arr = [1, 2, 3, 4];
  console.log('myAwesomeSuperCoolMap', arr.myAwesomeSuperCoolMap((x) => x + 1));
  console.log('arr sum', arr.reduce((previousValue, currentValue) => previousValue + currentValue, 0));

Array.prototype.myAwesomeSuperCoolReduce = function (callbackFn, previousValue) {
    for (let i = 0; i < this.length; i++) {
      previousValue = callbackFn(previousValue, this[i], i, this);
    }
    return previousValue;
  }
  const array = [1, 2, 3, 5, 8, 13];
  console.log('myAwesomeSuperCoolReduce', array.myAwesomeSuperCoolReduce((previousValue, currentValue) => previousValue * currentValue, 1));
  console.log('concat', array.reduce((previousValue, currentValue) => `${previousValue}${currentValue}`));

  const callback = (previousValue, currentValue) => {
    return previousValue + currentValue;
  }
 console.log('array sum', array.reduce(callback));

 //function collectStats(arr) {
 // 

 // reduce array and return object
 // write tests in jest