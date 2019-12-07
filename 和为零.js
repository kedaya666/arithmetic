/*
* 给定一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？找出所有满足条件且不重复的三元组。
 注意：答案中不可以包含重复的三元组。
 例如, 给定数组 nums = [-1, 0, 1, 2, -1, -4]，
 满足要求的三元组集合为：
 [
    [-1, 0, 1],
    [-1, -1, 2]
 ]
* */
var threeSum = function(nums) {
    nums = nums.sort((a, b) => a - b);
    const ret = [];
    let i = 0;
    while (i < nums.length) {
        let one = nums[i];
        let start = i + 1;
        let end = nums.length - 1;
        while (start < end) {
            let sum = one + nums[start] + nums[end];
            if (sum === 0) {
                ret.push([one, nums[start], nums[end]]);
                start++;
                end--;
                // 跳过重复值
                while (start < end && nums[start] === nums[start - 1]) {
                    start++;
                }
                while (start < end && nums[end] === nums[end + 1]) {
                    end--;
                }
            } else if (sum > 0) end--;
            else start++;
        }
        i++;
        // 跳过重复值
        while (i < nums.length && nums[i] === nums[i - 1]) i++;
    }
    return ret;
};
console.log(threeSum([-1, 0, 1, 2, -1, -4]));