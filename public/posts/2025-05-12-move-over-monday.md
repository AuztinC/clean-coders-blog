---
title: "Move over, Monday!"
date: "2025-05-12"
---

Everyday I see something new in clojure or understand something about the language that makes me so excited. Today I used my first multi-method while adding the new game modes to my tic-tac-toe project. While doing my research for the presentations I keep seeing these sort of methods coming up and have been itching to find a use.

During this whole project I have noticed that I tend rush through a problem. The act of doing test-driven development will be a discipline for me to actively work at every day I am writing code. Today I slowed down a bit and thought my tests out, starting with a function that will, similarly to the select-game function, allow a user to select a difficulty. This function has a responder function for the :else case that will let you re-try your selection. This came together with tests for things like 'prints-options', 'retries for bad input', and then moving to checking for return values.

Doing these sort of tests along the way left me with a well tested set of functions that I felt comfortable refactoring. Adding a few more tests in my code for some missed opportunities for better tested code. A great day of learning how to refactor and properly test my code.