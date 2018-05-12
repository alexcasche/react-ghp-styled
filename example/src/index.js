import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Layout from 'react-styled-ghp';
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
      title: 'react~-styled-ghp~',
      description: 'Styled gh-pages component for React designed to showcase your repos.',
      readMe: readMe
    }
    return (
      <Layout {...options} >
        <input placeholder='username' />
        <input placeholder='title' />
        <input placeholder='description' />
        <button>Click Me</button>
      </Layout>
    )
  }
}

ReactDOM.render(<Example />, document.getElementById('root'))