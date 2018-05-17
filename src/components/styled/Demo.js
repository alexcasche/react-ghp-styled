import styled from 'styled-components'

const Styled = styled.div`
  position: relative;
  padding: 20px 20px 80px;
  background-color: ${props =>
    props.theme.bannerBG ? props.theme.bannerBG : '#1666D3'};
  text-align: center;
  font-family: ${props =>
    props.theme.fontSans ? props.theme.fontSans : 'inherit'};
  & > * {
    position: relative;
  }
  .ghp__title {
    text-align: center;
    color: ${props =>
      props.theme.bannerColor ? props.theme.bannerColor : '#DFDFDF'};
    font-weight: 500;
    margin: .5em auto .25em;
    font-size: 2em;
    @media (min-width: 768px) {
      font-size: 2.75em;
    }
    @media (min-width: 1000px) {
      font-size: 3.5em;
    }
  }
  .ghp__title span {
    color: ${props =>
      props.theme.hoverColor ? props.theme.hoverColor : '#FFFFFF'};
  }
  .ghp__description {
    color: ${props =>
      props.theme.bannerColor ? props.theme.bannerColor : '#DFDFDF'};
    max-width: 750px;
    margin: .5em auto 1.75em;
    font-weight: 400;
    line-height: 1.75;
    font-size: 1.1em;
    @media (min-width: 768px) {
      font-size: 1.2em;
    }
    @media (min-width: 1000px) {
      font-size: 1.4em;
    }
  }
`

export default Styled
