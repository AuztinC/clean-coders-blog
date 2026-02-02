---
title: "Sliding into home"
date: "2025-07-30"
---

Just in time. I was working late in the night last night and then attempting to get as much done today before IPM. The screens were implemented last night with the lack of proper tests for some of the cookie managing. This morning was filling those gaps. Noticing that the state could be currupt if the game was started on one storage device and if the server was restarted with a different :store value, :file or :psql that the cookie from the previous store was still in the users browser. When the attempted to interact with the game now, things would quickly become out of sync. Writing a test to help with this was first. While testing the game I stumbled upon some extra behavior that I wanted from my database as well. When asking the user to input an ID for a previous game to be replayed, there was no way to tell which ID's were valid. Adding a new field that will display all currently available game ID's in a list lets a user know which games they can watch without wildly guessing ID's. This was a simple change to my db implementations to return a list of games instead of a boolean.

Finally, an opportunity for a good IPM was coming my way. Having all of my previous features available and ready to showcase. Everything went smooth with the exception of a strange behavior while continuing a game in the :mem db route. The auto-refresh was a huge bonus, I think. It was something that I was surprised to hear that my mentor had not seen or used before. <meta http-equiv="refresh" content="10"> A simple line in the head that will cause the page to auto refresh on the content's time in seconds.

Another big week of learning a whole new process with ClojureScript. I am ready to dive in, after I complete some videos!