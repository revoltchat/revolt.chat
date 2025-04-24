---
title: "Updates regarding the Revolt CDN"
description: "Our file server will have a new address."
author: "Revolt Team"
product: "api"
date: "2025-04-24 00:00:00 UTC"
relevance:
    minVersionCode: 0
---

Developers and everyone else using our API should be aware that we are moving
our CDN to a new URL. This change is necessary to improve security, reliability,
and performance.

Presently, the CDN is accessible at endpoints starting in
<span style="text-decoration:line-through;opacity:0.7;">`https://autumn.revolt.chat`</span>.

Starting from **May 1st, 2025**, the CDN will be accessible at endpoints
starting in **`https://cdn.revoltusercontent.com`**.

After this date, endpoints starting in
<span style="text-decoration:line-through;opacity:0.7;">`https://autumn.revolt.chat`</span>
will issue 301 redirects to new URLs.

**An exception is the upload endpoint, which will not be available at the old
URL.** The new upload endpoint will only be available at
**`https://cdn.revoltusercontent.com`**.

Although we have no plans to stop issuing redirects at the old endpoints, we
cannot provide any guarantees that they will be available indefinitely. Due to
this, we recommend that you update your code to use the new CDN URL as soon as
possible.

If your code is correctly taking the endpoint prefix from the
`features.autumn.url` property of the root (`/`) endpoint response object of the
Revolt API, you do not need to make any changes. The `features.autumn.url`
property will be updated to point to the new CDN URL on May 1st, 2025. We
recommend always using the root endpoint response object to get the correct URLs
for Revolt services.

If you have any questions or concerns, please reach out to us on our
[Revolt API server](https://rvlt.gg/api).
