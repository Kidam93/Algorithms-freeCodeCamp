function diffArray(arr1, arr2) {
  var newArr = [];

  function func(one, two) {
    for (var i = 0; i < one.length; i++) {
      if (two.indexOf(first[i]) === -1) {
        newArr.push(first[i]);
      }
    }
  }

  func(arr1, arr2);
  func(arr2, arr1);

  return newArr;
}

// diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);