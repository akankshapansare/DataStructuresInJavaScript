//Write a function 'recursiveMultiplier' that takes two arguments, 'arr and num', and multiplies each arr value into by num and returns an array of the values.

var recursiveMultiplier = function (arr, num) {
  if(arr.length === 0){
      return arr;
  } else {
      var lastElement = arr.pop();
      recursiveMultiplier(arr, num);
      arr.push(lastElement * num);
      return arr;
  }
};
recursiveMultiplier([1,2,3], 3);