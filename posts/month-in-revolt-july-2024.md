---
title: "Month in Revolt - July 2024"
description: The monthly blog update for June–July period.
author: Revolt Team
coverImage: /content/blog/month-in-revolt-july-2024/cover.png
date: "2024-07-30T18:00:00.000Z"
giscus: true
---

It's been a minute but we're back and still technically on time! Since our last post, we decided a better approach would be to change the format to roughly cover the past month rather than confine ourselves to a set period. The blog posts will continue to come out every month but will now be named after the month they come out.

If you missed the last one, [check it out here](/posts/month-in-revolt-may-2024)!

## Web Client

The new web client is inching ever closer to completion.

Since the last update, the client received minor updates including:

<!-- -   Improvements to connection stability, hopefully addressing the dreaded stuck _Connecting_ message. Further work needs to be done here, but it's much more reliable than before! -->

-   You can now sign up using the new client, as well as reset your password / verify your email.
-   Multi-factor authentication is now required to delete servers to prevent accidental deletion. <!-- not compulsary on API -->
-   Account deletion is blocked until all owned servers are deleted or transferred. <!-- not compulsary on API, expand for bots? -->
-   Quickly create or join a server using the '+' icon in the server list.

### 🎨 Upgrading Markdown

![Screenshot showcasing Markdown in the new client, showcasing everything is implemented. It includes text with bold, italics, both, strikethrough, links, spoilers, items, sub-items, inline code, code blocks, quotes, KaTeX, tables, timestamps, mentions, and links.](/content/blog/month-in-revolt-july-2024/web-1.png)

###### Screenshot of Markdown in new client

Markdown has been reimplemented in the new client and comes with a few minor improvements:

-   KaTeX now requires the use of two dollar signs (`$$`) around formulas.
-   All timestamps now show the exact date and time on hover.
-   Relative timestamps are now updated live.
-   Sending links to channels/messages will shorten them to just display the channel name.
-   Spoilers now use two pipe characters (`||`) instead of exclamation marks (`!!`).
-   Spoilers are now much more consistent and can now have rich text inside of them!

### 🚧 New Settings

Bit by bit, the settings are being reimplemented to a much higher standard than before.

<video src="/content/blog/month-in-revolt-july-2024/screencast-settings.webm" autoplay muted loop></video>

###### Screencast showcasing the account, profile, and bot pages

## iOS Client

Over the past month, we've been busy chipping away at various features on the iOS client. At this point, we've implemented all the easy stuff, and now we're working on the more difficult features we avoided at first (last mile problem and all that).

### ☁️ Push notifications

Push notifications have now been properly implemented in both the frontend and backend, which allowed us to ~~ping each other relentlessly~~ get each other's attention when needed.

![Basic push notifications are being sent to an iOS device.](/content/blog/month-in-revolt-july-2024/ios-push-1.png)

###### Don't worry about all the IDs in the header and whatnot, this is just a picture from when we first got them working.

We thought we could do better though, and we set about to implement avatars into the notifications. Turns out this is quite complicated and involves creating a whole separate background app.
So that's exactly what we did.

![Upgraded push notifications sent to an iOS device.](/content/blog/month-in-revolt-july-2024/ios-push-2.png)

###### You can reply to messages directly from the notification by long pressing on it

These aren't final designs, but getting this far has been quite the adventure.

### ⚙️ Settings

Any good mobile app needs to have settings, so we've done just that! You can now manage your account settings, your sessions, and your appearance from the settings page. Soon to come: managing your profile!

## Behind The Scenes

