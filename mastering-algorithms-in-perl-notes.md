## Introduction
We started reading this amazing book on 23 October 2018 (the [mole day](https://www.moleday.org/)). 
This article is about our notes on this book. We are, of course, ignoring the Perl part (sorry Larry)!

## Why

## Day 1: 10/25/18
Today, I learned about a time-space tradeoff. As an example, we thought of ways to find the brightness if given values of red, green, and blue from 0 to 255. We found out three ways:
1. Do three floating point multiplications and two additions: red * 0.118 + green * 0.231 + blue * 0.043.
2. Make three lookup tables, one for red, one for green, and one for blue, each of 256 entries, and look the values up and add them together.
3. Make one big lookup table of 16,777,216 entries, and only look it up once.

The first way takes more time(uses the CPU more), but requires no memory. On the other hand, the third way takes very little CPU and much less time, but requires 16 MiB of memory. The second is a middle ground. It takes less than a kilobyte of memory, but takes more time than the third one. It takes more memory than the first one, but takes less time. So if you have lots of CPU, but not much memory, you should use the first method. If you have a lot of memory, but not much CPU, you should use the third method. And if you have a moderate amount of both, you should use the second method.

## Day 2: 11/2/18
Today, I learned about the use of benchmarking, floating point numbers, temporary variables, and caching. Benchmarking can help you take the time of different functions, or the difference of the time it takes to execute the same algorithm two different ways. It is a very useful tool to measure the time of functions.

I also learned how floating point numbers work. It is interesting because Javascript considers floating point numbers to be different than integers. It works by converting the floating point numbers into the binary representations of them and then dividing them. For example, if you do this: `parseInt(2.4/0.2)`, it should return 12. But it doesn't. It returns 11. The binary floating point representation when you divide 2.4/0.2 and then convert it into an integer is slightly below 12. So Javascript converts it into 11.

Another thing I learned about was temporary variables. They may be useful in some situations, but sometimes, it makes your program slower. Take an example. If you want to convert an array of numbers from one base to another, and you time them, your program will become 25% faster if you use temporary variables. But, if you compute the volume of an n-dimensional sphere using the formula, using temporary variables will slow your program down by 10%.

The last thing I learned about was caching. If caching is on and you execute a function with the same arguments twice, on the first execution, the function executes normally, but the second time, it executes immediately. This is because the program stores some data on disk so it is faster to execute and you do not have to run the whole function again. It just searches the disk. This is a very neat feature and quite useful, especially if you are working with big functions and you have a lot of disk space.
