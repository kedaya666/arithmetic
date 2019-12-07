/*
* 一个机器人位于一个 m x n 网格的左上角 （起始点在下图中标记为“Start” ）。
 机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角（在下图中标记为“Finish”）。
 问总共有多少条不同的路径？
* */
var uniquePaths = function (m, n) {
    let dp = [];
    for (let j = 0; j < n; j++) {
        dp.push([]);
        for (let i = 0; i < m; i++) {
            if(i==0|| j==0) dp[j][i] = 1
            else dp[j].push(dp[j][i - 1] + dp[j - 1][i])
        }
    }
    return dp[n-1][m-1]
};
console.log(uniquePaths(8,4));