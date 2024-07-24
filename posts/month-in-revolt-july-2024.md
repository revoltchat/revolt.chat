---
title: "Month in Revolt - July 2024"
description: The monthly blog update for June–July period.
author: Revolt Team
coverImage: /content/blog/month-in-revolt-july-2024/cover.png
date: "2024-07-22T10:00:00.000Z"
giscus: true
---

<!-- TODO write about change in format from 'month overview' to 'past ~1 month overview', easier for team to manage, blog post will be named after month it is released in, continues to be monthly, etc -->

## Web Client

The new web client is inching ever closer to completion.

This past month, the client received minor updates including:

-   Improvements to connection stability, hopefully addressing the dreaded stuck _Connecting_ message. Further work needs to be done here, but it's much more reliable than before!
-   You can now sign up using the new client, as well as reset your password / verify your email.
-   Multi-factor authentication is now required to delete servers to prevent accidental deletion. <!-- not compulsary on API -->
-   Account deletion is blocked until all owned servers are deleted or transferred. <!-- not compulsary on API, expand for bots? -->
-   Quickly create or join a server using the '+' icon in the server list.

### 🎨 Upgrading Markdown

![Screenshot showcasing Markdown in the new client, showcasing everything is implemented. It includes text with bold, italics, both, strikethrough, links, spoilers, items, sub-items, inline code, code blocks, quotes, KaTeX, tables, timestamps, mentions, and links.](/content/blog/month-in-revolt-july-2024/web-1.png)

###### Screenshot of Markdown in new client

Markdown has been reimplemented in the new client and comes with a few minor tweaks:

-   KaTeX now requires the use of two dollar signs (`$$`) around formulas.
-   All timestamps now show the exact date and time on hover.
-   Relative timestamps now update live.
-   Sending links to channels/messages will shorten them to just the display the channel name.

### 🚧 New Settings

<!-- TODO -->

-   the new settings pages, account, bots, profile
    add a gif here that demonstrates the animations

## Behind The Scenes

Revolt's backend continues to receive regular fixes and improvements, if you'd like to keep up with changes as a developer, you can visit [the releases page on GitHub](https://github.com/revoltchat/backend/releases).

Minor notable changes:

-   Add a limit to number of outgoing friend requests users may have at once ([0.7.9](https://github.com/revoltchat/backend/releases/tag/20240623-1)) and set lower limits for new users ([0.7.10](https://github.com/revoltchat/backend/releases/tag/20240625-1)).
-   Message events now include user/member information so apps and bots don't have to fetch additional information about users if it's missing ([0.7.11](https://github.com/revoltchat/backend/releases/tag/20240625-2)).
-   Added support for 'silent' messages that suppress push/desktop notifications ([0.7.12](https://github.com/revoltchat/backend/releases/tag/20240626-1)).
-   Server member leave events now include whether the leave was due to a kick or ban ([0.7.14](https://github.com/revoltchat/backend/releases/tag/20240710-1)).
-   Fix users being unable to leave/be kicked from group chats ([0.7.14](https://github.com/revoltchat/backend/releases/tag/20240710-1)).

### 🔧 End of Refactoring

About one year ago, work started to [improve the backend](https://github.com/revoltchat/backend/issues/239) and put it in a more reasonable state. This finally came to an end on the 11th of June when the old backend was put out of production.

Some issues did arise that were promptly fixed with the exception of a non-obvious bug with how user connections were being cleaned up: users started reporting sudden reconnects while server load was nominal, investigation into the issue proceeded as follows:

-   KeyDB (used as the message broker, a component that handles sending messages to the right places) was identified as not being able to handle the inflated load (more on this later)
-   It was replaced by Dragonfly which pushed server resources much further but as a result server load was much higher, see graph below. On the plus side, users were now able to use the platform as normal.

![Graph showing internal network usage would slowly climb and overwhelm the server.](/content/blog/month-in-revolt-july-2024/internal-network-traffic.png)

###### Network traffic graph for 19–21 June

-   Assuming the issue had to do with the vast amount of user update events being fanned out, a change was made to the backend which meant Revolt clients must manually subscribe to user updates in servers. (not affecting bots)
-   This didn't help the situation and now Dragonfly was also suddenly dropping events seemingly at random.
-   After a bit more investigation, it was found that the root issue was actually that connections to KeyDB/Dragonfly were not being cleaned up when users disconnected.
-   A patch was created and pushed out that solved this issue.

Some takeaways from this situation:

-   The bug caused about 50-80x increase in internal traffic, which does bode well for potential future growth, it indicates there is overhead to spare.
-   We should replace Redis(/KeyDB/Dragonfly) with a proper message broker such as RabbitMQ.
