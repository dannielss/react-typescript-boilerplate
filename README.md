<h3 align="center">
  <img src="https://user-images.githubusercontent.com/58083563/89603242-1845fa80-d83f-11ea-9ca1-3b6c3acb57ed.png" alt="Webpack" width="150" />&nbsp&nbsp&nbsp&nbsp
  &nbsp
  <img src="https://user-images.githubusercontent.com/58083563/89603440-87bbea00-d83f-11ea-88f1-40ded3561784.png" alt="Typescript" width="150" />
  <img src="https://user-images.githubusercontent.com/58083563/89603314-3f9cc780-d83f-11ea-974a-82f2ed7ab879.png" alt="React" width="200" />
</h3>
<h3 align="center">Boilerplate - React + Typescript + Webpack</h3>
<br>
<p align="center">
  <a href="#rocket-Technologies">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#wrench-Configuration">Configuration</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#mag-Tests">Tests</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#gift-Others-commands">Others</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
</p>

## :rocket: Technologies

- [React](https://reactjs.org)
- [Typescript](https://www.typescriptlang.org/)
- [Webpack](https://webpack.js.org/)
- [Babel](https://babeljs.io/)
- [Storybook](https://storybook.js.org/)
- [Jest](https://jestjs.io/)
- [Cypress](https://www.cypress.io/)
- [Eslint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [Commitizen](https://github.com/commitizen/cz-cli)

## :wrench: Configuration

#### 1. Install all dependencies with

```sh
$ npm install 
```

or using yarn

```sh
$ yarn
```

#### 2. Start the webpack-dev-server 

```sh
$ npm run dev
```

or using yarn

```sh
$ yarn dev
```

## :mag: Tests

#### 1. Run e2e tests with

```sh
$ npm run test:e2e
```

or using yarn

```sh
$ yarn test:e2e
```

#### 2. Run e2e tests in terminal with

```
$ npm run test:e2e:run
```

or using yarn

```
$ yarn test:e2e:run
```

#### :exclamation: If Cypress (yarn test:e2e) is still not installed after yarn. Install cypress with:
```sh
$ npx cypress install
```


#### 3. Run unit tests with

```
$ npm run test
```

or using yarn

```
$ yarn test
```

## :gift: Others commands

```sh
# Build for web (compiled to build/)
$ npm run build

# Run for web production (needs npm run build first)
$ npm run start

# Open storybook
$ npm run storybook

# Check Eslint errors
$ npm run lint

# Format all files with prettier
$ npm run format

# Commit using commitizen
$ npm run commit
```

or using yarn

```sh
# Build for web (compiled to build/)
$ yarn build

# Run for web production (needs yarn build first)
$ yarn start

# Open storybook
$ yarn storybook

# Check Eslint errors
$ yarn lint

# Format all files with prettier
$ yarn format

# Commit using commitizen
$ yarn commit
```
