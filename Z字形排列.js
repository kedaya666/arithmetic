/*
* 将一个给定字符串根据给定的行数，以从上往下、从左到右进行 Z 字形排列。
 比如输入字符串为 "LEETCODEISHIRING" 行数为 3 时，排列如下：
 L   C   I   R
 E T O E S I I G
 E   D   H   N
 之后，你的输出需要从左往右逐行读取，产生出一个新的字符串，比如："LCIRETOESIIGEDHN"。
* */
let stringZ = "AB";
let convert = function(s, numRows) {
    let row=0,col=0,rowLen=numRows-1,flag=1;
    let newArr=[];
    let newString="";
    if(numRows>1){
        for(let j=0;j<numRows;j++){
            newArr.push([]);
        }
        for(let i=0;i<s.length;i++){
            newArr[row][col]=s[i];
            if(flag == 1){
                if(row == rowLen){
                    flag=2;
                }else{
                    row = row+1;
                }
            };
            if(flag == 2){
                if(row == 0){
                    flag = 1;
                    row = row+1;
                }else{
                    row = row-1;
                    col = col+1;
                }
            }
        }
        newArr.forEach((newArrA) =>{
            newArrA.forEach((newArrB) =>{
                newString+=newArrB;

            })
        });
        return newString
    }else{
        return s
    }

};
console.log(convert(stringZ,1));