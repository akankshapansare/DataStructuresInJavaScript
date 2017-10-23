var bubbleSort = function (array) {
    
    var length = array.length;
    
    while (length >= 0) {
        for (var i = 0; i < length; i++) {
            if (array[i] > array[i+1]) {
                var temp = array[i+1];
                array[i+1] = array[i];
                array[i] = temp;
            }
        }
        
        length--;
    }
    return array;
};

//Text the code
bubbleSort([1, 5, 3, 2]);