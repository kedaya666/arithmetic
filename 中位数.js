/*
*给定两个大小为 m 和 n 的有序数组 nums1 和 nums2。
 请你找出这两个有序数组的中位数，并且要求算法的时间复杂度为 O(log(m + n))。
 你可以假设 nums1 和 nums2 不会同时为空。
 nums1 = [1, 3]
 nums2 = [2]
 则中位数是 2.0
* */
const findMedianSortedArrays = function(nums1, nums2) {
    let newArr = nums1.concat(nums2);
    newArr = newArr.sort(function(a,b){
        return a-b;
    });
    let middleNum = 0;
    if(newArr.length%2 == 0){
        let flag = newArr.length/2;
        middleNum = (newArr[flag-1]+newArr[flag])/2;
    }else{
        let flag = Math.floor(newArr.length/2);
        middleNum = newArr[flag];
    }
    return middleNum;

};
let nums1 = [1,2];
let nums2 = [3,4];
console.log(findMedianSortedArrays(nums1,nums2));