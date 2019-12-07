/*
* 给定一个没有重复数字的序列，返回其所有可能的全排列
* 输入: [1,2,3]
 输出:
 [
 [1,2,3],
 [1,3,2],
 [2,1,3],
 [2,3,1],
 [3,1,2],
 [3,2,1]
 ]
* */
var permute = function(nums) {
    debugger;
    if (nums.length == 1) return [nums];
    var result = [];
    for(var i=0; i<nums.length; i++) {
        // 选取一个数字，求剩余数组的全排列
        var restArr = nums.slice(0,i).concat(nums.slice(i+1));
        var nextRes = permute(restArr);
        for(list of nextRes) {
            list.unshift(nums[i]); // 之前选取的数字插到剩余数组求得的全排列所有结果数组的首位
            result.push(list);
        }
    }
    return result;
};
var permute = function(nums) {
    const fo = (matrix, add) => {
        if(!matrix.length) return [[add]];
        const result = [];
        for (const arr of matrix) {
            console.log(arr);
            result.push(...(Array(arr.length + 1).fill().map((_, index) => [...arr.slice(0, index), add, ...arr.slice(index)])));
        }
        return result;
    };
    let mulArr = [];
    for (const num of nums) {
        mulArr = fo(mulArr, num);
    }
    return mulArr;
};
var permute = function(nums) {
    if (nums.length == 1) return [nums];
    var result = [];
    for(var i=0; i<nums.length; i++) {
        // 选取一个数字，求剩余数组的全排列
        var restArr = nums.slice(0,i).concat(nums.slice(i+1));
        var nextRes = permute(restArr);
        for(list of nextRes) {
            list.unshift(nums[i]); // 之前选取的数字插到剩余数组求得的全排列所有结果数组的首位
            result.push(list);
        }
    }
    return result;
};
console.log(permute([1,2,3]));