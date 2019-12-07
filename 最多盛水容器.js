/*
* 最多盛水容器
* 给定 n 个非负整数 a1，a2，...，an，每个数代表坐标中的一个点 (i, ai) 。在坐标内画 n 条垂直线，垂直线 i 的两个端点分别为 (i, ai) 和 (i, 0)。找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。
* */
var maxArea = function(height) {
    let maxAre = 0,maxAreStar = 0;
    let len = height.length;
    let min=0,i=0,j=len-1;
    while(i != j){
        len--;
        if(height[i]>height[j]){
            min=height[j];
            j--;
        }else{
            min=height[i];
            i++;
        }
        maxAre = min*len;
        if(maxAreStar<maxAre){
            maxAreStar = maxAre
        }

    }
    return maxAreStar;
};
console.log(maxArea([1,3,2,5,25,24,5]));