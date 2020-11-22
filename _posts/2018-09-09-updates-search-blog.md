---
layout: post
title:  "HTTPS, Live Search, and a new blog"
author: clarklab
---

After a few years on the backburner, we're finally moving Chowdown up to a low simmer. We're back with a slew of updates like HTTPS, live search, our first pull request, and this blog!

A quick runthough the new goodness:

- HTTPS for [chowdown.io](https://chowdown.io) is now enabled by default, thanks to recent changes by Github Pages. If you're hosting with Github, enabling it for your own site is as simple as using the correct A/CNAME/DNS records.
- A simple live search is now available at [/search](/search). It indexes the recipe title and the ingredients (so you could find stuffed peppers by searching either "pepper" or "goat cheese").
- This may seem ordinary elsewhere, but I wanted to take a quick minute to celebrate Chowdown's first pull request. We've had a few forks and comments over the years, but I wasn't really watching the project like I should, and now that we're back on track, it's time to celebrate 🎉🙌. You can see it [here](https://github.com/clarklab/chowdown/pull/8), where [@maartenpaauw](https://github.com/maartenpaauw) submitted a little fix that enabled component recipes to have ingredients of their own. Nice!
- A new readme is up in the root of the repo, (read it [here](https://github.com/clarklab/chowdown)). Moving forward, I'll keep updating it and plan to keep an eye on the beginner use-case (which is me, I'm still new to Jekyll).
- Changed the default typeface to [Inter UI](https://rsms.me/inter/), from Rasmus Andersson. Previously we were using [Karla](https://fonts.google.com/specimen/Karla).
- Last but not least, I've added a simple blog template (this one!). That means I'll be posting some updates here on [chowdown.io](https://chowdown.io), but also that you can use the blogging template in your own install (if you're into that).

New features hopefully coming in the next few weeks:

- Reworked templates, including some design tweaks and a swap to the latest version of BassCSS.
- PWA stuffs, like more "add to homescreen" and offline caching.

I'll try to post some updates on new projects soon, and I'm always looking for feedback (and recipes! submit via pull request!). Until then, happy cooking!