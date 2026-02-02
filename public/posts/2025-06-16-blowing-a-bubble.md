---
title: "Blowing a bubble"
date: "2025-06-16"
---

Creating the implementations of an ArrayList and a LinkedList was a fun challenge. Last Friday I completed the ArrayList and started working on LinkedList shortly after. While these are both using the same interface and fulfilling the same methods, I wasn't sure how to create the tests in a way to assert into both implementations.

Spending the first part of today finalizing my LinkedList methods and filling out the add(el, i) function. After getting this up and runnig, I jumped right into created my sorting methods. Being silly and not thinking ahead at all I simply started making my tests in the ArrayListTest class. After some videos and simple suedo examples, I got some tests set up to help lead me towards a bubble sort algorithm.

Bubble sort is simple, traversing the list with pointers to compare one element with the one after it. Swapping the two values if needed and continuing on its way.

Merge sort is a little more involed. Splitting the given array in half recursively until a single value is reached. These values can be sent into a merge function that is the brain actually comparing these values and then rearranging the original array.

Having almost completed the Merge sort I am feeling great. Also having gotten some fantastic refactor time with Alex that really simplified my future tests against both list implementations. Excited to finish these tomorrow and also add Quick sort to my repertoire