---
title: "The Game of Life"
date: "2025-05-15"
---

What an exciting day of playing with something visual! After building a very large functin that had a binding for each direction for checking a neighbor I was able to get the problem solved, although it wasn't pretty. However the tests told me to find 8 neighbors of a cell and so that's what I had to do.

Letting the tests guide me towards the ultimate result of each cell behaving how I wanted. Using a update-state function that creates the inital x and y to then send off and let the logic handling functions take care of that business.

After completing and taking a look back at the solution I noticed that huge let with all of the eight directional bindings taking up such a large amound of space. I knew that it was time to refactor. But what is the right solution? Thinking about what was happening, I was simply incrementing and decrementing the x and y by 1 in the right pattern to get my expected result. So I created a neighbor offset pattern that can be easily used to create a list of the eight neighbors' values. This gets folded into a map structure using frequencies and that can ultimately be used to calculate the behavior of a given cell!

Watching the result of this project is a very satisfying feeling. Playing with the colors and giving each frame tick a random color makes starts to make it look like a twinkling sky after enough evolutions have settled into their solid structures. An amazing day of solving problems and I look forward to practicing it again tomorrow!