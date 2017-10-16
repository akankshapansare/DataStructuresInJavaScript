var loopNtimes = function(n){
    console.log('n equals', n);
    
    if(n <= 1){
        return 'complete';
    }
    return loopNtimes(n-1);
};

loopNtimes(3);