import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Layout from 'react-styled-ghp';
import { ThemeProvider } from 'styled-components';
import { RadioGroup, Radio } from 'react-styled-radio';
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
      <ThemeProvider theme={Layout.theme}>
        <Layout {...options}>
          <RadioGroup>
            <Radio label="base" />
            <Radio label="light" />
            <Radio label="dark" />
          </RadioGroup>
        </Layout>
      </ThemeProvider>
    )
  }
}

ReactDOM.render(<Example />, document.getElementById('root'))