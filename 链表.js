/*
* 给出两个 非空 的链表用来表示两个非负的整数。其中，它们各自的位数是按照 逆序 的方式存储的，并且它们的每个节点只能存储 一位 数字。
*如果，我们将这两个数相加起来，则会返回一个新的链表来表示它们的和。
*您可以假设除了数字 0 之外，这两个数都不会以 0 开头。
* 输入：(2 -> 4 -> 3) + (5 -> 6 -> 4)
 输出：7 -> 0 -> 8
 原因：342 + 465 = 807
* */
let num1='2 -> 4 -> 3',num2='1 -> 0 -> 8';
 var addTwoNumbers = function(l1, l2) {
 let arr1=Number(l1.replace(/\s+/g, "").split("->").reverse().join(""));
 let arr2 = Number(l2.replace(/\s+/g, "").split("->").reverse().join(""));
 let result = (arr1+arr2).toString();
 let str1 = ''
 for(let i=result.length-1;i>=0;i--){
 str1 += result[i]+(i==0?"":"->");
 }
 return str1
 };
 console.log(addTwoNumbers(num1,num2));