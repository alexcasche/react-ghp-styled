import React, { Component } from 'react';
import Styled from './styled/Demo';

export default class Demo extends Component {
  renderHeadline = () => {
    const arr = this.props.title.split('~');
    return <h1 className="ghp__title">{arr[0]}<span>{arr[1]}</span></h1>
  }
  render() {
    return (
      <Styled className='demo'>
        {this.renderHeadline()}
        <p className="ghp__description">{this.props.description}</p>
        {this.props.children}
      </Styled>
    );
  }
}