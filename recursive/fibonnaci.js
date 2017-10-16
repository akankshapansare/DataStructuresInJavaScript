//O(2^n)
function fibonacci (num) {
    if(num === 0 || num === 1){
       return num 
    } else {
        return fibonacci(num - 1) + fibonacci(num - 2);
    }
}
fibonacci(10);

//O(1)
//(phi)^n / sqrt(5) ---- phi = (1+sqrt(5))/2
function fibonacciFormula (num) {
 
        return Math.round(Math.pow(((1 + Math.sqrt(5))/2), num)/Math.sqrt(5));
}

fibonacciFormula(10);


// O(n) implementation using dynamic programming
function fibonnaciDP (n) {
  var memo = {
    0: 0,
    1: 1
  };
  function recurse(m) {
    if (memo[m] === undefined) {
      memo[m] = recurse(m-1) + recurse(m-2);
    }
    return memo[m];
  }
  return recurse(n);
}

fibonnaciDP(10);
