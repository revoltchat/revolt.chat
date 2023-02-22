---
title: "Improving User Safety on Revolt"
description: Introducing new reporting features and talking about spam.
author: Paul Makles
coverImage: /content/blog/architecture-overhaul/cover.png
date: "2023-02-22T10:00:00.000Z"
giscus: true
---

We are rolling out new features to help ensure users stay safe while on the platform, primarily looking to tackle spam and abuse on the platform, as well as this we've been working hard to improve Revolt behind the scenes and more information about this will come out over the next few months!

# In-App Reporting

To streamline reports to the moderation team and to allow us to respond quickly and reliably to reports, we're introducing a new way to report content on the platform. You can now report any message, user or server directly from the client. Once a report is actioned you will be notified in-app.

[screenshot in-app]

In the future you'll also be able to see your pending and resolved reports in-app.

# Updating Guidelines for Revolt Discover

We have updated our guidelines on servers which may be listed on Revolt Discover:

-   Your server must have adequate moderation, in the sense that content that breaks platform rules must be reported and deleted within a reasonable timeframe (this depends on the size of your server but ideally within 24 hours)
-   You may not list servers for the sole purpose of promoting an external service or website, this degrades the user experience
-   You may not intentionally manipulate your listing position

In addition to this we would also like to clarify that you must send at least one message every week to keep your server listed, this is just used as a measure to automatically hide inactive servers from Discover.

# rAuth is now Authifier

The authentication component used in Revolt (formerly rAuth) is now called [Authifier](https://github.com/Authifier) and will be used to contain other related projects going forwards.

# Combating Spam

To help us more effectively combat spam, we have introduced additional checks during account registration to block malicious actors.

While not all anti-spam rules can be shared, some key changes include:

-   Disposable emails (not aliasing services) are no longer permissible on Revolt as accounts originating from such services are overwhelmingly almost all spam. These also provide no ability for the user to recover their account.
-   Email hosted on Freenom domains is entirely blocked due to past repeated abuse, you can contact support for an exception.

These checks are performed by a new service part of Revolt called Authifier Shield. So far since deployment, Shield has helped block three cases of spam and abuse, in all cases causing the parties involved to effectively cease. Shield can adapt to a variety of situations relatively quickly due to its modular design and will likely be used to help other services and websites in the future.

Below is a snippet of data regarding the number of accounts that were banned at any given time vs. the number of registrations that were blocked against time.

<img style="margin: auto; display: block;" src="https://autumn.revolt.chat/attachments/RRB2ob0R2FJFsvQTY1NvEaQyTCvHgTHLzJ2J9xg4XL/chart.png" alt="Graph of banned accounts vs. blocked registrations" />
