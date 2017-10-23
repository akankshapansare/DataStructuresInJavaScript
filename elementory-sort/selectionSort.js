var selectionSort = function (array) {
  
    var length = array.length;
    
    for (var i = 0; i < length; i++) {
        var min = i;
        for (var j = i+1; j < length; j++) {
            if (array[j] < array[min]) {
                min = j;
            }
        }
        
        if (min != i) {
            var temp = array[i];
            array[i] = array[min];
            array[min] = temp;
        }
    }
    
    return array;
};

//Test the code
selectionSort([7, 1, 3, 8]);