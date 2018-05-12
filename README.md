react-styled-ghp
===============

Styled gh-pages component for React designed to showcase your repos.

[![NPM](https://img.shields.io/npm/v/react-styled-ghp.svg)](https://www.npmjs.com/package/react-styled-ghp) 
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-circle)](https://github.com/prettier/prettier)
[![Travis](https://img.shields.io/travis/alexcasche/react-styled-ghp.svg)](https://img.shields.io/travis/alexcasche/react-styled-ghp)


Install
---------------

```bash
npm install --save react-styled-ghp
yarn add react-styled-ghp
```

Usage
---------------
- Import the layout component from package
- Wrap the demo conent inside the layou component
- Pass the layout component the desired props
<br/><br/>

```jsx
import React, { Component } from 'react'
import { Layout } from 'react-styled-ghp'

class Example extends Component {
  render () {
    const options = {
      logo: './path/to/logo',
      username: 'username',
      github: './url/of/repo',
      npm: './url/of/module',
      title: 'title',
      description: 'description',
      readMe: './path/to/readMe'
    }
    return (
      <Layout {...options}>
        <div>Demo content goes here</div>
      </Layout>
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
- Sandbox - https://codesandbox.io/s/jlzno327x9


      readMe: readMe

Props
---------------

| Prop              | Type        | Default          |   Description: Options   |
|-------------------|-------------|------------------|--------------------------|
| `logo`            |  _string_   |  `null`          | Path to logo: `url`      |
| `username`        |  _string_   |  `null`          | Github username          |
| `github`          |  _string_   |  `null`          | Github repo: `url`       |
| `npm`             |  _string_   |  `null`          | NPM pacakge: `url`       |
| `title`           |  _string_   |  `null`          | Page title               |
| `description`     |  _string_   |  `null`          | Page decription          |
| `readme`          |  _string_   |  `null`          | Path to readme: `url`    |

Classes
---------------
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