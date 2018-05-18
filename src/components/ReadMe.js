import React, { Component } from 'react';
import marked from 'marked';
import Highlight from 'react-highlight';
import Styled from './styled/ReadMe';
import 'highlight.js/styles/atom-one-light.css';

export default class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      markdown: null
    }
  }
  componentDidMount() {
    if(this.props.readMe) {
      fetch(this.props.readMe).then(response => {
        return response.text() }).then(text => {
        return this.setState({markdown: marked(text)})
      })
    }
  }
  renderMarkdown = (markdown) => {
    if(markdown) {
      return (
        <div className="ghp__markdown">
          <Highlight innerHTML={true}>
            {markdown}
          </Highlight>
        </div>
      )
    }
  }
  render() {
    return (
      <Styled className="ghp__readme" {...this.props.theme}>
        <section> 
          <header><i className="fas fa-book" />README.md</header>
          {this.renderMarkdown(this.state.markdown)}
          {this.props.children}
        </section>
      </Styled>
    )
  }
}