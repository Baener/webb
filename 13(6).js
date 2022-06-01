function bench(f, times) {
  var d = new Date();
  for (var i = 0; i < times; i++) f(["name", "growth", "weight", "age"], [
    ["Пётр", "165", "70"],
    ["Василий", "170"],
    ["Светлана"],
    [, , , , , , , , ]
  ]);
  return new Date() - d;
}

const var1 = function(keysArray, arrayOfDataArrays) {
  let array = [];
  for (let i = 0; i < arrayOfDataArrays.length; i++) {
    let obj = {};
    for (let j = 0; j < keysArray.length; j++) {
      if (arrayOfDataArrays[i][j]) {
        obj[keysArray[j]] = arrayOfDataArrays[i][j];
      }
    }
    array.push(obj);
  }
  return array;
}
const var2 = function(keysArray, arrayOfDataArrays) {
  let arr = [];
  for (let i = 0; i < arrayOfDataArrays.length; i++) {
    arr[i] = {};
    for (let j = 0; j < keysArray.length && arrayOfDataArrays[i][j]; j++) {
      arr[i][keysArray[j]] = arrayOfDataArrays[i][j];
    }
  }
  return array;
}

const var3 = (keys, data) => data.map(item => item = keys.reduce(
  (acc, cur, i) => {
    item[i] ? acc[cur] = item[i] : null;
    return acc;
  }, {}));


function log(msg) {
  alert(msg);
}


log('var1: ' + bench(var1, 10000));
log('var2: ' + bench(var2, 10000));
log('var3: ' + bench(var3, 10000));