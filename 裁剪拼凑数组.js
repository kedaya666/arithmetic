/**
 * 裁剪拼凑数组
 * 说明：实现一个方法，按指定的序号N将长度为M的数组剪裁成两半，并把前后部分互换拼装成新数组
 *   其中，M > 2, M > N > 0
 * 示例：
 *  cutAndJoinArray([1, 2, 3, 4], 1); // [2, 3, 4, 1]
 *  cutAndJoinArray([1, 2, 3, 4, 5], 3); // [4, 5, 1, 2, 3]
 *  cutAndJoinArray([1, 2, 3, 4, 5, 6], 2); // [3, 4, 5, 6, 1, 2]
 */
function cutAndJoinArray(arr, index) {
    let afterStr = arr.slice(0,index);
    let beforeStr = arr.slice(index);
    return beforeStr.concat(afterStr)

}
let newStr = cutAndJoinArray([1, 2, 3, 4, 5, 6], 2);
console.log(newStr);