---
title: "Welcome back, Tic-tac"
date: "2025-07-23"
---

Refactoring my entire ClientHandler class to rely solely on the handlers for each route was incredibly satisfying. Removing the huge violation that this class was making against the Single Responsibility by allowing it to truly 'handle' the passing of data to the correct route. Using a map lets us attach a route string, such as '/hello' to a handler class that implements the same handle interface. After noticing a bug in this system however, when checking these routes by key. I was using a .startsWith() function that would allow a route like '/hello.pdf' to take you to the '/hello' route displaying an html page. This bug was fixed by using regular expressions and the .matches() function instead. A huge win overall that will continue to be perfected.