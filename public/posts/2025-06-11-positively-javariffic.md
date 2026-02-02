---
title: "Positively Javariffic"
date: "2025-06-11"
---

Today I got up early to squash a bug. This became a relatively simple process, once I had a better look at the exact problem. Previously, I was referrencing the 'last' created game's id to create a new game with the next id. This was working great, until the games being added to my prostgres database were being put in order. This caused me to have games with duplicate id's. We cannot have this! The fix came in the form of a coalesce and a max. Finding the largest id and incrementing from there does the trick! Until my IPM meeting came around, and my mentor noticed that I wasn't exactly storing my data properly. Using most of my functions based on the ID of a game and not giving my database table an ID field was a sort of silly move. I can understand why the need for a change was asked.

Overall it was a really fantastic meeting with Alex. Putting in a lot of effort in the last couple of days for this and even having a few stressful moments where I almost reached out for help made for a very satisfying well-done.

Following up my bowling Java experience with some bigger ideas in Java is a bit intimidating. I'm looking forward to getting more experience with yet another language.

Thankful to have another great week of learning a ton every day.