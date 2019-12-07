/*
* 给定一个字符串 s，找到 s 中最长的回文子串。你可以假设 s 的最大长度为 1000。
* 输入: "babad"
*输出: "bab"
*注意: "aba" 也是一个有效答案。
* */
function makeOdd(str){
    var len = str.length;
    if(len % 2 === 1){
        return str;
    }
    var newStr = '#';
    for(i = 0;i<len;i++){
        newStr += str[i]+'#';
    }
    return newStr;
}
function judge(str){
    (str.length%2 === 0) && (str = makeOdd(str));
    var len = str.length,
        half = Math.floor(len/2),
        last = len-half;
    var i = 0;
    while(i<=last){
        if(str[half-i] !== str[half+i]){
            return false;
        }
        i++;
    }
    return true;
}
function getAllSubs(str){
    var len = str.length,
        res = [];
    for(var i = 0;i<len;i++){
        for(var j = i;j<len;j++){
            var sub = str.substring(i,j+1);
            if(sub && judge(sub)){
                res[res.length] = sub;
            }
        }
    }
    return res;
}
//console.log(getAllSubs('abaac'));

function getP3(str) {
    var maxLength = 1,
        start = 0,
        len = str.length,
        low, high;
    for (var i = 1; i < len; ++i) {
        low = i - 1;
        high = i;
        while (low >= 0 && high < len && str[low] === str[high]) {
            if (high - low + 1 > maxLength) {
                start = low;
                maxLength = high - low + 1;
            }
            --low;
            ++high;
        }
    }
    low = i - 1;
    high = i + 1;
    while (low >= 0 && high < len && str[low] === str[high]) {
        if (high - low + 1 > maxLength) {
            start = low;
            maxLength = high - low + 1;
        }
        --low;
        ++high;
    }
    return maxLength;
}
//console.log(getP3('abaac'));
let str = "babad";
let longestPalindrome = function(s) {
    let arr = [];
    let arrMax = "";
    if(s.length<=1) return s;
    if(s.length>1000) return false;
    for(let i=0;i<s.length;i++){
        for(let j=i+1;j<=s.length;j++){
            let childStr = s.substring(i,j);
            let len = childStr.length;
            let double = true;
            if(len>1){
                if(childStr.length%2 == 0){
                    let flagA = len/2;
                    let lenB = len;
                    let i=0;
                    while(i<flagA){
                        lenB = lenB-1;
                        if(childStr.charAt(i)!=childStr.charAt(lenB)){
                            double = false;
                            break;
                        }
                        i++;
                    }
                }else{
                    let flagB = Math.floor(len/2);
                    let flagL = flagB;
                    let flagR = flagB;
                    while(flagL>0){
                        flagL = flagL-1;
                        flagR = flagR+1;
                        if(childStr.charAt(flagL) != childStr.charAt(flagR)){
                            double = false;
                            break;
                        }
                    }
                }
            };
            if(double){
                arr.push(childStr);
                if(arrMax.length<childStr.length){
                    arrMax = childStr;
                }
            }
        }
    }
    return arrMax
};

/*console.log(longestPalindrome(str));*/
var longestPalindrome = function (s) {
    var t = s.split("").join("#");
    var c = 1, e = 0, cs = 0;
    t = "~" + t + "#";
    for (var j = 1, lenj = t.length - 1; j < lenj; j++, c = 1) {
        while (t[j + c] === t[j - c]){
            c++;
        }
        if (c > e) {
            e = c;
            cs = j;
        }

    }
    var result = t.slice(cs - e + 1, cs + e).replace(/#/g, "").replace(/~/g, "");
    return result;
};
console.log(longestPalindrome(str));