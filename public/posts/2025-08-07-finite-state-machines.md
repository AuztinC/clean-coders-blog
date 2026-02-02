---
title: "Finite State Machines!"
date: "2025-08-07"
---

Considering that with a three bit system you could have 8 total states. It is hard to believe that a system with only 2 more bits can handle something like a 1 with thirty-six 0's. What an incredible difference! Taking time to think about every possible state of a system can be overwhelming. A finite state machine diagram might help if you are feeling lost in your state logic. Once you have either used a diagram or table visual implementation of y our system, you can then identify all of your transition and events. This will create a great visual aid for you to walk through your systems possible states.

In code, this can be achieved with a switch statement looking at a value and dispatching a proper state handler. When a system becomes to large this sort of implementaiton could become a hassle to manage. Using a table driven approach in the code can help here, first defining all possible states and transitions together in a list, that then attach to a function to be called or list of functions. Then we can iterate through all posible states and check which handler needs to be called after a transition is made.

Getting a passing production build in my project was a very gratifying thing. Understanding the clojurescript environment enough, at least for my code base, to manage the separation is important.