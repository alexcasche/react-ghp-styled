import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Layout from 'react-ghp-styled';
import readMe from 'react-ghp-styled/README.md';
import logo from './logo.svg';
import './style.css';

class Example extends Component {
  render () {
    const options = {
      logo: logo,
      username: 'alexasche',
      github: 'https://github.com/alexcasche/react-ghp-styled',
      npm: 'https://npmjs.org/react-ghp-styled',
      title: 'React ~Gh-Pages~',
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