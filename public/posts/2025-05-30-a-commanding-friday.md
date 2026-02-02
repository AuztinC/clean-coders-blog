---
title: "A Commanding Friday"
date: "2025-05-30"
---

Doing research for a new presentation is always a great way to fully understand a topic. The design patterns were a new topic to me just a few weeks ago, and now I have done a presentation on two of the patterns. Most recently, the Command Pattern. This pattern encapsulates a request as an object which contains all of the information about the request. Allowing for complex commands and a flexible, extendable system. A structure which involves five core actors. Comman, Concrete Comman, Receiver, Invoker, and Client.Learning about the Command pattern helped me to get a better visual of how to properly seperate and maintain a sequence or storage of actions.

Thinking about the future of my tic-tac-toe and knowing that I will have to implement the ability to switch the storage outlet I wanted to go ahead and add the key into my state object. Immediately after adding this I noticed that this will create a problem. All of my previous tests that are checking for exact values within my state parameters will have to know what the storage device will be, or the result of the test will change on startup. Spending a while trying different options, I came accross one that feels good. Using an empty atom to staore the result of each test and only checking for what I want to know is an exact match, relating to the test name. This works fantastic and allows me to continue passing my full set of parameters in my state object.

A fantastic Friday of getting to know my fellow teammates and spending a little extra time with my apprenticeship peers. Looking forward to another week of learning Clojure and perfecting my craft!