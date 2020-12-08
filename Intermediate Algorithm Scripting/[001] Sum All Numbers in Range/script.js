function sumAll(arr) {
  let first;
  let last;
  let max;
  let min;
  let i;
  let add = 0;
  first = arr.shift();
  last = arr.pop();
  min = first;
  max = last;
  if(last <= first){
    min = last;
    max = first;
  }
  for(i = min + 1; i < max; i++){
    add = add + i;
  }
  return first + last + add;
}

// sumAll([1, 4]);
// sumAll([4, 1]);