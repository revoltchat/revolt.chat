---
title: "0.5.3 Release: Architecture Overhaul"
description: How Revolt's back-end was rebuilt from the ground up along with a brand new permissions system.
author: Paul Makles
coverImage: /content/blog/architecture-overhaul/cover.png
date: "2022-05-08T14:00:00.000Z"
giscus: true
---

# It's finally here!

After [4 months of development](https://github.com/revoltchat/delta/commit/0fdb7491996e11e6e4aae189d6fc3a1f2d2a25c3), and several weeks of teasers and hype, the old server is out and the new back-end is in.

The new architecture brings a host of major improvements:

-   Re-designed permissions system
-   Private channels
-   Fully distributed
-   Abstracted from the ground up
-   Automation for API specifications
-   ... and honestly way too much stuff to mention

We now have a really solid base to build more features on top of, the workflow has never been faster and iterating on Revolt is getting better by the day. I can only hope that this will help us develop and ship more features faster than ever before.

Stay Tuned 🎉

---

## Permissions System

The old permission system was in dire need of a rework, it was pretty much just a early solution.

It had some really serious issues:

-   No effective ranking between roles: lower ranking roles were treated the same as higher ranking roles
-   No fine-grained overrides on roles and channels
-   No private channels

This was definitely a blocking factor for communities to adopt the platform, because really nobody should be expected to operate a community with such conditions. This update is in part meant to address this problem.

### So how do they work?

Our system departs slightly from more conventional permissions systems used on other platforms but hopefully it'll be worth it for the finer control you have over your roles and channels.

> Roles are currently given an absolute ranking, with smaller numbers taking precedence or otherwise have more priority over greater numbers. For example, **-5** will win out on **5**. We hope to build a more intuitive UI in the future.

To calculate a user's permissions in a server:

-   Apply allows given by the `Default` role.
-   For each role the user has: (from lowest to highest)
    -   Apply denies given by the role.
    -   Apply allows given by the role.

In essence, this means you can do stuff like create a "muted" or "restricted" role which removes permissions granted earlier down the role hierarchy. For example, the user below has a role which restricts their ability to view channels:

![](/content/blog/architecture-overhaul/example1.png)

Then to calculate a user's permissions in a channel:

-   Take the known server permissions.
-   Apply denies given by `Default` role on channel.
-   Apply allows given by `Default` role on channel.
-   For each role the user has: (from lowest to highest)
    -   Apply denies given by the role.
    -   Apply allows given by the role.

For a flow chart and more information, please see [the developer documentation](https://developers.revolt.chat/stack/delta/permissions).

---

## Abstraction

Let's discuss a bit about how the entire architecture has changed...

-   [delta](https://github.com/revoltchat/delta) is no longer a combined API / WebSocket server, its sole job is to provide the REST API now
-   [quark](https://github.com/revoltchat/quark) is a brand new project which allows us to better structure the development of Revolt's back-end
-   [bonfire](https://github.com/revoltchat/bonfire) is a brand new events service which replaces delta's WebSocket server
-   In terms of Revolt's database models, **quark** is split up into several layers:
    -   `models`: each model is defined separately from any logic
    -   `traits`: each model is given a set of traits that need to be implemented by some database
    -   `impl`: implementation layer for databases (we currently support a mock database and MongoDB)
    -   `generic`: additional generic methods which use the traits to build more complex queries and to generate events
-   As mentioned before, everything is fully distributed by now fully relying on Redis for both PubSub and presence information across the network, components are now almost entirely plug-and-play.
-   An API specification is now generated [directly from the API](https://api.revolt.chat/openapi.json) and can be viewed using [Swagger](https://api.revolt.chat/swagger).
-   [revolt-api](https://github.com/revoltchat/api) is a new JavaScript library which takes this OpenAPI specification and generates TypeScript types and provides us with a fully typed query builder.
-   [revolt.js](https://github.com/revoltchat/revolt.js) now also relies on **revolt-api** to provide typings and for strongly typed queries.
