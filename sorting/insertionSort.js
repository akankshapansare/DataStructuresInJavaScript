var insertionSort = function (array) {
  var length = array.length;
  
  for(var i = 1; i < length; i++) {
    var temp = array[i];
    for(var j = i - 1; j >= 0 && array[j] > temp; j--) {
      array[j+1] = array[j];
    }
    array[j+1] = temp;
  }
  
  return array;
};

//Test the code
insertionSort([3, 1, 9, 5]);