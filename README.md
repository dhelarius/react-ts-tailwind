# react-ts-tailwind

React boilerplate template with typescript, vite and tailwindcss

![Typescript](https://img.shields.io/badge/lang-typescript-blue) ![Vite](https://img.shields.io/badge/build-vite-blueviolet) ![Vitest](https://img.shields.io/badge/test-vitest-brightgreen)
![Linter](https://img.shields.io/badge/lint-typescript--eslint%20%7C%20eslint-informational) ![prettier](https://img.shields.io/badge/formatter-prettier-blueviolet) ![pnpm](https://img.shields.io/badge/pnpm-%3E=7.17.1-yellow)

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1024px-React.svg.png" alt="React" width="64" height="auto"> &nbsp;&nbsp;&nbsp;&nbsp; <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Vitejs-logo.svg/1039px-Vitejs-logo.svg.png" alt="Vite" width="64"> &nbsp;&nbsp;&nbsp;&nbsp; <img src="https://cdn.icon-icons.com/icons2/2415/PNG/512/typescript_plain_logo_icon_146316.png" alt="Typescript" width="64" height="auto"> &nbsp;&nbsp;&nbsp;&nbsp;<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Tailwind_CSS_logo.svg/768px-Tailwind_CSS_logo.svg.png" alt="Tailwindcss" width="280" height="auto">

# Features

- [Vite](https://vitejs.dev/) with [React](https://reactjs.org/), [Typescript](https://www.typescriptlang.org/) and [Tailwind css](https://tailwindcss.com/).
- [ESlint](https://eslint.org/), [typescript-eslint](https://typescript-eslint.io/), [Stylelint](https://stylelint.io/), [Prettier](https://prettier.io/) and [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier)
- Unit testing with [Vitest](https://vitest.dev/).

# Getting started

Use this repository as a [GitHub template](https://github.com/dhelarius/react-ts/generate) or use [degit](https://github.com/Rich-Harris/degit) to clone to your machine with an empty git history:

```
npx degit dhelarius/react-ts-tailwind my-app
```

Then, install the dependencies:

```
pnpm install
```

## Before you start coding

- [ ] Change the `vite.svg` on **`public`** folder. [favicon.io](https://favicon.io/) is a cool tool for generating these assets.
- [ ] Remove the `react.svg` from **`assest`** folder.
- [ ] In the project root, remove the **`test`**.
- [ ] Change the title in the `index.html`.
- [ ] Modify or delete the `LICENSE` file.
- [ ] Change the `name` and `description` field in package.json.

# Scripts

- `pnpm dev` - start a development server with hot reload.
- `pnpm build` - build for production. The generated files will be on the `dist` folder.
- `pnpm preview` - locally preview the production build.
- `pnpm lint` - runs TypeScript and ESLint.
- `stylelint` - runs stylelint.
- `stylelint:check`: check if the configuration contains any rules that are in conflict with Prettier.
- `pnpm prettier:write` - format all files with Prettier.
- `pnpm prettier:check` - checks that files are already formatted.
- `pnpm test` - run unit tests with Vitest.
- `pnpm test:ui` - run unit tests with ui vitest.
