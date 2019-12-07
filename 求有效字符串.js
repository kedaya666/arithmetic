/*
*给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。
 有效字符串需满足：
 左括号必须用相同类型的右括号闭合。
 左括号必须以正确的顺序闭合。
 注意空字符串可被认为是有效字符串。
* */
let isValid = function(s) {
    if(s.length==0){
        return true;
    }else if(s.length%2==1){
        return false;
    }else if(s[0]==")" || s[0]=="]" || s[0]=="}"){
        return false;
    }
    else{
         s = s.split('');
        for(let i=0;i<s.length;i++){
            switch(s[i]) {
                case "(":
                    if(s[i+1] == ")"){
                        s.splice(i,1);
                        s.splice(i,1);
                        s=s.join('');
                        return isValid(s);
                    }
                    break;
                case "[":
                    if(s[i+1] == "]"){
                        s.splice(i,1);
                        s.splice(i,1);
                        s=s.join('');
                        return isValid(s);
                    }
                    break;
                case "{":
                    if(s[i+1] == "}"){
                        s.splice(i,1);
                        s.splice(i,1);
                        s=s.join('');
                        return isValid(s);
                    }
                    break;
            }
        }
        return false;
    }
};
console.log(isValid("([])"));