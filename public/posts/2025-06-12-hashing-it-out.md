---
title: "Hashing it out"
date: "2025-06-12"
---

Arrays are great. Using a simple array for a large amount of common problems will be a sufficient way to store, and access data. This has proven true for many projects of my own that utilize an array at the hard. The tic-tac-toe that I have been building, for example. An array of strings is ultimately the source of visuals as well as scoring the game. All of this has the ability to happen extremely fast with little to no stutter in operations. But when the amount of data beigns to grow into a something unpredictable size, we might need an alternative. If have a normal array that is full of objects, and we need to find the objects whos id is equal to 3, this will be a costly operation. We must look into each index, typically from the start using a for-loop, and ask each entity if its id is 3.

The trick to using an array efficiently is knowing the index of the item you are trying to access ahead of time. This is where a hashMap will begin to shine. Using a system that will rely on a hash-function that can convert a key in a key-value pair to a unique index of your map. Once an item is stored using this hash-function, you can re-use the function to get the index again, and look it up. Using this allows for a simple operation that will result in the same pointer. Collisions do happen if the hash-function is not well tuned, and this can be solved with buckets. Linked-lists that live inside of each index of the original hashmap and allow an endless and expansive amount of nodes.

Having collisions adds a lot of problems in the future of the storage and should be avoided when possible, but there are ways to handle it.

Hopefully my presentation about hashmaps will resonate in some way. I am looking forward to presenting it tomorrow.