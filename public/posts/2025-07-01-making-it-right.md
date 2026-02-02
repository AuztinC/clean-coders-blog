---
title: "Making it right"
date: "2025-07-01"
---

Spending the better part of today in a meeting with my mentor was a huge help. Refactoring my database has been a longer project than expected. Understanding what the data should look like can be a tough thing to grasp. The previous version of what my data could be was ugly and hard to understand, having functions that are almost identical for two tables that really could just be one. Changing my whole structure to a single state object was not easy. It involved changing every function in my database implementation. Removing the need to have a 'current' and 'previous' games and simply having a single list of games. Sure, the postgres storage might have a second table but it is directly related to the games via a 'gameid'. The file based persistence is now being handled in a similar fashion, but not exact. This looks more like a single hashmap with all of the data behind a single 'id' for that game. This map carries a :state and :moves key and stores the same data as postgres.

After having these two setup I was thrilled. Once I realized that the :mem implementation had to be done, I was slightly deflated.

Tomorrow morning is slightly stressful and I am hopefull that I will have everything working for IPM.