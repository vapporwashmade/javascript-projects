## Introduction
We started reading this amazing book on 23 October 2018 (the [mole day](https://www.moleday.org/)). 
This article is about our notes on this book. We are, of course, ignoring the Perl part (sorry Larry)!

## Why

## Day 1: 10/25/18
Today, I learned about a time-space tradeoff. As an example, we thought of ways to find the brightness if given values of red, green, and blue from 0 to 255. We found out three ways:
1. Do three floating point multiplications and two additions: red * 0.118 + green * 0.231 + blue * 0.043.
2. Make three lookup tables, one for red, one for green, and one for blue, each of 256 entries, and look the values up and add them together.
3. Make one big lookup table of 16,777,216 entries, and only look it up once.

The first way takes more time(uses the CPU more), but requires no storage. On the other hand, the third way takes very little CPU and much less time, but requires 16 MiB of storage. The second is a middle ground. It takes less than a kilobyte of storage, but takes more time than the third one. It takes more storage than the first one, but takes less time. So if you have lots of CPU, but not much storage, you should use the first method. If you have a lot of storage, but not much CPU, you should use the third method. And if you have a moderate amount of both, you should use the second method.
