---
title: "The Legend Himself"
date: "2025-04-10"
---

The first Kata I was assigned was a fun challenge. The ability to print a string with 'fizz' and 'buzz' at every 3 and 5 multiple, and 'fizzbuzz' if the number is both. I succefully completed it twice today while still managing to go through some old exams as well as complete the first TDD video. Fizzbuzz is a good first challenge for a cata. A problem that allowed me to use something new, both 'doseq' and 'cond'. Using cond we are able to check if an incoming number will be a multiple of 3, 5, or both. This is accomplished using Mod which I have been getting more comfortable with these past few days.

Begenning by seperating out the functionality of the question; I created a function to handle each number individually to check for 'fizz' 'buzz' or 'fizzbuzz'. This is the function using Mod to check for divisibility. Next the function for outputting a list of numbers with the strings was created. This function mapped a range of 1 to the (inc c) to allow each number to feed into fizzbuzz and return their value as a list. Finally the function to print the string is created, this function uses a doseq to println the result of each value of fizzbuzz-upto.

I'm eager to master the process of TDD and know what to be testing for and when. The repitition of the Kata is a fantastic way to get me used to writing them so I look forward to that comfort.

Getting to watch a presentation live from Uncle Bob was really a special treat for the day. His ability to relate things and tie topics together is very inpspiring for my future presentations. Learning about the human body a bit was a great break during my day, and a great refresher for my science knowledgebase. 

Watching Alex present about TDD and go over some concept projects was also great! A good way to see some realistic case studies of projects and the way the tests are used for the current craftsmen. Grateful for another day of apprenticeship.