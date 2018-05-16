import styled from 'styled-components'

const Styled = styled.div`
  position: relative;
  color: ${props => (props.theme.bodyColor ? props.theme.bodyColor : '#20232A')};
  background-color: ${props =>
    props.theme.bodyBG ? props.theme.bodyBG : '#FAFAFA'};
  padding: 50px 20px 80px;
  font-family: ${props =>
    props.theme.fontSans ? props.theme.fontSans : 'inherit'};
  section {
    position: relative;
    width: 100%;
    max-width: 980px;
    margin: auto;
    border: 1px solid #ddd;
    background-color: white;
    border-radius: 5px;
  }
  section header {
    padding: 9px 20px 10px;
    background-color: #f6f8fa;
    font-weight: bold;
    color: #292c34;
    font-size: 1em;
    border-radius: 5px 5px 0 0;
    border-bottom: 1px solid #ddd;
  }
  section header i {
    margin-right: 10px;
  }
  .ghp__markdown {
    padding: 20px 45px 45px;
  }
  .ghp__markdown h1,
  .ghp__markdown h2 {
    font-size: 2em;
    font-weight: 500;
    padding-bottom: 0.35em;
    border-bottom: 1px solid #eee;
  }
  .ghp__markdown h2 {
    margin-top: 40px;
    font-size: 1.5em;
  }
  .ghp__markdown p {
    line-height: 2;
  }
  .ghp__markdown pre {
    background-color: #f6f8fa;
    padding: 16px;
  }
  .ghp__markdown code {
    background-color: #f6f8fa !important;
    font-size: 14px;
    line-height: 20px;
    padding: 2px 5px;
  }
  .ghp__markdown a {
    color: #0366d6 !important;
    text-decoration: none;
  }
  .ghp__markdown a:hover {
    text-decoration: underline;
  }
  .ghp__markdown li {
    margin-bottom: 10px;
  }
  .ghp__markdown table {
    margin: 40px 0;
    text-align: left;
    border-collapse: collapse;
    width: 100%;
  }
  .ghp__markdown thead {
    text-align: center;
  }
  .ghp__markdown tr {
    background: white;
  }
  .ghp__markdown tr:nth-child(2n) {
    background-color: #f6f8fa;
  }
  .ghp__markdown th {
    font-weight: 500;
  }
  .ghp__markdown th,
  .ghp__markdown td {
    border: 1px solid #dfe2e5;
    padding: 9px 13px;
    line-height: 1.75;
  }
  .ghp__markdowntd code {
    background-color: rgba(27, 31, 35, 0.05) !important;
  }
`

export default Styled
