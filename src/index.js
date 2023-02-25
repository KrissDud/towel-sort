
// You should implement your task here.

module.exports = function towelSort (matrix) {
  return matrix.reduce(function(accumulator, currentValue, index){
    let x = ((index % 2) ? currentValue.reverse() : currentValue );
    return accumulator.concat(x);
  },[])}
