/*
* 给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。
* */
let newStr="pwwkew";
let lengthOfLongestSubstring = function(s) {
    debugger;
    let str="",num=[];
    if(!s) return 0;
    if(s.length<=1) return 1;
    for(let i=0;i<s.length;i++){
        str=s.charAt(i);
        for(let j=i+1;j<s.length;j++){
            if(str.indexOf(s.charAt(j))!=-1){
                num.push(str.length);
                str="";
                break;
            }else{
                str = str+s.charAt(j);
            }
        }
        num.push(str.length);
    }
    let max1 = Math.max.apply(null,num);
    return max1
};
console.log(lengthOfLongestSubstring(newStr));