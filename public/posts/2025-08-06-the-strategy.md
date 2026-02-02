---
title: "The Strategy"
date: "2025-08-06"
---

Hearing what Micah and Alex had to say about my project was great. Understanding my previous mistakes is a huge benefit in the long run. I am thankful to have another week to go back and fix some of my errors. I need to show my understanding about the clojurescript environment and the cause to separate specific implementation details.

The Strategy and Template design patterns. Strategy is a behavioral design pattern that lets you define a family of algorithms, put each of them into a seperate class, and make their objects interchangable. Using external polymorphism we can separate high level policy from a set of low level details. Template on the other hand uses an internal polymorphism pattern. This pattern implements an abstract method that helps partition high level policy from low level implementaiton detail. Template is a smaller pattern that doesn't need an external interface and will be faster because of this. Although, having that extra layer of separation is prefered in most cases.