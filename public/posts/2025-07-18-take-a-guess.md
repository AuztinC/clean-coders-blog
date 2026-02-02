---
title: "Take a guess"
date: "2025-07-18"
---

The purpose of a guessing game is simple. Given a number input and a hidden random number between 0-100, take a guess! My server should check your guess against a stored value. If you are to low, the server should add a line to the html page saying so, and the same applies to being to high. Nothing new here, just good old guessing.

Applying my newly gained knowledge of how to check a route and respond with a body of bytes, I quickly threw together a page that has a simple input. Receiving the input in a POST method under the same route provides the ability to check your answer in the body of the POST request. After this is done, some quick checks to see where you number lied will result in the adition of the proper html element.

Currently the server is just creating one random number in its own class and also storing the guesses in that class. This means that all users accessing this endpoint will recieve the same random number and number of guesses as well. This is not the intended funcitonality of the game. I will need to update this to store some sort of reference for an open socket that I can use to store their target number as well as their id. When the user submits a number I will need the server to check that ID and look through a map getting back their target to compare with the current guess.

This was a really fun feature to add so far, getting to add some personalized touches to the html and the messages being displayed.