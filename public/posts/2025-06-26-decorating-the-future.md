---
title: "Decorating the future"
date: "2025-06-26"
---

The Decorator Design Pattern is a great pattern to keep in mind when working in a functional programming space. This pattern gives us developers a way of building behavior on top of a previous class or interface without going into the code of that object and changing anything. The idea is based on stacking the new functionality together. Creating 'wrappers' that will enhance the previous version of whatever object you had started with. This comes with some caveats that could end up introducing new barriers in the future of your program. If this system isn't designed properly it could be a challenge to remove the layers of a wrapped object.

The design pattern does help us follow some SOLID principles like the Single Responsibility and Open/Closed principles. Allowing each new wrapper to focus on a specific behavior ensures SRP is followed and by continuing to build on the original object we are extending its behavior without ever touching the source code.