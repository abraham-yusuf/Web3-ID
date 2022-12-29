# dAppsID Blog Education By Web3Indonesia
We are Educational And Open Course To Making Understand All About Protocol Blockchain For Indonesia

## Getting started

Clone proyek ini ke komputer anda, masuk ke directori dan lakukan penginstalan `yarn` atau `npm install`

### Development

jalankan development server:

```bash
npm start
# or
npm run dev
```

Buka [http://localhost:1337](http://localhost:1337) dengan browser default anda dan lihat hasilnya.
masuk ke "Setting" > "Users & permissions plugins" > "Public" > "Permissions" dan checklist `find` dimenu Article, Category, Contributor dan Pages.

Anda dapat mulai mendaftar administrator kemudian mengedit dan menambahkan konten halaman , plugin, dan juga content type builder. dan setelah selesai silahkan push ke repositori ini.


## Cara Berkontribusi Tulisan / Artikel (How To Contribution)
silahkan email kami [support@web30.my.id](mailto:web3.indonesia@gmail.com)

## License

[MIT License](https://github.com/Web3ID/Web3-ID/blob/main/LICENSE).

# OUR SPONSOR AND PARTNER

[Near Protocol](https://near.org/) adalah platform aplikasi terdesentralisasi yang cukup aman untuk mengelola aset bernilai tinggi seperti uang atau identitas dan cukup berkinerja untuk membuat mereka berguna untuk orang sehari-hari, menempatkan kekuatan dari web terbuka di tangan mereka.

[dGRANTS](https://grants.gtcdao.net/#/) adalah platform Hibah Terdesentralisasi Memfasilitasi pengembang open source membuat hibah untuk mengumpulkan kontribusi dengan cara yang terdesentralisasi.

## Features

- Great landing page.
- Typing effect for landing page title.
- Great fluid of post card.
- Great tags cloud page: separate page for posts under each tag.
- Great GitHub information card.
- Social share buttons.
- Full-featured `MDX` support:
  - Optimized vertical rhythm for headings and paragraphs.
  - Custom almost all `Markdown` built-in components.
  - `GFM` syntax support.
  - `Katex` math support.
  - Admonition container support.
  - Emoji short code support.
  - Image preview card support.
  - Pretty code blocks support:
    - Syntax highlight using `PrismJS`.
    - macOS style code box.
    - Line number support.
    - Lines highlight support.
    - Custom code title support.
    - Quick code copy support.
  - Out of box support for live code editor.
  - Automatically generated sidebar navigation,
    table of contents, previous and next post navigation links.
- Nice animation for page transitions and dynamic routing.
- Motion almost everything.
- Disqus comments system.
- Customized 404 not found page.
- Dark mode support.
- ...and more.

### Development Features

- Lightning fast `HMR`.
- Dynamic route generation for `Markdown` posts.
- Optimized build using `Rust` compiler.
- `TypeScript` static type checking.
- `ESLint`, `StyleLint` and `Prettier` style checking.
- Out of box support for `tailwind.css`.
- Fully customizable styles through `tailwind.css`.
- Mobile-first approach in development.
- Out of box support for `Vercel` deployment.
- Separate components for everything.
- Complete `React` components testing using `Jest` and `Testing Library`.
- E2E visual testing using `Cypress` for `Chrome` and `Firefox`.
- Optimization for `SEO`: meta heading, sitemap and `robots.txt` support.
- Progressive web app (`PWA`): offline support and webapp manifest support.
- ...and more.

## :bookmark_tabs: Post Template

`Yaml` Front + `Markdown` Body:

```markdown
---
layout: post
title: 'React Redux Basic Notes'
subtitle: 'Daily I learned'
author: 'sabertaz'
date: 2022-02-03
tags:
  - Redux
  - React
  - JavaScript
  - Frontend Development
  - Web Development
---

# React Redux Basic Notes

## Introduction

<... more contents>
```

## :rocket: Quick start

### Installation

```bash
git clone --depth=1 https://github.com/Web3ID/Web3-ID
cd blog
npm install
```

### Development

```bash
# http://localhost:3000
npm start
```

**Open the source code and start editing!**

Your site is now running at `http://localhost:3000`!

## :stars: Deployment

## Deploy to Vercel
Build for `/` path:

```bash
# Deploy to Vercel.
npm run build
```

## :open_file_folder: Fold Structure

A quick look at the top-level files and directories you'll see in a Next.js project.

```bash
.
├── node_modules
├── __mocks__
├── components
├── config
├── contents
├── cypress
├── hooks
├── layouts
├── lib
├── pages
├── public
├── styles
├── types
├── .gitignore
├── .tokeignore
├── .eslintrc.json
├── .prettierrc.json
├── .stylelintrc.json
├── .versionrc.json
├── codecov.yml
├── cypress.json
├── jest.config.js
├── jest.setup.js
├── next-env.d.ts
├── next.config.js
├── package.json
├── postcss.config.js
├── sitemap.config.js
├── tailwind.config.js
├── tsconfig.json
├── LICENSE
└── README.md
```

1. **`/node_modules`**: This directory contains all of the modules of code.
2. **`/__mocks__`**: Mock API for 3rd-party libraries for Jest testing.
3. **`components`**: React components building block.
4. **`config`**: Blog site configuration (color/metadata/etc.).
5. **`contents`**: Blog posts (`.md`/`.mdx`).
6. **`cypress`**: Cypress E2E testing files.
7. **`hooks`**: Hooks for shared logic.
8. **`layouts`**: Layouts components.
9. **`lib`**: Data fetching helper functions.
10. **`pages`**: Pages components (SSG).
11. **`public`**: Static assets.
12. **`styles`**: CSS stylesheets files.
13. **`types`**: TypeScript shared type definition.
14. **`.gitignore`**: This file tells git which files it should not track.
15. **`.tokeignore`**: [Code Lines](https://github.com/XAMPPRocky/tokei) configuration file.
16. **`.eslintrc.json`**: [ESLint](https://eslint.org) configuration file.
17. **`.prettierrc.json`**: [Prettier](https://prettier.io) configuration file.
18. **`.stylelintrc.json`**: [StyleLint](https://stylelint.io) configuration file.
19. **`.versionrc.json`**: [Standard Version](https://github.com/conventional-changelog/standard-version) configuration file.
20. **`codecov.yml`**: [Codecov](https://codecov.io) CI configuration file.
21. **`cypress.json`**: [Cypress](https://cypress.io) E2E testing configuration file.
22. **`jest.config.js`**: [Jest](https://jestjs.io) configuration file.
23. **`jest.setup.js`**: Jest basic setup script (after environment setup).
24. **`next-env.d.ts`**: `Next.js` internal type definition.
25. **`next.config.js`**: `Next.js` configuration file.
26. **`package.json`**: A manifest file for Node.js projects.
27. **`postcss.config.js`**: [PostCSS](https://postcss.org) configuration file.
28. **`sitemap.config.js`**: `next-sitemap` configuration file.
29. **`tailwind.config.js`**: [Tailwind.css](https://tailwindcss.com) configuration file.
30. **`tsconfig.json`**: [TypeScript](https://www.typescriptlang.org) configuration file.
31. **`LICENSE`**: This Next.js starter is licensed under the `MIT` license.
32. **`README.md`**: A text file containing useful reference information.

## :construction: Caveats

`import` and `export` statements cannot be used **inside** an MDX file.
If you need to use components in your MDX files,
they should be provided to `/components/MDX/index.ts`.

See reason [here](https://github.com/hashicorp/next-mdx-remote#import--export)
and explanation [here](https://github.com/hashicorp/next-mdx-remote/issues/143#issuecomment-1043067293).

## :bookmark: Contact

[![Email](https://img.shields.io/badge/-Gmail-ea4335?style=for-the-badge&logo=gmail&logoColor=white)](mailto:web3.indonesia@gmail.com)
[![Twitter](https://img.shields.io/badge/-Twitter-1da1f2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/Web30_ID)
[![GitHub](https://img.shields.io/badge/-GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Web3ID)
