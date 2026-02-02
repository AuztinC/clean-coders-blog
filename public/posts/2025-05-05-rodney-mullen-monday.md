---
title: "Rodney Mullen Monday"
date: "2025-05-05"
---

My first week as a curator, and I am happy to have been chosen. Being the person who has to speak up in the meetings really helps me be more comfortable with the speaking in front of the team. The morning was a great time for me to decide what kind of week I wanted to have as a curator and what I would be talking about at the end of the meetings. Alex had been busy before the stand up meeting and so I spend time reviewing old katas and eulers and practicing the bowling kata.

The rythm of the bowling kata is feeling good. I am happy to get to a point where I see a refactor in the making and am ready to pull out duplicate expressions. Bowling has been a great kata to help me learn to back up on red and refactor and that is a huge step.

After meeting with Alex briefly followed by a short meet with Scoops I was left with the idea of 'how do I get all of these functions into one?'. The journey began with me writing the select-game function that would take in the user input and select the appropriate game accordingly. I was originally writing this with the intent to continue using the four seperate game mode loop functions. But after staring at the functions and looking at how much similarity there really is, I started trying to understand how to create a system so generic that it doesn't care who or what player1 or player2 is, it just allows them to play their turn. This ended up with me parameterizing all of the inputs such that I can feed the new 'init-game' function with something like (board [:human :ai] ['X' 'O']) and allow the function to handle the setup of players and markers. This was a great lesson in thinking more generic and abstract. I'm happy with this update as it shows a big step in those fields.

Another awesome Monday, looking forward to my next project!