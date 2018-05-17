import styled from 'styled-components'

const Styled = styled.header`
  height: 50px;
  padding: 0 40px;
  display: flex;
  justify-content: space-between;
  background-color: ${props =>
    props.theme.headerBG ? props.theme.headerBG : '#1054B3'
  };
  font-family: ${props =>
    props.theme.fontSans ? props.theme.fontSans : 'inherit'};
  box-sizing: border-box;
  top: 0;
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
    color: ${props =>
      props.theme.headerColor ? props.theme.headerColor : '#FFFFFF'};
    font-weight: 600;
  }
  .gh__link {
    margin-left: 20px;
    color: ${props =>
      props.theme.headerColor ? props.theme.headerColor : '#DFDFDF'};
    font-size: 26px;
    line-height: 50px;
  }
  .gh__link:hover {
    color: ${props =>
      props.theme.hoverColor ? props.theme.hoverColor : '#FFFFFF'};
  }
`

export default Styled
