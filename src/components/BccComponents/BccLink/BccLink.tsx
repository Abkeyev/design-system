import Link from '@material-ui/core/Link'
import { withStyles } from '@material-ui/core/styles'

const BccLink = withStyles({
  root: {
    fontSize: 16,
    color: '#27AE60',
    cursor: 'pointer',
    fontWeight: 'normal',
    textTransform: 'uppercase',
    letterSpacing: 0,
  },
})(Link)

export default BccLink
