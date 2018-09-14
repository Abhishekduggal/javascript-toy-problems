function findOddNumber(arr) {
  var result;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 1) {
      result = arr[i];
      break;
    }
  }
  return result;
}

function Negative(arr) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < 0) continue;
    console.log(arr[i]);
  }
}
