---
title: "The speed of light!"
date: "2025-05-20"
---

Even faster today! My little project has grown into quite the impressive display. It is truly motivating every time I find a new way to solve a problem. The fact that there is always a new technique you might not have thought of makes me want to re think all of my previous work! When I first case accross alpha beta pruning I was not sure how I would fit it into my minimax as it sat. During my last IPM meeting with Micah, I was suggested to switch the heart of my minimax to a reduce function, which was a great way to clean the space up. After a while of pondering if I could remain with such a structure, I decided to switch back to a loop system. Needing to be able to keep track of multiple changing variables, It felt like the right choice.

The system starts in a similar way as before, setting the best score to an extreme and getting the new positions and board. Then we introduce our alpha and beta variables and set these along the way of each recurse. These are set to the min and max accordingly, eventually resulting in the check of weather our alpha has found a better spot than the opponent could at this point and take the spot.

Doing this improved the ability of the ai in a 4x4 board environment by a large margin. It was still a bit slow on the first couple of moves however, taking ~4 seconds to initiate its move. Adding a best-early-move to the system which prefers corners and middle for the first 4 moves of the game allows a offensive start for the computer player and skips the long first couple moves.

The system is fast and I am excited to see what my mentor and Micah think of the progress tomorrow at IPM.