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
    pageBG: t.string,
    fontSans: t.string,
    headerColor: t.string,
    bannerColor: t.string,
    pageColor: t.string,
    hoverColor: t.string
  })
}
const defaultProps = {
  username: 'username',
  title: '[my]-title',
  description: 'my description'
}

export { propTypes, defaultProps }
