/*
* 判断一个整数是否是回文数。回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。
* */
const isPalindrome = function(x) {
    let t = x.toString().split("").join("#");
    let i = j = Math.floor(t.length/2);
    while(i!== 0){
        if(t[i-1] !== t[j+1]) return false;
        i--;
        j++;
    }
    return true;
};
console.log(isPalindrome(1221));