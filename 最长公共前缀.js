/*
* 编写一个函数来查找字符串数组中的最长公共前缀。
 如果不存在公共前缀，返回空字符串 ""。
 输入: ["flower","flow","flight"]
 输出: "fl"
* */
const longestCommonPrefix = function(strs) {
    if(strs.length<1) return "";
    if(strs.length===1) return strs[0];
    let publicStr="",l=0,publicA=strs[0],publicB=strs[1];
    if(publicA[0] !== publicB[0]) return publicStr;
    for(let i=1;i<=publicA.length;i++){
        if(publicA.slice(0,i)===publicB.slice(0,i)){
            l=i;
        }
    };
    if(l<1) return publicStr;
    publicStr = publicA.slice(0,l);
    for(let j=2;j<strs.length;j++){
        let currentStr = strs[j];
        for(let k=publicStr.length-1;k>=0;k--){
            if(publicStr[k] !== currentStr[k]){
                l--;
            }
        }
        publicStr = publicStr.slice(0,l);
    }
    return publicStr;
};
console.log(longestCommonPrefix(["a","a","b"]));