---
title: "The power of the stub"
date: "2025-05-13"
---

Looking back through my tic-tac-toe code today ended with me having a better coverage of tests. At the beginning of this project I really had no idea how to properly test anything behond should= which if very limiting. With better insight on some of the capabilities, I am continuing to find pieces of code that I could have tested my way towards the first time. These are valuable lessons that I hope to be more thoughtful about next time.

Moving code into new namespaces was a great way to see some of these tests that needed to be implemented. Doing this resulted in a list of modules such as ai_turn, board, game_options, human_turn, init_game, and printer. These come with their own specs accordingly and each test file imports their direct testing file as 'sut' to signify which functions are the ones being tested, and which are used for utility and being tested elsewhere.

Meeting with Scoops was an informative insight to my lack of though about what is going into each module. Each module should only have functions pertaining to that modules use. Creating a 'ai-util' module which in reality was holding mostly the actions pertaining to the board itself, thus prompted a re-arrange and re-name!

After meeting with the other apprentices for a while today I was left with a euphoric feeling that I am in the right place. Looking forward to my IPM with Micah tomorrow to see what he thinks of my refactor. Did I over extend my namespaces? We shall see!