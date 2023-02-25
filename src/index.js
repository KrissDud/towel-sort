
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let arr = [];
  if(!matrix){
    return arr;
  }else
  if( matrix.length === 0){
    return arr;
  }else{
    return matrix.reduce(function(accumulator, currentValue, index){
      let x = ((index % 2) ? currentValue.reverse() : currentValue );
      return accumulator.concat(x);
    },arr)
  }
  }
