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
    headerColor: t.string,
    bannerColor: t.string,
    bodyColor: t.string,
    hoverColor: t.string
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
    headerColor: '#DDDDDD',
    bannerColor: '#DDDDDD',
    bodyColor: '#20232A',
    hoverColor: '#34f96E'
  }
}

export { propTypes, defaultProps }
