var isPalindrome = function(x) {
    let num = x;
    let strNum = num.toString();
    let rev = strNum.split('').reverse().join('');
    console.log(rev);
    return rev.toString() === x.toString();
};

console.log(isPalindrome(121))