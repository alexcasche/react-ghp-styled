import React, { Component } from 'react';
import Header from './Header';
import Demo from './Demo';
import Details from './Details';
import marked from 'marked';
import { propTypes, defaultProps } from '../props';

export default class Layout extends Component {
  static propTypes = propTypes;
  static defaultProps = defaultProps;
  render() {
    return (
      <div className='gh__layout'>
        <Header 
          logo={this.props.logo}
          username={this.props.username}
          github={this.props.github} 
          npm={this.props.npm}
        />
        <Demo 
          title={this.props.title} 
          description={this.props.description}
          children={this.props.children}
        />
        <Details 
          readMe={this.props.readMe}
        />
      </div>
    );
  }
}