function looper(arr) {
  var mySum = 0;

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0 || arr[i] >= 100) {
      mySum += arr[i];
    }
  }
  return mySum;
}
