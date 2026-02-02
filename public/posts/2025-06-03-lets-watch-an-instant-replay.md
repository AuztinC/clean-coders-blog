---
title: "Let's watch an instant replay"
date: "2025-06-03"
---

Testing my way to victory is the name of the game. Spending an ample amount of time working on a proper test that would lead me to writing at least a peice of my feature became a real challenge. Ending up with what felt like a whole day of writing and deleting tests was very mentally taxing. After a fair deal of time working through ideas about what should be the simplest place to start, I decided to lean on the scratch file that my mentor, Jensen had recommended using. Writing out each task that I would need to do in order to fully add this latest feature really helped me to get a visual about which tasks are testable in the current state of the project.

This feature was implemented using an Atom to hold each move during a game and packaging this information with some metadata about the game. This all gets tossed into a :previous-games key in the edn file's map. At the same time that this is happening, the user is given an ID to their just played game. This ID can be used at the start of the next session to watch a replay of the game, move by move, while the program tells you what move was just made and who made it.

This feature was ultimately really fun to test my way into. My brain is finally starting to thinking in terms of tests first, I am grateful for this. I am nervous about my IPM today and hope that my client isn't too displeased with any aspects of my latest feature. The next step is a big one for me; using a postgres database to store the data instead. Having used both postgres and mysql this should not be a problem. It has been a bit of time, but it will all come back to me very soon.

Another great day of learning. Happy to be one of the few lucky apprenctices!