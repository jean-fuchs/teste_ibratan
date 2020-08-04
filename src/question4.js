function question4(num = 20) {
  var arr = [0, 1];

  for (var i = 2; i < num; i++) {
    arr.push(arr[i - 2] + arr[i - 1]);
  }

  return arr;
}

export default question4;
