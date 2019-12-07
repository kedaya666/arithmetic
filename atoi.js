/*
* 请你来实现一个 atoi 函数，使其能将字符串转换成整数
* 输入: "4193 with words"
 输出: 4193
 解释: 转换截止于数字 '3' ，因为它的下一个字符不为数字。
* */
let myAtoi = function(str) {
    let newStr = str.replace(/(^\s*)|(\s*$)/g, "");
    if(isNaN(newStr[0]) && newStr[0] !== "-" && newStr[0] !== "+"){
        return 0;
    }else{
        if((newStr[0] === "-" || newStr[0] === "+") && newStr.length<=1) return 0;
        let fistWorl = "",allWorld='',floatNum=0;
        if(newStr[0] ==="-"){
            fistWorl = "-";
            newStr = newStr.slice(1);
        }else if(newStr[0] ==="+"){
            newStr = newStr.slice(1);
        }
        if(isNaN(newStr[0]) || newStr[0] ===" ") return 0;
        for(let i=0;i<newStr.length;i++){
            if(!isNaN(newStr[i]) && newStr[i] !=" "){
                allWorld +=newStr[i]
            }else{
                floatNum = Number(fistWorl+allWorld);
                if(floatNum<(0-Math.pow(2,31))){
                    return 0-Math.pow(2,31)
                }else if(floatNum>(Math.pow(2,31)-1)){
                    return Math.pow(2,31)-1
                }else{
                    return floatNum
                }
            }
        };
        floatNum = Number(fistWorl+allWorld);
        if(floatNum<(0-Math.pow(2,31))){
            return 0-Math.pow(2,31)
        }else if(floatNum>(Math.pow(2,31)-1)){
            return Math.pow(2,31)-1
        }else{
            return floatNum
        };
    }
};