---
title: "Racecar, Level, Rotor, Oh My!"
date: "2025-04-14"
---

Using the knowledge I have gained through the videos and my Mentor thus far. I was able to successfully use Test-Driven Development strategies and solve the problem. The question of 'What is the largest palindrome of two three digit numbers?' was not answered without a set of challenges.

Going into the problem I knew I wanted to seperate the operations to build to my final answer. Beginning with a simple function to find the product. Once the numbers are multiplied, they need to be seperated out so that they can be compared to one another. I solved this with a function that splits a string version of the numbers into a vector.

Now I have a collection something like ['9' '0' '0' '9'], and with this I will need to determine the amount of numbers in the collection to know where I should split it correctly. A cond with a 4, 5, and 6 variation of a collection with two subvectors, reversing the second half to compare and check for a match with the first.

Next a simple function checks if every subvector is matching in our collection using every? true? over our subvec-coll. Thus bringing us to our final step, the grand finale. I was feelng good with my progress after working through a loop that will recursively dec the first int in the num-col before sending it off to get processed and match-checked. This resulted in a green light from my two digit test case, expecting and achieving my result of 9009 from the product of 91 x 99.

However. This process did not continue to produce the results I expected when I stepped the function up to a two digit number. I was, after all, looking for the largest product of a three digit number, not two! And so, began my testing. I first had to improve my ability to process the string splitting and reversing which could at first only handle a 4 digit number, due to my expected results of the two digit outcome.

In the end, a double nested for loop was used to create essentially a couple countdown timers and a max(outer) and local(inner) palindrome to compare with. Down in the depths we recurse over the inner countdown doing palindrome checks all along the way, and updating our local-max-palindrome. Once the timer is out for both we will result in an output format of [[993 913] 906609]