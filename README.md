<div align="center">
<h1>
  Revolt Website
  
  [![Stars](https://img.shields.io/github/stars/revoltchat/revolt.chat?style=flat-square&logoColor=white)](https://github.com/revoltchat/revolt.chat/stargazers)
  [![Forks](https://img.shields.io/github/forks/revoltchat/revolt.chat?style=flat-square&logoColor=white)](https://github.com/revoltchat/revolt.chat/network/members)
  [![Pull Requests](https://img.shields.io/github/issues-pr/revoltchat/revolt.chat?style=flat-square&logoColor=white)](https://github.com/revoltchat/revolt.chat/pulls)
  [![Issues](https://img.shields.io/github/issues/revoltchat/revolt.chat?style=flat-square&logoColor=white)](https://github.com/revoltchat/revolt.chat/issues)
  [![Contributors](https://img.shields.io/github/contributors/revoltchat/revolt.chat?style=flat-square&logoColor=white)](https://github.com/revoltchat/revolt.chat/graphs/contributors)
  [![Licence](https://img.shields.io/github/license/revoltchat/revolt.chat?style=flat-square&logoColor=white)](https://github.com/revoltchat/revolt.chat/blob/main/LICENCE)
</h1>
Revolt marketing site built with Astro.
</div>
<br/>

Website providing information regarding and downloads for the Revolt project that serves as a hub for everything Revolt related. You can view the site live at <https://revolt.chat>.

## Quick Start

Get the website up and running locally for development purposes. You'll need [Deno](https://deno.com).

> [!TIP]
> A [default.nix](https://github.com/revoltchat/revolt.chat/blob/main/default.nix) is available for Nix users! Just run `nix-shell` and continue.

```
git clone https://github.com/revoltchat/revolt.chat
cd revolt.chat
deno install --allow-scripts
deno task dev
```

You can now access the local site at <http://localhost:4321>.

## CLI Commands

| Command             | Description                            |
| ------------------- | -------------------------------------- |
| `deno task dev`     | Start the website in development mode. |
| `deno task start`   | Alias of `deno task dev`.              |
| `deno task build`   | Builds the site ready for deployment.  |
| `deno task preview` | Allows previewing the built site.      |
| `deno task astro`   | Returns Astro information.             |
