/*
*给定一个链表，旋转链表，将链表每个节点向右移动 k 个位置，其中 k 是非负数
* 输入: 1->2->3->4->5->NULL, k = 2
* 输出: 4->5->1->2->3->NULL
* */
var rotateRight = function(head, k) {
    let newArr = head.split('->');
    newArr.pop();
    for(let i=0;i<k;i++){
        let lastItem = head.pop();
        head.unshift(lastItem)
    }
    return head.join('->') + '->NULL'
};
let lianStr = '1->2->3->4->5->NULL';
console.log(rotateRight(lianStr,2));