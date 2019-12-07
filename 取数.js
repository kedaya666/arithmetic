/*
* 有一个数组a=[8,10,30,55,78,90,1],新建一个数组b，b从a中一次随机选取一个元素，取完为止
* */
let a = [8,10,30,55,78,90,1];
function copyArr(arr){
    let b = [];
    let len=arr.length;
    let c=[];
    while(b.length<len){
        let index=Math.floor(Math.random()*len);
        var flg=c.every(function(c){
            return c!=index;

        });
        if(flg==true){
            c.push(index);
            b.push(a[index]);
            if(b.length==len) return b;
        }
    }
}
let res=copyArr(a);
console.log(res);