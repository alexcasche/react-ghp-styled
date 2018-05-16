import { PropTypes as t } from 'prop-types'

const propTypes = {
  logo: t.string,
  username: t.string,
  github: t.string,
  npm: t.string,
  title: t.string,
  description: t.string,
  readme: t.string,
  theme: t.shape({
    headerBG: t.string,
    bannerBG: t.string,
    bodyBG: t.string,
    fontSans: t.string,
    lightText: t.string,
    darkText: t.string,
    hoverText: t.string
  })
}
const defaultProps = {
  username: 'username',
  title: '[my]-title',
  description: 'my description',
  theme: {
    headerBG: '#20232A',
    bannerBG: '#292C34',
    bodyBG: '#FAFAFA',
    fontSans: 'inherit',
    lightText: '#DDDDDD',
    darkText: '#20232A',
    hoverText: '#34f96E'
  }
}

export { propTypes, defaultProps }
