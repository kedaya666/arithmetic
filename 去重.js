/*
*给定一个排序数组，你需要在原地删除重复出现的元素，使得每个元素只出现一次，返回移除后数组的新长度。
 不要使用额外的数组空间，你必须在原地修改输入数组并在使用 O(1) 额外空间的条件下完成。
 给定 nums = [0,0,1,1,1,2,2,3,3,4],
 函数应该返回新的长度 5, 并且原数组 nums 的前五个元素被修改为 0, 1, 2, 3, 4。
* */
const removeDuplicates = function(nums) {
    if(nums){
        let len=1;
        nums.forEach((num,index)=>{
            let newArr = nums.slice(0,len);
            let currentNum = nums[len];
            let flg=newArr.every((s) => {
                return s != currentNum;
            });
            if(!flg){
                nums.splice(len,1);
                len = len-1==0?1:len-1
            }else{
                len+=1
            }
        });
        return nums;
    }else{
        return null;
    }
};
let nums=[1,1,2];
console.log(removeDuplicates(nums));