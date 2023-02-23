---
title: "Three new ways Revolt will be improving user safety"
description: Introducing in-app reporting, updated guidelines for Revolt Discover and built-in anti-spam measures.
author: Paul Makles
coverImage: /content/blog/improving-user-safety/cover.png
date: "2023-02-23T20:00:00.000Z"
giscus: true
---

The Revolt team is committed to providing a safe and secure platform for our users. As such, we are rolling out new features to help ensure users stay safe while on the platform, primarily tackling spam and abuse on the platform. We've also been working hard to improve Revolt behind the scenes, and we're excited to share some of the news in the next few months.  
In the meantime, here's what we've been working on:

# In-App Reporting

To streamline reports to the moderation team, and to allow us to respond quickly and reliably to reports, we're introducing a new way to report content on the platform. You can now report any message, user or server directly from the app. Once a report has been actioned on, you'll receive an in-app notification.

<img style="margin: auto; display: block;" src="https://autumn.revolt.chat/attachments/ZuDVIjGiCl61Pk9XGk5qfc8-idN9EnFAk55DUQp713/the.png" alt="Screenshot of In-App Reporting Modal" />

In the future, we'll be adding more features to the reporting system, such as the ability to view pending and resolved reports right from the app.

# Updating Guidelines for Revolt Discover

We have updated our guidelines on servers which may be listed on Revolt Discover:

-   Your server must have adequate moderation, in the sense that content that breaks platform rules must be reported and deleted within a reasonable timeframe (this depends on the size of your server but ideally within 24 hours)
-   You may not list servers for the sole purpose of promoting an external service or website, this degrades the user experience
-   You may not intentionally manipulate your listing position

In addition to this we would also like to clarify that you must send at least one message every week to keep your server listed. This is to ensure that servers are active and not abandoned.

# rAuth is now Authifier

The authentication component used in Revolt (formerly rAuth) is now called [Authifier](https://github.com/Authifier) and will be used to contain other related projects going forwards.

# Introducing Authifier Shield

To help us more effectively combat spam, we have introduced additional checks during account registration to block malicious actors.

While we can't share all the details of these checks, we can share some of the things we're looking for:

-   Disposable emails are no longer permissible on Revolt. Almost all accounts originating from such services are used to spam the platform. These also provide no ability for the user to recover their account. Aliasing services are not affected by this change.
-   Emails hosted on Freenom domains are also automatically blocked due to the high volume of abuse originating from these domains. However, this isn't a blanket ban and you can contact support for an exception.

These checks, along with other measures, are performed by a service called Authifier Shield, a new part of the Authifier project. So far since deployment, Shield has helped block three separate waves of spam registrations, in all cases causing the parties involved to cease their attacks. Shield can adapt to a variety of situations due to its modular nature, and will likely be used to help protect other services and websites in the future.

Below is a snippet of data regarding the number of accounts that were banned at any given time, compared to the number of registrations that were blocked against time.

<img style="margin: auto; display: block;" src="https://autumn.revolt.chat/attachments/RRB2ob0R2FJFsvQTY1NvEaQyTCvHgTHLzJ2J9xg4XL/chart.png" alt="Bar graph of banned accounts compared to blocked registrations" />
