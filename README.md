react-styled-ghp
===============

Styled gh-pages component for React designed to showcase your repos.

[![NPM](https://img.shields.io/npm/v/react-styled-ghp.svg)](https://www.npmjs.com/package/react-styled-ghp) 
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-circle)](https://github.com/prettier/prettier)
<!-- [![Travis](https://img.shields.io/travis/alexcasche/react-styled-ghp.svg)](https://img.shields.io/travis/alexcasche/react-styled-ghp) -->


Install
---------------

```bash
npm install --save react-styled-ghp
yarn add react-styled-ghp
```

Usage
---------------
- Import the layout component from package
- Wrap the demo conent inside the layout component
- Pass the layout component the desired props
<br/><br/>

```jsx
import React, { Component } from 'react';
import GhPage from 'react-styled-ghp';

class Example extends Component {
  render () {
    const options = {
      logo: './path/to/logo',
      username: 'username',
      github: './url/of/repo',
      npm: './url/of/module',
      title: 'title',
      description: 'description',
      readMe: './path/to/readMe',
    }
    return (
      <GhPage {...options}>
        <div>Demo content goes here</div>
      </GhPage>
    )
  }
}
```

Features
---------------
- Simple setup
- Clean & responsive design
- Readme w/ syntax highlighting
- Easy to use BEM class hooks

Examples
---------------
- Demo - https://alexcasche.github.io/react-styled-ghp/

Props
---------------
The GhPage component accepts the following props.

| Prop              | Type        | Default          |   Description: Options     |
|-------------------|-------------|------------------|----------------------------|
| `logo`            |  _string_   |  `null`          | Path to logo: `url`        |
| `username`        |  _string_   |  `null`          | Github username            |
| `github`          |  _string_   |  `null`          | Github repo: `url`         |
| `npm`             |  _string_   |  `null`          | NPM pacakge: `url`         |
| `title`           |  _string_   |  `null`          | Page title:  `[base]-subname` |
| `description`     |  _string_   |  `null`          | Page decription            |
| `readme`          |  _string_   |  `null`          | Path to readme: `url`      |
| `theme`           |  _object_   |  `see below`     | Theme object: `see below`  |

**Note:**<br />
_The page title text is colored using the format [hoverText]-lightText.  For example, the current page uses: [react]-styled-ghp_

Theme
---------------
The theme object can be used to customize the look of the component, with the following values.

| Prop              | Type        | Default          |
|-------------------|-------------|------------------|
| `headerBG`        |  _string_   |  `#20232A`       |
| `bannerBG`        |  _string_   |  `#292C34`       |
| `pageBG`          |  _string_   |  `#484C59`       |
| `fontSans`        |  _string_   |  `inherit`       |
| `headerColor`     |  _string_   |  `#DDDDDD`       |
| `bannerColor`     |  _string_   |  `#DDDDDD`       |
| `pageColor`       |  _string_   |  `#20232A`       |
| `hoverColor`      |  _string_   |  `#34f96E`       |

There are two ways to use the theme object.
1. Pass the theme to the styled-components ThemeProvider (recommended)

```jsx
import { ThemeProvider } from 'styled-components';

...
return (
  <ThemeProvider theme={theme}>
    <GhPage>
      <div>Demo content goes here</div>
    </GhPage>
  </ThemeProvider>
);
...
```

2. Pass the theme directly to the GhPage component (not recommended)

```jsx
...
return (
  <GhPage theme={theme} />
);
...
```


Classes
---------------
For more control over the styles, you can use the following BEM classes.

| Class                    | Description          |
|--------------------------|----------------------|
| `.ghp__layout`           |  Page wrapper        |
| `.ghp__header`           |  Header section      |
| `.ghp__username`         |  Header username     |
| `.ghp__logo`             |  Header logo         |
| `.ghp__link`             |  Header link         |
| `.ghp__demo`             |  Demo section        |
| `.ghp__title`            |  Demo title          |
| `.ghp__description`      |  Demo description    |
| `.ghp__readme`           |  Readme section      |
| `.ghp__markdown`         |  Readme markdown     |


Development
---------------
Follow these steps to setup a local development environment.  Use yarn or npm - not both.
1. Clone the repo from Github

```bash
git clone https://github.com/alexcasche/react-styled-ghp
```

2. Setup project & start rollup watch

```bash
npm install && npm start
yarn install && yarn add
```

3. Setup react app & start dev server

```bash
cd example
npm install && npm start
yarn install && yarn start
```

Shoutouts
---------------
- Setup: [ create-react-library ](https://github.com/transitive-bullshit/create-react-library) 🙌


License
---------------

MIT © [alexcasche](https://github.com/alexcasche)