import React, { Component } from 'react';
import Header from './components/Header';
import Demo from './components/Demo';
import Details from './components/Details';
import marked from 'marked';
import { propTypes, defaultProps } from './props';

export default class Layout extends Component {
  static propTypes = propTypes;
  static defaultProps = defaultProps;
  render() {
    const theme = {
      theme: this.props.theme,
      dark: this.props.dark,
      light: this.props.light
    }
    return (
      <div className='gh__layout'>
        <Header 
          logo={this.props.logo}
          username={this.props.username}
          github={this.props.github} 
          npm={this.props.npm}
          theme={theme}
        />
        <Demo 
          title={this.props.title} 
          description={this.props.description}
          children={this.props.children}
          theme={theme}
        />
        <Details 
          readMe={this.props.readMe}
          theme={theme}
        />
      </div>
    );
  }
}
