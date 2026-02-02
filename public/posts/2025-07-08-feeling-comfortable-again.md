---
title: "Feeling comfortable again"
date: "2025-07-08"
---

A long awaited feeling when looking at my code! I am starting to see the patterns better and smells are starting to stick out. Today I finished refactoring my CLI game logic by using the state to switch screens. This was a great update that lead me to updating the way my games resume and even initialize. Removing some extra fluff functions in my game logic.

The biggest update to Quill was finally put in motion. A refactor of the game-loop itself. I knew when writing the code that I should be utilizing the already made 'next-state' function in my game's core logic. This was tied to a read-line user input for the human's turn however which lead me away from it, not understanding how to get around it. The help from Alex today really helped me solidify my confidence in the fact that it was done initially wrong and that I could and should have taken steps to at least use the next-state for an ai players turn, since their turn is exactly the same in CLI or GUI. Now, my gui has better testing and is more versatile! After, I was back and adding more in depth tests after the refactor to confirm that things are still working if something changes. Huge thanks to my team on this iteration. This has been a huge boost of a week. Super thankful for this iteration.