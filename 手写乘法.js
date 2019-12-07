/*
* 给定两个以字符串形式表示的非负整数 num1 和 num2，返回 num1 和 num2 的乘积，它们的乘积也表示为字符串形式。
* 输入: num1 = "2", num2 = "3"
 输出: "6"
* */
var multiply = function(num1, num2) {
    if(num1 == '0' || num2 == '0') return '0';
    var res = new Array(num1.length+num2.length);
    for(var l=0; l<res.length; l++) {
        res[l] = 0;
    }
    // 分割翻转
    num1 = num1.split("").reverse();
    num2 = num2.split("").reverse();
    for(var i=0; i<num1.length; i++) {
        for(var j=0; j<num2.length; j++) {
            res[i+j] += num1[i]*num2[j];
        }
    }
    var carry = 0;
    var str = [];
    for(var l=0; l<res.length; l++) {
        res[l] += carry;
        carry = (res[l]/10) >> 0;
        res[l] = res[l] % 10;
        str[l] = res[l];
    }
    str = str.reverse().join('');
    // 去除结果字符串开头的0
    var index = -1;
    for(var i=0; i<str.length; i++) {
        if(str[i] == '0') index = i;
        else break;
    }
    return index < 0 ? str : str.substr(index+1);
};
var multiply = function(num1, num2){
    if(num1 == "0" || num2 == "0")return "0";
    let len = num1.length+num2.length;
    let big,small;
    let arr = new Array(len),list = new Array(len);
    for(let i=0;i<len;i++){
        arr[i] = 0;
    };
    if(Number(num1)>Number(num2)){
        big=num1.split("").reverse();
        small=num2.split("").reverse();
    }else{
        big=num2.split("").reverse();
        small=num1.split("").reverse();
    }
    let decade =0,unit = 0;
    for(let j=0;j<small.length;j++){
        for(let i=0;i<len;i++){
            list[i] = 0;
        };
        for(let k=0;k<big.length;k++){
            unit = big[k]*small[j]+decade>=10?(big[k]*small[j]+decade)%10:big[k]*small[j]+decade;
            if(k==big.length-1){
                if((big[k]*small[j]+decade)>=10){
                    list[j+k+1]=parseInt((big[k]*small[j]+decade)/10)
                }
            }
            list[j+k] = unit;
            decade = big[k]*small[j]+decade>=10?parseInt((big[k]*small[j]+decade)/10):0;
        }
        decade =0;
        unit = 0;
        for(let y=0;y<len;y++){
            unit = list[y]+arr[y]+decade>=10?(list[y]+arr[y]+decade)%10:list[y]+arr[y]+decade;
            decade = list[y]+arr[y]+decade>=10?parseInt((list[y]+arr[y]+decade)/10):0;
            arr[y] = unit;
        }
    }
    arr = arr.reverse();
    for(let g=0;g<arr.length;g++){
        if(arr[g] != 0){
            arr = arr.slice(g);
            break
        }
    }
    return arr.join("");
};
let a="98",b="89";
console.log(multiply(a,b));