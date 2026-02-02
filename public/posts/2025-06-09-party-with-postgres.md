---
title: "Party with Postgres"
date: "2025-06-09"
---

A big step today in my project! A postgres database will be implemented as a usable storage device.Spending most of today in a sandbox environment, I have learned how to do full CRUD operations against my local postgres database. Using clojure's built in jdbc as a dependency allowed me to start up my test suite. Running an initial test as just a connection test, something like 'SELECT 1 AS one'. This ensures that my connection is up and running regardless of the data stored in any tables. Once this was in place I moved toward the more challenging cases of creating, and updating. Luckily, using the jdbc with the specs of the DB makes is very simple to create the queries. In my opinion at this point, the more challenging part is to maintain the data properly, as there needs to be changing of data types to properly store my state as it is now. There are a couple of options that I could use to store my state, one being a full state object stored in my db as a JSONB. This allows a simple transfer of the full object, which is what I am currently doing to my other data services. The other is to create individual rows in the DB for each peice of state. This worked in my sandbox but resulted in a way more code and parsing. Once the inital setup is in place however, you only have to change a couple of keys at a time, the board and turn.

I beleive I will attempt to fully implement the JSONB object into the database first, as this is mirroring what I already have in place and will likely be an easier first solution. If my client requests that it look differently then I will change it.

I'm having fun getting back into SQL and handling data outside of my projects environment