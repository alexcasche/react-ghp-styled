import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Layout, { theme } from 'react-styled-ghp';
import { ThemeProvider } from 'styled-components';
import readMe from 'react-styled-ghp/README.md';
import logo from './logo.svg';
import './style.css';

class Example extends Component {
  render () {
    const options = {
      logo: logo,
      username: 'alexasche',
      github: 'https://github.com/alexcasche/react-styled-ghp',
      npm: 'https://npmjs.org/react-styled-ghp',
      title: '[react]-styled-ghp',
      description: 'Github pages component for React built with styled-components < 💅>',
      readMe: readMe
    }
    return (
      <ThemeProvider theme={theme}>
        <Layout {...options}>
          <input placeholder='username' />
          <input placeholder='title' />
          <input placeholder='description' />
          <button>Click Me</button>
        </Layout>
      </ThemeProvider>
    )
  }
}

ReactDOM.render(<Example />, document.getElementById('root'))