import React, { Component } from 'react';
import Styled from './styled/Header';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faGithubAlt, faNpm } from '@fortawesome/fontawesome-free-brands';

export default class Header extends Component {
  renderIcon = (type) => {
    if(this.props[type]) {
      const icon = type ==='github' ? faGithubAlt : faNpm
      return(
        <a className="gh__link" href={this.props[type]}>
          <FontAwesomeIcon icon={icon}/>
        </a>
      )
    }
  }
  render() {
    return (
      <Styled className="gh__header" {...this.props.theme}>
        <img className="gh__logo" src={this.props.logo} alt="logo" />
        <p className="gh__username">{this.props.username}</p>
        {this.renderIcon('github')}
        {this.renderIcon('npm')}
      </Styled>
    );
  }
}