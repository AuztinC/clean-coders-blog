---
title: "Picturing it all"
date: "2025-06-24"
---

This was a huge day for my gui. Having come into the day with most of my menus drawn, I knew that it was time to add the logic. First however I needed to complete my drawings. Spending the morning working on getting the 3x3, 4x4, and 3x3x3. The 3x3 and 4x4 were up first and so using the cell-size and game window I am able to draw my lines and calculate the placement of the cells values. Then once I needed to conquer the 3d board, I needed a totally different way of calculating. Thus became a new function which is solely responsible for the 3d drawing. To get something easier to work with, I began partitioning the cells into layers for the top, middle, and bottom boards.

Once I had these drawn it was a good into the game loop. Being able to click in the cells. Using a multi method for this to seperate the three different boards helped me create a polymorphic dispatchable way to interact with everything. This became a huge hurdle when I began tying my click input to my game loop. Not even realizing, I had created a system that would never allow an ai vs ai game due to the clicking block. After getting some well needed advice from my mentor I noticed my mistake and started moving towards a game-loop re-write that would handle returning the state at each step.

I am proud of my progress today, although I am still not there. The game will run on 2/3 boards and you can get back into a previously started game. You cannot however play a 3x3x3 game with human input or watch a replay. Hopefully I can get these working early tomorrow before IPM.

Thankful for the advice and looking forward to having this step complete.