Revolt's backend continues to receive regular fixes and improvements, if you'd like to keep up with changes as a developer, you can visit [the releases page on GitHub](https://github.com/revoltchat/backend/releases).

Minor notable changes:

-   Add a limit to the number of outgoing friend requests users may have at once ([0.7.9](https://github.com/revoltchat/backend/releases/tag/20240623-1)) and set lower limits for new users ([0.7.10](https://github.com/revoltchat/backend/releases/tag/20240625-1)).
-   Message events now include user/member information so apps and bots don't have to fetch additional information about users if it's missing ([0.7.11](https://github.com/revoltchat/backend/releases/tag/20240625-2)).
-   Added support for 'silent' messages that suppress push/desktop notifications ([0.7.12](https://github.com/revoltchat/backend/releases/tag/20240626-1)).
-   Server member leave events now include whether the leave was due to a kick or ban ([0.7.14](https://github.com/revoltchat/backend/releases/tag/20240710-1)).
-   Fix users being unable to leave/be kicked from group chats ([0.7.14](https://github.com/revoltchat/backend/releases/tag/20240710-1)).

### 🔧 End of Refactoring

About one year ago, work started to [improve the backend](https://github.com/revoltchat/backend/issues/239) and put it in a more reasonable state. This finally came to an end on the 11th of June when the old backend was put out of production.

In essence, changes were made that:

-   Decouple the database from the API, allowing us to change the database or the API without breaking one or the other.
-   Split off API models, allowing developers to easily pull them in under an MIT license.
-   Start work towards implementing testing throughout the whole project.

Some issues did arise that were promptly fixed except for a non-obvious bug with how user connections were being cleaned up: users started reporting sudden reconnects while server load was nominal, investigation into the issue proceeded as follows:

-   KeyDB (used as the message broker, a component that handles sending messages to the right places) was identified as not being able to handle the inflated load (more on this later)
-   It was replaced by Dragonfly which pushed server resources much further but as a result server load was much higher, see graph below. On the plus side, users were now able to use the platform as normal.

![Graph showing internal network usage would slowly climb and overwhelm the server.](/content/blog/month-in-revolt-july-2024/internal-network-traffic.png)

###### Network traffic graph for 19–21 June

-   Assuming the issue had to do with the vast amount of user update events being fanned out, a change was made to the backend which meant Revolt clients must manually subscribe to user updates in servers. (not affecting bots)
-   This didn't help the situation and now Dragonfly was also suddenly dropping events seemingly at random.
-   After a bit more investigation, it was found that the root issue was actually that connections to KeyDB/Dragonfly were not being cleaned up when users disconnected.
-   A patch was created and pushed out that solved this issue.

Some takeaways from this situation:

-   The bug caused about a 50-80x increase in internal traffic, which does bode well for potential future growth, it indicates there is overhead to spare.
-   We should replace Redis(/KeyDB/Dragonfly) with a proper message broker such as RabbitMQ.

# From The Community

If you have a cool project/art/thing related to Revolt that you've made or otherwise like to share, drop into the [#Month in Revolt](https://rvlt.gg/Testers) channel in the Revolt community server. We'd love to give you the opportunity to have it featured in this series.

![ms paint drawing by doru](/content/blog/month-in-revolt-july-2024/community-1.png)

###### 2 second drawing by Doru, [permalink](https://app.revolt.chat/server/01F7ZSBSFHQ8TA81725KQCSDDP/channel/01HXKSABKSDC3WMR1AVC67TEN1/01J0P2EQP5C9W16PXNZ24W1SKQ)

# The Loop

In our continued effort to increase transparency around the Revolt project, we'll now be publishing an additional section here detailing (if any) relevant information to everyone.

Have any questions or feedback? Go to our [feedback](https://github.com/orgs/revoltchat/discussions/categories/feedback) or [Q&A](https://github.com/orgs/revoltchat/discussions/categories/q-a) discussions on GitHub.

### 📱 iOS source release

The upcoming iOS app is now open source, accompanying statement by Zomatree:

> This is both to hopefully aid in its development by allowing others to contribute (i don't have loads of free time to work on revolt with my full-time job), and to also help with the on-going transparency issues in revolt.
>
> Although the app was always planned to be open sourced i wanted to do it when it in more of a polished state, however i've decided to open source it now instead to help address the concerned the community has brought up.

You can check it out now at [github.com/revoltchat/ios](https://github.com/revoltchat/ios)!

### ⚙️ Coming organisational changes

Revolt's current organisational structure has proven unsustainable and we are working to rebuild it from the ground up. We don't currently have any more information to share since we are currently in the process of drafting up a new operating structure.

### 🚶 Holiday season

It's officially the holiday season and we'll be going a bit slower through to August, please be patient with us regarding issues and support tickets.

### 🌎 Update on prior post

Unfortunately, we do not have any licensing update to provide for Shield / Discover just yet. Both are likely to be published soon, they are currently blocking on developer time but we are trying to schedule it.
