---
title: "Updates regarding the Revolt CDN"
description: "Our file server will have a new address."
author: "Revolt Team"
product: "api"
date: "2025-04-24 00:00:00 UTC"
relevance:
    minVersionCode: 0
---

We’re moving our CDN to a new URL. This change is necessary to boost security,
reliability, and performance.

**Old URL (deprecated):**\
<span style="text-decoration:line-through;opacity:0.7;">`https://autumn.revolt.chat`</span>

**New URL:**\
**`https://cdn.revoltusercontent.com`**

On **May 1st, 2025**:

- The new URL becomes the primary access point.
- Old endpoints will start issuing **301 redirects** to the corresponding new
  endpoints.
- **Uploads will _not_ work** on the old URL. Only the new URL will accept
  uploads.

Although we have no plans to stop issuing redirects at the old endpoints, we
cannot provide any guarantees that they will be available indefinitely. Due to
this, we recommend that you update your code to use the new CDN URL as soon as
possible.

**Good news**:\
If your code pulls the CDN URL from the `features.autumn.url` field in the root
`/` endpoint of the Revolt API, you’re already covered. This will automatically
update on May 1st.

Questions or concerns? Hit us up on the
[Revolt API server](https://rvlt.gg/api).
