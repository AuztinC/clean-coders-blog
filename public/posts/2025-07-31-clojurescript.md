---
title: "Clojurescript"
date: "2025-07-31"
---

Being able to compile our clojure code into javascript that will then allow us to display an html page with some tied logic! This wasn't an easy task to get working and involved setting up some config files and tying togehter some libraries. Scaffold, Wire, and the react dom all working together in unison. This is a beautiful sight!

Digging into clojurescript, I decided to begin with a sandbox project. How could I even get a 'Hello World' going? This turned out to be fairly simple with the help of some youtube videos.

I am very grateful to have an extremely helpful coworker who has made multiple blog posts about getting these things working. Switching my project to deps.edn instead of project.clj felt like a big step as well. Being able to have more control over the aliases and scripts being run. Using this, I was able to set. up some new aliases for running and testing my project. Then came adding the :cljs aliases which allows this tag to be added on to my run or test command.

Seeing that first test pass green was very exciting. I am looking forward to seeing tic-tac-toe in my blog very soon.