---
title: "Hello Ping!"
date: "2025-07-21"
---

Step right up, pick a number(between 1-100)! The guessing game came out really nicely. Finishing last week with a version of the game that would only allow one instance of itself at a time, meaning if multiple people were to land on the guess game page that they would all be served the same random number and only be allowed 7 guesses between ALL of them. While this could be a fun version of a guessing game. Maybe a lobby exists and people could collaborate on the guess. However, for this purpose, the game was intended to be a single player experience.

To solve the problem, I turned to cookies. There is a fairly simple way to set a cookie by providing the 'Set-Cookie:' header with a value. Using UUID and a hashmap of players to their target number, I was able to create the intended seperated version of the game. This was a really fun feature to add that gave me a better look inside cookies themselves and how to persist a state for individual users of my server.

Looking at the next specs that needed to be passed lead me to the next feature story as well, the /ping route. A user should be able to go to the server/ping and land on a page that will give two times. The start time being as soon as the server see's your request. An end time will display the time that the response is packaged up and sent back. The idea being that adding a number after ping, such as /ping/1 will give you a 1 second difference between the start and end time. Parsing the request path and creating a Thread.sleep('parsed-time') and then checking the current time after the pause has completed allows for a simple way to package the two times and send them off at HTML List items.