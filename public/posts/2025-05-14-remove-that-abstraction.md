---
title: "Remove that abstraction!"
date: "2025-05-14"
---

During my weekly meeting with Micah today I was going into it with my head high and with the intention of showing off my very first multi-method! This feeling of victory was soon changed to one of missunderstanding. A realistic view at my work helped me understand that I was misusing the multi in the first place! As Micah mentioned, why would you create this abstraction and then leave it in the source file. This kind of method turns into a "code smell" which we want to avoid at all costs of course. As suggested I will be rethinking the implementation of the method and where the calls for it should live.

After my meeting, I spent the rest of the day watching over the Dependency Inversion Principle video again and researching exactly how I want to explain the principle. Coming up with ideas for a simple diagram that shows not only the inheretence of a interface between high and low level modules, but the effects on compile and run time dependencies that these have. I am hopeful that my presentation will sit well with the team and look forward to their feedback!