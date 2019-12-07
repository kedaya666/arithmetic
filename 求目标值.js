/*
* 给定一个包括 n 个整数的数组 nums 和 一个目标值 target。找出 nums 中的三个整数，使得它们的和与 target 最接近。
* 返回这三个数的和。假定每组输入只存在唯一答案。
* 例如，给定数组 nums = [-1，2，1，-4], 和 target = 1.
 与 target 最接近的三个数的和为 2. (-1 + 2 + 1 = 2).
* */
var threeSumClosest = function(nums, target) {
    let subNum=Math.pow(2,31)-1,sumNum=0;
    for(let i=0;i<nums.length;i++){
        for(let j=i+1;j<nums.length;j++){
            for(let k=j+1;k<nums.length;k++){
                let currentSum = nums[i]+nums[j]+nums[k];
                let currentSub = Math.abs(currentSum-target);
                if(currentSub<subNum){
                    subNum = currentSub;
                    sumNum = currentSum;
                }
            }
        }
    }
    return sumNum
};
let nums = [1,1,1,0],target = 100;
console.log(threeSumClosest(nums,target));
