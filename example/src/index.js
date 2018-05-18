import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import GhPage from 'react-styled-ghp';
import { RadioGroup, Radio } from 'react-styled-radio';
import { ThemeProvider } from 'styled-components';
import theme from './theme';
import layout from './layout';
import './style.css';

class Example extends Component {
  render () {
    return (
      <div>
        <ThemeProvider theme={theme}>
          <GhPage {...layout}>
            <RadioGroup>
              <Radio label="base" />
              <Radio label="light" />
              <Radio label="dark" />
            </RadioGroup>
          </GhPage>
        </ThemeProvider>
      </div>
    )
  }
}

ReactDOM.render(<Example />, document.getElementById('root'))