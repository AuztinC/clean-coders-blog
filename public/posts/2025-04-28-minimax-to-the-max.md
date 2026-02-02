---
title: "Minimax to the max!"
date: "2025-04-28"
---

Minimax is a fun algorithm that gets me thinking recursively about a problem. This time, I had to implement it in another language this time, having previously completed it in javascript. In my previous iterations of tic-tac-toe, I found myself using a 2-d array so that I could follow along with an 'x' and 'y'. This time I chose a single vector with each position being a vector itself carrying an empty string ['']. This could have been reduced again to just the str '' itself, however I wanted the extra brackets for the visuals in the termal ui.

The game itself did indeed come together using the test-driven style. Starting off testing for a tie game to see if they are all filled and growing my tests to be specific to different parts of the minimax-ai solution, 'did someone make a winning move?', will the ai return a position? will that position be the current best position?'

Accomplishing the task felt extremely gratifying, it was a problem that helped helped me grow a lot in iteration and recursion with clojure. I look forward to revisiting it and getting to refactor!