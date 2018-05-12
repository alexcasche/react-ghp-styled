import styled from 'styled-components'

const Styled = styled.header`
  height: 50px;
  padding: 0 40px;
  display: flex;
  justify-content: space-between;
  background-color: #20232a;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
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
    color: #ccc;
    font-weight: 600;
  }
  .gh__link {
    margin-left: 20px;
    color: #ccc;
    font-size: 26px;
    line-height: 50px;
  }
  .gh__link:hover {
    color: #33f96f;
  }
`

export default Styled
