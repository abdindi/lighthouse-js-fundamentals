function lastIndexOf(list, num){
  var indices = [];
  for (i = 0; i < list.length; i++) {
    if (num == list[i]) {
      indices.push(i)
    }
  }
  if (indices.length == 0) {
   return -1
  }
  else {
     return Math.max(...indices)
  }
}
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1), "=?", 3);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2), "=?", 4);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3), "=?", -1);
console.log(lastIndexOf([ 5, 5, 5 ], 5), "=?", 2);
console.log(lastIndexOf([], 3), "=?", -1);