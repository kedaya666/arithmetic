/*
* 生成一个长度为100的数组，然后随机向数组中插入1-100之间的数字，要求数组各个元素的值不重复，最后按照升序排列
* */
function getArr(){
    let arr = [];
    while(arr.length<100){
        let index = Math.floor(Math.random()*100+1);
        let flg=arr.every(function(arr){
            return arr!=index;

        });
        if(flg == true){
            arr.push(index)
        }
        if(arr.length==100){
            arr.sort(function(a,b){
                return a-b;
            });
            return arr
        }
    }
}
console.log(getArr());