---
title: "Usernames are Evolving"
description: Now more personal than ever.
author: Revolt Team
coverImage: /content/blog/evolving-usernames/cover.png
date: "2023-06-11T19:00:00.000Z"
giscus: true
---

We're changing the way usernames work on Revolt. After our initial implememtation with unique username handles, we are now replacing it with brand-new display names and usernames with a four-digit number tag. We worked alongside our community in the making of this transition. Read on to learn what's coming now for Revolt, and a very special feature announcement.

## So, how does the new system work?

Your number tag is an extra part of your username, which differentiate you from people with the same name. Internally, your number tag is referred to as a **discriminator**. The term "discriminator" comes from the concept of distinguishing between users with similar usernames. Since the discriminator is unique to each user, it serves as an identifier to differentiate users who share the same username.

We settled on using a 4-digit number tag: It will be more than enough for Revolt and we are leaving the door open to expand this in the future. The transition over to discriminator-style usernames is automatic and requires _no additional work on your part!_. Once you update your client, you should see a new pop up with your new display name, along with your username and new four-digit number tag. If you don't end up liking your display name or username, you can update them in your Profile and My Account settings pages respectively at any time.

## Why is this a valuable solution?

During our recent RFC, we engaged the Revolt community in a discussion regarding a significant change to our username system. We carefully considered the advantages and disadvantages of implementing this new system, which include, but are not limited to:

### User empowerment through personalized usernames.

Selecting an available username that truly reflects one's identity has become increasingly challenging. Our number tag system allows users to choose their desired username, as long as it meets the minimum requirement of being two letters long. This feature benefits individuals such as content creators, who value their privacy and prefer to maintain a lower profile, ensuring that their usernames remain less discoverable.

### Combating unauthorised account activities.

With this change, we aim to address issues related to account selling, trading, and instances of attempted theft, which have unfortunately led to threats and bullying in some cases. Our new system aims to prevent such incidents, promoting a safer and more secure environment for all users.

### Ensuring fairness and equal opportunities.

Our revamped number tag system employs a fully randomized approach, ensuring fairness for everyone involved. To prevent the exploitation of "rare" or "desirable" number combinations, we have implemented a blacklist. This approach aims to discourage account selling or theft, particularly with regard to usernames possessing sought-after four-digit combinations.

## What else is cooking at Revolt?

We're almost ready to bring you WebHooks, which allow you to set up real-time notifications and triggers between Revolt and other platforms. Imagine receiving instant updates from your favourite social media, project management tool or timed events, directly within your Revolt community. With WebHooks, you'll always be in the loop.

The Revolt team is also working on bringing a brand new experience for the web, along with the development of new native apps for both Android and iOS. **The current web client** (called `revite` for you super-🤓s) **enters maintenance mode** and only receives necessary (like security-related) updates, in favour of a new all-around web and desktop client with improvements both to speed and performance, and a brand new coat of paint added on top.

We'd like to thank everyone for your continuous support for Revolt and hope to see you at our next blog post.
