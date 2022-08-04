# Revolt Website

## Description

This is the website for Revolt, which is available live at [revolt.chat](https://revolt.chat).

## Stack

-   [Next.js](https://nextjs.org/)
-   [Styled Components](https://styled-components.com/)

## Resources

### Revolt

-   [Revolt Project Board](https://github.com/revoltchat/revolt/discussions) (Submit feature requests here)
-   [Revolt Testers Server](https://app.revolt.chat/invite/Testers)
-   [Contribution Guide](https://developers.revolt.chat/contributing)

## Quick Start

Get the Revolt website up and running locally.

```
git clone https://github.com/revoltchat/revolt.chat
cd revolt.chat
yarn
yarn dev
```

You can now access the client at the URL printed into the console.

## CLI Commands

| Command           | Description                                                                |
| ----------------- | -------------------------------------------------------------------------- |
| `yarn dev`        | Start the Revolt website in development mode.                              |
| `yarn format`     | Run Prettier on the codebase, but don't change any files.                  |
| `yarn format:fix` | Run Prettier on the codebase, and fix all formatting. Run before a commit. |
| `yarn build`      | Build the Revolt website.                                                  |
| `yarn start`      | Start a local production Next.js server (run `yarn build` first).          |
