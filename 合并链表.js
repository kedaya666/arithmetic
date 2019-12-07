/*
* 将两个有序链表合并为一个新的有序链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。
* 输入：1->2->4, 1->3->4
 输出：1->1->2->3->4->4
* */
let mergeTwoLists = function(l1, l2) {
    /!*let arr1 = l1.split('->');
    let arr2 = l2.split('->');*!/
    if(l1===null || l2===null)return null;
    console.log(l1,l2);
    let newArr = l1.concat(l2);
    let formatArr=newArr.sort((a,b)=>{
        return a-b;
    });
    return formatArr.join("->");
};
let l1=[1,2,4],l2=[1,3,4];
console.log(mergeTwoLists(l1,l2));