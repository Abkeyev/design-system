import Tabs from '@material-ui/core/Tabs'
import { withStyles } from '@material-ui/core/styles'
import theme from '../../../theme'

const BccTabs = withStyles({
  root: {
    '& .MuiTabs-flexContainer': {
      backgroundColor: theme.palette.grey[50],
    },
    '& .MuiTabs-indicator': {
      backgroundColor: theme.palette.primary.main,
    },
  },
})(Tabs)

export default BccTabs
