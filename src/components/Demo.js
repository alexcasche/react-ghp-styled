import React, { Component } from 'react';
import Styled from './styled/Demo';

export default class Demo extends Component {
  renderHeadline = () => {
    const title = this.props.title.substr(1);
    const arr = title.split(']');
    return <h1 className="ghp__title"><span>{arr[0]}</span>{arr[1]}</h1>
  }
  render() {
    return (
      <Styled className='ghp__demo' {...this.props.theme}>
        {this.renderHeadline()}
        <p className="ghp__description">{this.props.description}</p>
        {this.props.children}
      </Styled>
    );
  }
}