---
title: "Month in Revolt - August 2024"
description: The monthly blog update for July–August period.
author: Revolt Team
coverImage: /content/blog/month-in-revolt-august-2024/cover.png
date: "2024-08-31T18:00:00.000Z"
giscus: true
---

If you missed the last one, [check it out here](/posts/month-in-revolt-july-2024)!

## Mobile Development

Our mobile teams have been swiftly implementing various features and polishing the experience.

### ☁️ Push Notifications

We've been hard at work iterating on push notifications for the mobile platforms, including:

-   Fixing Firebase Cloud Messaging issues which means the Android app can now receive notifications ([insert~backend](https://github.com/revoltchat/backend/commit/1fb4032d9e8e252f8fd5ae10d7b82dab58f53b86)).
-   Refactoring the push notification code ([tom~backend/pushd](https://github.com/IAmTomahawkx/revolt-backend/tree/feat/pushd)).
-   Continued work on implementing notifications on both the Android and iOS side.

![Screenshots showing push notifications on Android and iOS](/content/blog/month-in-revolt-august-2024/notif-merged.png)

<!-- montage notif-[1-2].png -tile 2x1 -geometry +20+0 -background none notif-merged.png -->

###### Screenshots showing push notifications on Android and iOS

### 🍎 iOS Teasers

Below are some teasers from the iOS team:

![Screenshots showing Spotify embeds, search functionality, and reactions](/content/blog/month-in-revolt-august-2024/ios-merged.png)

<!-- montage ios-[1-3].png -tile 3x1 -geometry +20+0 -background none ios-merged.png -->

###### Screenshots showing Spotify embeds, search functionality, and reactions

### 📱 Android Updates

And we've also got some Android updates for you!

A new image picker has been implemented using the new [Android photo picker](https://developer.android.com/training/data-storage/shared/photopicker), various stability improvements have been made, and the sidebar has been redesigned to follow Material 3 guidelines.

![Screenshots showcasing the new file picker and sidebar.](/content/blog/month-in-revolt-august-2024/android-merged1.png)

<!-- montage android-[1-2].png -tile 2x1 -geometry +20+0 -background none android-merged1.png -->

###### Screenshots showcasing the new file picker and sidebar.

A new colour picker has also been shipped to help users wishing to customise their experience to the fullest.

![Screenshots showcasing colour picker in slider, palette, and hex modes.](/content/blog/month-in-revolt-august-2024/android-merged2.png)

<!-- montage android-[3-5].png -tile 3x1 -geometry +20+0 -background none android-merged2.png -->

###### Screenshots showcasing colour picker in slider, palette, and hex modes.

### 🚧 Beta Reminder

If you're eager to try either app, you can:

-   [Request to join the Android test track here](https://rvlt.gg/jen) or [build it yourself](https://github.com/revoltchat/android).
-   [Join the iOS testlight using link here](https://github.com/revoltchat/ios#--revolt-ios) or [build it yourself](https://github.com/revoltchat/ios).

## Behind The Scenes

Revolt's backend continues to receive regular fixes and improvements, if you'd like to keep up with changes as a developer, you can visit [the releases page on GitHub](https://github.com/revoltchat/backend/releases).

Minor notable changes:

-   Switched to using distroless Docker images for the runtime. ([0.7.16](https://github.com/revoltchat/backend/releases/tag/20240830-1))

    ![Image size halved as a result](/content/blog/month-in-revolt-august-2024/backend-1.png)

    ###### Docker image size halved as a result!

<!-- -   Support for Apple Music embed information. ([0.7.15](https://github.com/revoltchat/backend/releases/tag/20240805-1)) -->

-   Various fixes for Apple Push Notifications and events. ([0.7.15](https://github.com/revoltchat/backend/releases/tag/20240805-1))
-   Support for message pins has been added by Zomatree. This will likely find its way into clients shortly. ([0.7.15](https://github.com/revoltchat/backend/releases/tag/20240805-1))
-   Created a new package [revolt-nodejs-bindings](https://www.npmjs.com/package/revolt-nodejs-bindings) intended for exposing procedure calls from the Revolt backend to various Node.js projects, notably the admin panel.

### ☁️ Migration to Backblaze B2

We have begun migrating our file server from its previous host to Backblaze B2 and we've taken measures to ensure this data can only ever be read by our servers:

-   All files uploaded to Revolt (and migrated to B2) are encrypted using a pre-shared key and the aes-256-gcm algorithm. This means only Revolt can read files back from B2.
-   All files are additionally encrypted at rest by Backblaze using SSE-B2.

We've also introduced de-duplication within the file service itself which was previously provided by the filesystem and is no longer available. As such, uploading the same file twice will mean we will get charged twice, so instead: all uploaded/processed files are hashed and are matched where appropriate to de-duplicate them internally.

The migration started on the 19th of August and by the 28th of August all files up until that point have been uploaded.

To finish the migration, Autumn needs changes made to use the new system, more information about this is provided below.

### 📦 Moving services into backend

The remaining micro-services which aren't already in the backend monorepo, are being moved into the monorepo and getting some changes in the process!

-   Both january and autumn are being migrated to [services/january](https://github.com/revoltchat/backend/tree/main/crates/services/january) and [services/autumn](https://github.com/revoltchat/backend/tree/main/crates/services/autumn) respectively.
-   They both now use axum instead of actix as the HTTP framework.
-   They both now generate an OpenAPI specification that is accessible through Scalar.
-   Since they are being moved into the backend repository, they will both gain ARM64 build support. Yippie!

![Scalar API documentation for january (dark mode)](/content/blog/month-in-revolt-august-2024/backend-2.png)

###### Scalar API documentation for january (dark mode)

![Scalar API documentation for autumn (light mode)](/content/blog/month-in-revolt-august-2024/backend-3.png)

###### Scalar API documentation for autumn (light mode)

## Web Client

_Written by insert._

Unfortunately, client work has stalled due to a lack of time on end, my focus has been shifted over to assisting with the other teams, working on the backend, and also on our moderation tools.

More contributors to the project would be helpful but I think the most important thing the frontend project is missing right now is at least one additional maintainer that can help guide contributions and triage incoming pull requests. I think other areas of the project could also benefit from this but objectively the frontend is suffering the most currently.

Please come talk to me in [#Revolt Discussion](https://rvlt.gg/Testers) if you are interested.

## Admin Panel

If you run your own Revolt instance, we have new and upgraded tools coming in the future for managing your services. The _new_ admin panel is still a heavy work in progress but it's slowly coming together!

> **Note!** Apologies for the lack of updates on the self-hosted repo with the recent configuration changes, work is being done to standardise everything on the code side and setup guides will follow after. Thank you for your patience.

Currently, the focus is on providing the ability to quickly jump to content whether necessary to assist with support tickets or to handle external moderation reports.

The search functionality allows you to quickly jump to users by username, username#discriminator, most objects by ID, channels/servers by invite code, and so forth.

![Admin panel on "search and inspect" page with 'insert' as search query](/content/blog/month-in-revolt-august-2024/admin-1.png)

###### Example search result for 'insert' listing users matching that name

![Admin panel on "search and inspect" page with 'Testers' as search query](/content/blog/month-in-revolt-august-2024/admin-2.png)

###### Example search result for 'Testers' listing the 'Revolt' server which matches the code

Only one of these inspect pages has been (partially) implemented so far:

![Inspect user page](/content/blog/month-in-revolt-august-2024/admin-3.png)

###### Inspect user page

# From The Community

If you have a cool project/art/thing related to Revolt that you've made or otherwise like to share, drop into the [#Month in Revolt](https://rvlt.gg/Testers) channel in the Revolt community server. We'd love to give you the opportunity to have it featured in this series.

![Message by Andre_601: "Since the latest blog post asked about it... Here is art I made like over a year ago... My attempt at a Revolt Logo..." with image of Revolt logo with a slice through it.](/content/blog/month-in-revolt-august-2024/community-1.png)

###### Andre_601's Revolt logo idea, [permalink](https://app.revolt.chat/server/01F7ZSBSFHQ8TA81725KQCSDDP/channel/01HXKSABKSDC3WMR1AVC67TEN1/01J42PF103WZ0WYB555P68287V)

![Message by Taroovala: "I use Arch Revolt btw (forming the legs to make an actual arch made it look weird so I went with this version instead)" with image of Revolt logo with 'Arch Linux'-like arches embedded into it and red-blue colour variations.](/content/blog/month-in-revolt-august-2024/community-2.png)

###### Taroovala's Revolt-Arch logo mashup, [permalink](https://app.revolt.chat/server/01F7ZSBSFHQ8TA81725KQCSDDP/channel/01HXKSABKSDC3WMR1AVC67TEN1/01J6AR34D176HMHRMM1JMVNMZK)

![Message by Taroovala: "Swapped the brandings without using any fonts to confuse people even more" with image of "Revolt" text in Revolut brand style and "Revolut" text in Revolt brand style.](/content/blog/month-in-revolt-august-2024/community-3.png)

###### Taroovala's Revolt-Revolut branding mashup, [permalink](https://app.revolt.chat/server/01F7ZSBSFHQ8TA81725KQCSDDP/channel/01HXKSABKSDC3WMR1AVC67TEN1/01J6D84CXQ15V4DDWW42PEDSTN)

<video src="/content/blog/month-in-revolt-august-2024/R.mp4" style="width:50%" controls></video>

###### ive watched this video like 100 times over the past 2 months, [permalink](https://app.revolt.chat/server/01F7ZSBSFHQ8TA81725KQCSDDP/channel/01HXKSABKSDC3WMR1AVC67TEN1/01J42QMQAG0M74F5FZASR59JRC)

![Message by Taroovala: "My best redesign of the Revolt logo. This one is in the style of Artix Linux" with image of Revolt logo in style of Artix logo](/content/blog/month-in-revolt-august-2024/community-4.png)

###### Taroovala's Revolt-Artix branding mashup, [permalink](https://app.revolt.chat/server/01F7ZSBSFHQ8TA81725KQCSDDP/channel/01HXKSABKSDC3WMR1AVC67TEN1/01J6M1EDEM5JF4FPMMX3C1VA2F)

![Message by Delta: "49,196,159 microseconds to make", "yes i know it's a masterpiece", "don't ask me to teach you how to become a great artist like me, i will not be responding", with image of R in math style](/content/blog/month-in-revolt-august-2024/community-5.png)

###### Delta's Revolt logo, [permalink](https://app.revolt.chat/server/01F7ZSBSFHQ8TA81725KQCSDDP/channel/01HXKSABKSDC3WMR1AVC67TEN1/01J6M8753Q86R6KKT5B6CXWCEZ)

# The Loop

Have any questions or feedback? Go to our [feedback](https://github.com/orgs/revoltchat/discussions/categories/feedback) or [Q&A](https://github.com/orgs/revoltchat/discussions/categories/q-a) discussions on GitHub.

### ⚙️ Organisational changes

As mentioned before, our organisation structure became unsustainable and needed immediate change. The first focus is on our operations, to coordinate this, Jen has been chosen to lead as the COO of Revolt and has been working to put together organisational structures (and generally figure out what everyone should be responsible for).

### 🚶 Holiday season (cont.)

We're coming to the tail end of the holiday season, some response times may still be affected but everything has almost come back to normal.

### 🌎 Update on prior post (again)

Licensing updates in no particular order:

-   No changes yet for Discover, although it will be published at the latest when we update our website.
-   The old admin panel and Shield source code have been [released](https://git.is.horse/revolt/legacy) (to the best of my ability).
