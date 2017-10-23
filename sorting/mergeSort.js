var mergeSort = function (array) {
    //Base Case 
   if (array.length <= 1) {
      return array;
   }
    
    //Divide and conquer
    var leftHalf = array.slice(0, array.length/2);
    var rightHalf = array.slice(array.length/2);
    var leftSorted = mergeSort(leftHalf);
    var rightSorted = mergeSort(rightHalf);
    
    //Merge subarrays
    return merge(leftSorted, rightSorted);
};

function merge (left, right) {
    var result = [], leftPtr = 0, rightPtr = 0;
    
    while (result.length < (left.length + right.length)) {
        
        //if all elements in the left have been added then add remaining right elements
        if (left.length === leftPtr) {
            result = result.concat(right.slice(rightPtr));
        }
        //if all elements in the right have been added then add remaining left elements
        else if (right.length === rightPtr) {
            result = result.concat(left.slice(leftPtr));
        }
        //compare elements in subarrays and add lower of the two
        else if (left[leftPtr] <= right[rightPtr]){
            result.push(left[leftPtr++]);
        } else {
            result.push(right[rightPtr++]);
        }
    }
    return result;
}

//Test the code
mergeSort([5, 2, 0, 6, 3, 4, 1]);