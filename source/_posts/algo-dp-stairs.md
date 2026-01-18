---
title: 动态规划详解：爬楼梯
date: 2025-02-15 10:00:00
categories:
  - LeetCode
  - Dynamic Programming
tags:
  - DP
  - Easy
photos:
  - https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=800&q=80
---

Climbing Stairs 问题是动态规划的入门经典。

## 题目描述
假设你正在爬楼梯。需要 n 阶你才能到达楼顶。
每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？

## 解法
```python
class Solution:
    def climbStairs(self, n: int) -> int:
        if n <= 2: return n
        a, b = 1, 2
        for _ in range(3, n + 1):
            a, b = b, a + b
        return b
```
