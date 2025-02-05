---
title: "Happy New Year - Happy New Features!"
description: "This new release is simply packed with stuff!"
author: "Revolt Team"
product: "android"
date: "2025-01-01 00:00:00 UTC"
relevance:
    minVersionCode: 1003000
---

Finally, we've made it through 2024. Maybe we'll make it through 2025 too&mdash;our contribution comes in the form of a brand new update for Android. Welcome to a new episode of the changelog.

## New - New - New 🆕

-   **Replaced the old home screen with a new screen called "You".** This screen is a new gateway to multiple features old and new, and it allows us to place new features on it in the future. The primary settings button is now on this screen. Don't worry about the cat on the old home screen, it's now somewhere else. Can you find it?
-   **You can now set your status text right from the app**, which means you can let everybody know what you're cooking up. Or what you're cooking. Or whether you're cooking "Up". Supposedly, you can also set your status to other things than cooking, but we haven't tried that yet.
-   **Accordingly, you can now see other people's status texts**, meaning you can also know what dishes they are cooking (or what else they are doing). It's a new tile in the user profile, so you can see it by tapping on a user's profile picture.
-   **You can now select the app's language from the settings!** This means you can now use Revolt in your preferred language, as long as your preferred language is one of the languages we support. If it's not, you can always [help us translate](https://translate.revolt.chat/)! Be sure to check out Palatine German if you've ever wanted to know what German sounds like when it needs to take letters from the Swedish alphabet.
-   **We're testing a new feature called "user cards"**, which are like your very own business card in Revolt. They show all the data needed to add you as a friend, and they are accessible by tapping on the corresponding button in the user profile. We're rolling out this feature with a small group of users, so you might not see it yet. If you do, let us know what you think!
-   **Muted servers and channels** are now shown greyed out in the sidebar, same as on other platforms. This means you can now see at a glance which servers and channels you've muted, and you can easily tell them apart from the active ones. Additionally, they will not contribute unread dots to the server and channel list.
-   **The app now uses a new way of showing _fancy formatting_ in messages**, which is not only prettier but also allows us to add new formatting options in the future. For the nerds that send code over Revolt using code blocks, this means you can now use syntax highlighting in your code blocks. We're starting with a few languages, but we'll add more in the future. If you're a fan of a language that's not supported yet, let us know and we'll try to add it!
-   **Experimental support for displaying tables and KaTeX math in messages**. You can try it out by sending a message with a table or a block of math in it. This is still heavily under construction, so don't be surprised if it doesn't work perfectly yet or if things look weird. We're working on it, we promise! If you're a fan of [tables](https://www.google.com/search?q=coffee+tables&tbm=isch) or math, let us know what you think.
-   **Revolt now supports keyboard shortcuts**, as we have been recently informed that there are in fact people that use Android tablets. Our first shortcut is <kbd>Ctrl</kbd> + <kbd>Enter</kbd> to send a message, but we'll add more in the future. If you have a favourite shortcut that you'd like to see in Revolt, let us know! Remember that you can press <kbd><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" style="vertical-align:middle;" viewBox="0 0 24 24"><title>Meta</title><path fill="#ffffff" d="M5.5,5.5m-4,0a4,4 0,1 1,8 0a4,4 0,1 1,-8 0" id="path_0"/><path fill="#ffffff" d="M5.5,16.5m-4,0a4,4 0,1 1,8 0a4,4 0,1 1,-8 0" id="path_1"/><path fill="#ffffff" d="M16.5,5.5m-4,0a4,4 0,1 1,8 0a4,4 0,1 1,-8 0" id="path_2"/><path fill="#ffffff" d="M18.5,16.5C18.5,15.4 17.6,14.5 16.5,14.5C15.4,14.5 14.5,15.4 14.5,16.5C14.5,17.6 15.4,18.5 16.5,18.5C17.6,18.5 18.5,17.6 18.5,16.5ZM12.5,16.5C12.5,14.29 14.29,12.5 16.5,12.5C18.71,12.5 20.5,14.29 20.5,16.5C20.5,17.241 20.299,17.934 19.948,18.529L23,21.59L21.59,23L18.529,19.948C17.934,20.299 17.241,20.5 16.5,20.5C14.29,20.5 12.5,18.71 12.5,16.5Z" fill-rule="evenodd" id="path_3"/></svg></kbd> + <kbd>/</kbd> to see all available shortcuts anywhere in Android, and we of course contribute to Android's list of shortcuts.

## No Longer Broken

-   Fixed a bug in which the super top secret "Experiments" screen has shown enabled experiments as disabled. This was a visual bug only, and the experiments were still enabled. We've fixed the visual bug, so now you can see which experiments are enabled and which are disabled.
-   Fixed a bug in which Webhooks were mistakenly shown as users when you tapped on their profile picture. This was a visual bug that led to Webhooks showing up with "empty" user profiles. We've added a new explainer about Webhooks instead, which means we now qualify as an educational app... right?
-   Radial role gradients should now show up rather than not show up.
-   Fixed a bug in which during degraded service, the announcement notice has only shown one link button. Now it shows all the link buttons, so you can get all the relevant information in case of degraded service.
-   Fixed an issue in which the app would crash on startup in some network conditions.
-   Fixed an issue that caused a message to visually duplicate when you pressed "Reply" on that message after using the app for a while. This was a visual bug only, but even visual bugs are annoying, so we've fixed it.
-   All of the open-source libraries that we use now show up in the attribution screen. We also added more licences that you can read right from that screen.
-   Fixed an issue where users using 3-button navigation or devices before Android 10 ran into the navigation bars overlapping with the app.
-   Adjusted the app for changes in our API (the thing that connects the app to our servers) and our CDN (the thing that serves you all images and files on Revolt).

## Now Slightly Better

-   The autocomplete for users, emoji and channels when you are typing a message is now slightly better, with improved animations and better visibility. We've also fixed a bug where the autocomplete would sometimes force you to scroll to the left to see the most obvious suggestions, which was annoying.
-   Your profile picture in the sidebar on the left is now fixed to the top of the screen, even when you scroll down. This means you always have quick access to your DMs and status settings, no matter how far down you've scrolled. This also means we are now on par with the iOS app in this regard.
-   On devices that do not support Material You due to being lower than Android 12, we've improved our fallback colours to be more consistent with the Material You colours, which means some really ugly combinations are no longer present.
-   Formatting in messages is now shown when they are replied to, which means you are no longer exposed to a message's raw formatting when you see a reply.
-   Mentions in messages now follow the same style as on other platforms, including the profile picture of the mentioned user. So much clearer now!
-   If the app fails to log you in on startup, you are no longer signed out forever. Instead, you can choose whether to retry logging in or to sign out. This means you can now recover from network issues on startup without having to log in again.
-   When you open the app again after it's been in the background for a while, it now reconnects automatically, meaning you won't have to tap on the annoying "Reconnect" button anymore. This also means you won't miss any messages that were sent while the app was in the background.
