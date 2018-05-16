import styled from 'styled-components'

const Styled = styled.div`
  position: relative;
  padding: 20px 20px 80px;
  background-color: ${props => props.theme.bannerBG};
  text-align: center;
  font-family: ${props => props.theme.fontSans};
  & > * {
    position: relative;
  }
  .ghp__title {
    text-align: center;
    color: ${props => props.theme.lightText};
    font-weight: 500;
    font-style: italic;
    margin: 50px auto 15px;
    font-size: 40px;
    @media (min-width: 768px) {
      font-size: 50px;
    }
    @media (min-width: 900px) {
      font-size: 60px;
    }
  }
  .ghp__title span {
    color: ${props => props.theme.hoverText};
  }
  .ghp__description {
    color: ${props => props.theme.lightText};
    max-width: 750px;
    margin: 10px auto 40px;
    font-size: 20px;
    font-weight: 300;
    line-height: 1.75;
  }
`

export default Styled
