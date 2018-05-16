import styled from 'styled-components'

const Styled = styled.header`
  height: 50px;
  padding: 0 40px;
  display: flex;
  justify-content: space-between;
  background-color: ${props => props.theme.headerBG};
  font-family: ${props => props.theme.fontSans};
  box-sizing: border-box;
  top: 0;
  width: 100vw;
  .gh__logo {
    height: 20px;
    position: relative;
    top: 14px;
    margin-right: 10px;
  }
  .gh__username {
    flex-grow: 2;
    margin: 0;
    font-size: 20px;
    line-height: 50px;
    font-size: 17px;
    color: ${props => props.theme.lightText};
    font-weight: 600;
  }
  .gh__link {
    margin-left: 20px;
    color: ${props => props.theme.lightText};
    font-size: 26px;
    line-height: 50px;
  }
  .gh__link:hover {
    color: ${props => props.theme.hoverText};
  }
`

export default Styled
