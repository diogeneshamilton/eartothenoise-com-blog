---
title: I Built an AI Stretching Coach for a Kids' Speaker (Yoto)
date: 2025-10-10T00:00:00.000Z
draft: false
permalink: /daily-stretch/
tags: posts
layout: "layouts/post.njk"
---

Last month [Yoto announced a developer challenge](https://yoto.space/news/post/build-a-yoto-app-and-you-could-win-up-to-5-000-hQVNmKqCsfLNoj0) for their screen-free audio player, and I thought "why not?"

So I built [Daily Stretch](https://share.yoto.co/s/4HiAP3hhZ0gKb0wrmsPAp3) - an app that generates a fresh stretching routine every single day. No screens, just audio guiding you through 5-10 minutes of movement.

![](./Nlt0MCg5QQmrlh9Rx90qb.avif)

## The Setup

The tech stack is pretty straightforward:

* Claude writes the daily stretching scripts
* Each script is for a specific day, using a monthly theme (for example, October is fall + Halloween + fun spooky)
* Gemini Text-to-Speech turns them into audio
* API endpoint just points to the right file (deployed to Google Cloud Run)

## The Tricky Part

Getting the AI to generate good stretching instructions was harder than I expected. The first few attempts were... not great. Claude would rapid-fire instructions without giving you time to actually DO the stretch (and it still does this on occasion).

It took a few iterations to get the prompt right. I had to be really specific about:

* Building in pauses between instructions (you need time to get into position!)
* Timing each hold properly
* Smooth transitions between stretches
* Keeping an encouraging, calm tone throughout

Turns out there's a big difference between "generating a list of stretches" and "creating an audio experience that feels natural."

![](./YotoStore.png)

## What's Next

[Daily Stretch](https://share.yoto.co/s/4HiAP3hhZ0gKb0wrmsPAp3) is live! I'm curious whether people will actually use it daily or if the novelty wears off after a week or two.

If you have a Yoto player and want to try it, I'd love your feedback - especially if you use it with kids. Does it hold their attention? Is the pacing right?

I'm also thinking about this pattern more broadly - AI-generated daily content that feels natural and human. Could work for other types of audio experiences too.
