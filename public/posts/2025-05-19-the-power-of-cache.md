---
title: "The power of Cache"
date: "2025-05-19"
---

What a huge change! Before today all of my tests that included things like having the ai choose a move from an empty board or many other positions cause an excrutiating wait for the tests to complete. After thikning about this over the weekend and remembering that the memoize function exists in clojure I decided to try playing with it today. It is pretty unbelievable that something as simple as adding (memoize ) in front of your function can increase the speed such an extraordinary amount! Running my full test suit before took around 17-18 very long seconds. After adding a memoize to minimax the time was reduced down to something like 0.5 seconds or less!

Getting this set up and seeing the massive speed increase had me filled with joy and hope that the 4x4 version of the game would be a playable option now. I was mistaken. The larger version of the game still takes a very long time to make the first few moves for the AI. Eventually I attempted to play with the depth and see if setting a max-depth would help at all, and it did. Only with this setup, the ai isn't un-beatable. After looking a little into alternate methods to improve the speed I came accross alpha-beta pruning. Tomorrow I will attempt to implement this into my game to finally have a playable ai for the larger game board option.