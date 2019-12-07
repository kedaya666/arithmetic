/*
* 给出一个 32 位的有符号整数，你需要将这个整数中每位上的数字进行反转
* */
let reverse = function(x) {
    if(x<(0-Math.pow(2,31)) || x>(Math.pow(2,31)-1)) return 0;
    let reArr =x.toString().split('');
    let resArr;
    if(isNaN(reArr[0])){
        resArr = reArr[0]+reArr.slice(1).reverse().join('');
    }else{
        resArr = reArr.reverse().join('');
    }
    if(Number(resArr)<(0-Math.pow(2,31)) || Number(resArr)>(Math.pow(2,31)-1)) return 0;
    return Number(resArr)
};
console.log(reverse(1534236469));