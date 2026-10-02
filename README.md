# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and Oxlint's TypeScript related rules in your project.

## Contact form delivery

The Contact form sends submissions to Formspree. Create a Formspree form for `nfansubarrow300@gmail.com`, complete its recipient verification, then set its form endpoint in `VITE_FORMSPREE_ENDPOINT`. The endpoint is public form configuration, not a private API key; do not put private credentials in Vite variables.

For local development, copy `.env.example` to `.env.local` and set the endpoint:

```powershell
Copy-Item .env.example .env.local
```

Then replace the empty value in `.env.local` with the endpoint shown by Formspree and restart Vite. To build for GitHub Pages, provide the same variable to the existing build environment before `npm run build`. This repository does not currently contain a GitHub Pages workflow, so configure the variable in whichever deployment workflow builds this site. A successful form response is shown only after Formspree accepts the submission; without the endpoint, the form directs visitors to email instead.
