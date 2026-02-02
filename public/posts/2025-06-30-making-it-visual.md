---
title: "Making it visual"
date: "2025-06-30"
---

This morning I spent some time thinking about how I could fulfil the storage functions. The refactor for postgres from last week was going well, until I ran into the functions that are handling removing the current-game key and updating the previous-games table. These functions are being used by the other storage devices which is why I hesitate to remove them completey, even though I am not using a 'current-game' or 'previous-games' tables anymore. With the current functions that are in place for postgres, the ability to find a game, start a new game in storage, find a specific game using and id and the moves along with it all are working. From this, I am not sure what to do with the extra functions being used be the other storage. I could remove them from those storage usages as well or re-thing the meaning of them for postgres itself.

Figuring out exactly how to get my input for a 3d board came with its challenges. Calculating the size of each cell and board, the x, y, and board size are sent into a helper function to find which board is clicked on before searching for the actual cell. Once this was done I wanted to complete a replay. This was done with a reduce before which allows to print the games info during each loop, but in Quil I needed to return the state at each step. This came with setting the :screen key in state to a replay. This will make one move at a time as long as the screen stays the same. Pulling out the current move off of the remaining and returning them as the :replay-queue.

This among displaying the games id and other small tasks filled up the evening. Tomorrow I look forward to completing the postgres setup.