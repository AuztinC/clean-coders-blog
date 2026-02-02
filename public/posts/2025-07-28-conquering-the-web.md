---
title: "Conquering the web"
date: "2025-07-28"
---

The weekend came and went with no time to stop and relax. Building tests that assert my http responses are having the correct html and then using hiccup to build the html, I managed to get my pages moving along. At this stage I was feeling great about my progress.

I took a lof of time to consider that my state object is being built on-the-fly up until a user makes their first move. Getting this right did not come on the first attempt however. Starting by using the html form action to build a query string with the chosen game options up until the game is kicked off. Parsing this was a little tedious, but it did get the job done. Helping me to maintain a state up until the user moves into the game. At this point the plan was to save the game data into data storage and a 'gameid' in the users cookie matching this game. This became a frustating process that had me resetting the state and chasing my tail.

Eventually, the cookies took over. Now the game state is being stored in the cookie as well as the database. This will need to change, as well as doing something with the cookie once the game has concluded.

This was a big day and a lot of progress was made. The game can now be played, at least once. until the cookie is cleared. Ai vs Ai does work as well. Tomorrow will be another big day. Still needing to add the ability to watch a replay as well as continue into an in progress game.