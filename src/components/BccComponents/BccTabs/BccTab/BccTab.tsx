import Tab from '@material-ui/core/Tab'
import { withStyles } from '@material-ui/core/styles'
import theme from '../../../../theme'

const BccTab = withStyles({
  root: {
    color: theme.palette.grey[600],
  },
})(Tab)

export default BccTab
