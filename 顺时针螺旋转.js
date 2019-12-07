/*
*给定一个包含 m x n 个元素的矩阵（m 行, n 列），请按照顺时针螺旋顺序，返回矩阵中的所有元素
* 输入:
 [
 [ 1, 2, 3 ],
 [ 4, 5, 6 ],
 [ 7, 8, 9 ]
 ]
 输出: [1,2,3,6,9,8,7,4,5]
* */
var spiralOrder = function(matrix) {
    if(matrix.length<=0)return [];
    let rowLen = matrix[0].length;
    let colLen = matrix.length;
    let arrLen = rowLen*colLen;
    let i=0,j=0;
    let rowArr = [],colArr = [],spiralArr = [];
    for(let k=0;k<rowLen;k++){
        rowArr.push(k)
    };
    for(let l=0;l<colLen;l++){
        colArr.push(l)
    };
    while(spiralArr.length<arrLen){
        for(let k = 0;k<rowArr.length;k++){
            j = rowArr[k];
            spiralArr.push(matrix[i][j]);
        };
        colArr.shift();
        if(colArr.length<=0)return spiralArr;
        for(let k=0;k<colArr.length;k++){
            i = colArr[k];
            spiralArr.push(matrix[i][j]);
        };
        rowArr.pop();
        if(rowArr.length<=0)return spiralArr;
        for(let k=rowArr.length-1;k>=0;k--){
            j = rowArr[k];
            spiralArr.push(matrix[i][j]);
        };
        colArr.pop();
        if(colArr.length<=0)return spiralArr;
        for(let k=colArr.length-1;k>=0;k--){
            i=colArr[k];
            spiralArr.push(matrix[i][j]);
        };
        rowArr.shift();
        if(rowArr.length<=0)return spiralArr
    }
};
let arrList =  [[1, 2, 3, 4],[5, 6, 7, 8], [9,10,11,12]];
console.log(spiralOrder(arrList));

/*
*给定一个正整数 n，生成一个包含 1 到 n2 所有元素，且元素按顺时针顺序螺旋排列的正方形矩阵。
* 输入: 3
 输出:
 [
 [ 1, 2, 3 ],
 [ 8, 9, 4 ],
 [ 7, 6, 5 ]
 ]
* */
var generateMatrix = function(n) {
    let maxNum = Math.pow(n,2);
    let arrList = [],dimensionArr = [],arrI=[],arrJ=[];
    let i=0,j=0,flag=0;
    for(let k=1;k<=maxNum;k++){
        arrList.push(k)
    };
    for(let l=0;l<n;l++){
        dimensionArr.push([])
    };
    for(let f=0;f<n;f++){
        arrI.push(f);
        arrJ.push(f);
    };
    while(arrList.length>0){
        for(let y=0;y<arrJ.length;y++){
            j=arrJ[y];
            dimensionArr[i][j]=arrList[flag];
            if(flag == maxNum-1){
                return dimensionArr
            }else{
                flag+=1
            }
        }
        arrI.shift();
        for(let y=0;y<arrI.length;y++){
            i=arrI[y];
            dimensionArr[i][j]=arrList[flag];
            if(flag == maxNum-1){
                return dimensionArr
            }else{
                flag+=1
            }
        }
        arrJ.pop();
        for(let y=arrJ.length-1;y>=0;y--){
            j=arrJ[y];
            dimensionArr[i][j]=arrList[flag];
            if(flag == maxNum-1){
                return dimensionArr
            }else{
                flag+=1
            }
        }
        arrI.pop();
        for(let y=arrI.length-1;y>=0;y--){
            i=arrI[y];
            dimensionArr[i][j]=arrList[flag];
            if(flag == maxNum-1){
                return dimensionArr
            }else{
                flag+=1
            }
        }
        arrJ.shift();
    }
};


var generateMatrix = function(n) {
    var result = [],nowValue=1,index=0
    for(let i=0;i<n;i++)
        result.push([])
    while(nowValue<=n*n){
        for(let j=index;j<n-index;j++)
            result[index][j]=nowValue++
        for(let i = index+1;i<n-index;i++)
            result[i][n-1-index] = nowValue++
        for(let j = n-2-index;j>=index;j--)
            result[n-1-index][j] = nowValue++
        for(let i = n-2-index;i>index;i--)
            result[i][index]=nowValue++
        index++
    }
    return result
};
console.log(generateMatrix(3));