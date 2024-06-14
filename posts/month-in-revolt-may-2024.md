---
title: "Month in Revolt - May 2024"
description: Find out what we've been up to in our monthly blog series.
author: Revolt Team
coverImage: /content/blog/month-in-revolt-may-2024/cover.png
date: "2024-06-06T23:50:00.000Z"
giscus: true
---

We often see people come and ask how Revolt is progressing, and often people are quite dismayed to not see any sort of major progress updates.

We're happy to announce that will now be changing as we start publishing a new monthly blog series detailing what we've been up to so that you don't miss out!

## Android App

Announced [October last year](/posts/revolt-on-the-go), the Android app has come a long way since and aims to provide the best possible Revolt experience on Android.

###### Preview of current app design

![Preview of current app design](/content/blog/month-in-revolt-may-2024/android-1.png)

We're happy to announce the next phase of beta testing ~~will commence soon~~ has commenced, which means you are now able to see the app's [source code](https://github.com/revoltchat/android) while the testers try out the exciting new features to the best of their ability. You can join our Google Play beta ring by asking in [the Android development server](https://rvlt.gg/PYDppbnD).

> **Jennifer** says "Making an app for a feature-rich platform like Revolt can take quite a while, especially if your goal is to write code that is both sturdy and can be expanded upon years into the future. It's actually quite an iterative process to get everything to feel 'just right', considering both the obvious parts, such as how the user may behave, as well as smaller details, like users on larger screens or optimal thumb placement on phones. For example, I can show you some screenshots made during the development of the upcoming attachment preview. I hoped to get it to feel just right in the end, and I think I may have done it!"

###### Design iteration of attachment previews in file picker

![Design iteration of attachment previews in file picker](/content/blog/month-in-revolt-may-2024/android-2.png)

## Voice/video calling

We've started preliminary work on replacing our old voice server with a completely new, battle-tested real-time media server. It's based on the same technology that powers the [Zed](https://zed.dev/) code editor among other things.

This means that video calls, screen sharing, and proper calls are all monumentally closer, albeit we still need some time to cook. We'll share more as soon as we have more to say, but for now enjoy this exclusive peek at a tech demo we were experimenting with for the new real-time media server:

###### Proof of concept implementation in new Revolt for Web

![Proof of concept implementation in new Revolt for Web](/content/blog/month-in-revolt-may-2024/rtc-1.png)

## New developers website

Our developers website has gotten a refresh and has been designed to be as easy as possible for anyone to contribute to its improvement. You can check it out now at [developers.revolt.chat](https://developers.revolt.chat).

###### The new developer website

![The new developer website](/content/blog/month-in-revolt-may-2024/dev-1.png)

## Tidbits

Here are some things that don't deserve their own section but are worth mentioning:

-   Development of the new web frontend is now back on track, so look out for the coming monthly updates as things will be changing fast!

## Addendum

Section added **7th June 2024**.

Written by insert.

While I was initially intending to leave this until all commitments were met, the overwhelming response says this should've been acknowledged. I personally did not see this as a huge deal to cover here, and that's my own fault, I think I just became out of touch with the situation after being completely burnt out from the whole thing.

So what am I talking about? The licensing controversy addressed [in this post](http://affine.revolt.wtf/share/5e2dc870-4d69-4986-be52-3d51788d59bb/OoC7aqieazghQqM1CPhT-) (includes definitions), please go read that for the full context on the situation.

And, what has been done since?

-   We've dropped the Contributor License Agreement (CLA) in favour of the Developer Certificate of Origin (DCO).
-   The Android app has been released libre.
-   Admin panel has been released libre.

What still needs doing?

-   Auxiliary projects still need to be open sourced, namely Shield and Discover.
-   We should introduce a Fiduciary License Agreement (FLA) down the line to still allow contributors to protect their contributions.

# From The Community

If you have something you've made or otherwise like to share, please get in contact and we'd love to give you an opportunity to have it featured in this series.

You can drop into [#Month in Revolt](https://rvlt.gg/Testers) in the Revolt community server or [reach us another way](https://support.revolt.chat/contact).
