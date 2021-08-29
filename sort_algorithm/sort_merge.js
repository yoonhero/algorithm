const mergeValue = [];
function mergeSort(array) {
  if (array.length < 2) {
    return array
  }
  let pivot = Math.floor(array.length / 2);
  let left = array.slice(0, pivot)
  let right = array.slice(pivot, array.length);
  return merge(mergeSort(left), mergeSort(right))
}
function merge(left, right) {
  let result = [];
  while (left.length && right.length) {
    if (left[0].num <= right[0].num) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }
  mergeValue.push(result.concat(left, right));
  console.log(mergeValue);
  return result.concat(left, right);
}
mergeSort([4, 3, 6, 3, 2, 1, 4, 5]);
