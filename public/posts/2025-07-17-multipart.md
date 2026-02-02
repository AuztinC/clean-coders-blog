---
title: "Multipart"
date: "2025-07-17"
---

A multipart POST request was at the top of the spec list today. This was a big challenge. This was my first step into accepting a POST so I didn't even have checks for it. Deciding to focus on the multipart form data aspect, I start my check for that value in the content type. Once I am inside of the call, I needed to parse the body and remove the boundaries and hyphens. After a long time of messing with parsers and finding the exact combination of map, filters and substrings; I was able to achieve victory. Then came building the html page and pulling out the information itself. A really big boost to my motivation after the rough meeting yesterday.

Todays work was a big challenge and took me working late into the afternoon. It came with understanding some new concepts like boundaries, multipart/form-data, and Content-Disposition.