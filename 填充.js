/*  用给定的字符串填充已知字符串到给定的长度，如果没有给定字符串则用“ ”
*   示例：
*   padLeft('abc', 10);         // '       abc'
*   padLeft('abc', 10, 'foo');  // 'foofoofabc'
*   padLeft('abc', 6,'123465'); // '123abc'
*   padLeft('abc', 6, '_-');    // '_-_abc'
*   padLeft('abc', 8, '0');     // '00000abc'
*   padLeft('abc', 1);          // 'abc'
*/
function padLeft(str,len,chars){
    let strLen = str.length;
    if(strLen>len) return str;
    let strChars = chars || " ";
    let sortLen = len-strLen;//要填充的长度
    let padStr="";
    if(sortLen<strChars.length){
        padStr=strChars.slice(0,sortLen);
    }else{
        while(padStr.length<sortLen){
            for(let i=0;i<strChars.length;i++){
                padStr=padStr.concat(strChars.charAt(i));
                if(padStr.length==sortLen) break
            }
        }

    }
    return padStr.concat(str)
}
let result = padLeft('abc', 8, '0');
console.log(result);