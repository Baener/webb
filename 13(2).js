var swapItems = function (firstIndex, secondIndex) {
  var swap = numbers[firstIndex];
  numbers[firstIndex] = numbers[secondIndex];
  numbers[secondIndex] = swap;
}

for (var j = 0; j < numbers.length - 1; j ++) {
  var minValue = numbers[j];
  var minValueIndex = j;

  for (var i = j + 1; i < numbers.length; i ++) { 
    if (numbers[i] < minValue) {
     minValue = numbers[i];
     minValueIndex = i; 
    } 
  }

  if (j != minValueIndex) {
    swapItems(j, minValueIndex);
  } 
}

console.log(numbers);