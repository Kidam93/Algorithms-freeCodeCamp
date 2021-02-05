function largestOfFour(arr) {
  const results = [];
  for (let n = 0; n < arr.length; n++) {
    const largestNumber = arr[n][0];
    for (let ns = 1; ns < arr[n].length; ns++) {
      if (arr[n][ns] > largestNumber) {
        largestNumber = arr[n][ns];
      }
    }
    results[n] = largestNumber;
  }
  return results;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);