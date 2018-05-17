import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import GhPage from 'react-styled-ghp';
import { RadioGroup, Radio } from 'react-styled-radio';
import { ThemeProvider } from 'styled-components';
import theme from './theme';
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
        <GhPage {...options}>
          <RadioGroup>
            <Radio label="base" />
            <Radio label="light" />
            <Radio label="dark" />
          </RadioGroup>
        </GhPage>
      </ThemeProvider>
    )
  }
}

ReactDOM.render(<Example />, document.getElementById('root'))