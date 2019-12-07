/*
* 合并数组，并升序排序
* [1,2,3,4,5,6,7,8,8,13,15]
* */
let A = [1,3,5,7,8,9,15];
let B = [2,4,6,7,13];
function concat(A,B){
    let C =A.concat(B);
    let D=C.sort(function(a,b){
        return a-b;
    });
    return D
}
console.log(concat(A,B));