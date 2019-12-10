/**
 * 打印1-n的所有整数
 */
function printNumber(n)
{
    //特殊条件（临界条件）
    if(n == 1) console.log(1);
    else{
        printNumber(n-1);
        console.log(n);
    }
}
printNumber(10);

/* 
 * 一个人赶着鸭子去每个村庄卖，每经过一个村子卖去所赶鸭子的一半又一只。
 这样他经过了七个村子后还剩两只鸭子，
 问他出发时共赶了多少鸭子？经过每个村子卖出多少只鸭子？
*/
function saleDuck(n){
    if(n==7){
        return 2;
    }
    else{
        return (saleDuck(n+1)+1)*2;
    }
}
console.log(saleDuck(0));
console.log(saleDuck(1));