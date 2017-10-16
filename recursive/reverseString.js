function reverse(str){
    if(str.length === 0){
        return '';
    } else {
        return str[str.length - 1] + reverse(str.substr(0, str.length - 1));
    }
}

console.log(reverse('abcd'));