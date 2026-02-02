---
title: "Becoming a 'Server'"
date: "2025-07-15"
---

Today marked a big shift—from parsing requests to actually serving files. It finally feels like my HTTP server is becoming a real server. Using java.nio, I figured out how to send files back in the response body, along with the correct Content-Type and other headers like Content-Length. Getting those headers right was satisfying—it made the communication feel complete, not just some hacked-together protocol parsing.

Another big win was tying the test suite to my compiled .jar file. Now I can build the project and run the specs cleanly against the latest version of the server. It’s a small thing, but being able to hit build and see some specs pass gives me real confidence that I’m heading in the right direction.

I still feel the weight of trying to adhere to the principles behind clean code and good architecture, especially in a language that isn’t second nature to me yet. But today was a good day. My server responded, and so did my motivation.