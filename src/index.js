import React, { Component } from 'react';
import Header from './components/Header';
import Demo from './components/Demo';
import Details from './components/Details';
import marked from 'marked';

export default class Layout extends Component {
  render() {
    return (
      <div className='gh__layout'>
        <Header 
          logo={this.props.logo}
          username={this.props.username}
          github={this.props.github} 
          npm={this.props.npm} 
        />
        <Demo title={this.props.title} description={this.props.description}>
          {this.props.children}
        </Demo>
        <Details readMe={this.props.readMe}/>
      </div>
    );
  }
}
