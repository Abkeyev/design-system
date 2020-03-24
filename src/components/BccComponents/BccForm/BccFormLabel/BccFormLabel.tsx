import FormLabel from '@material-ui/core/FormLabel'
import { withStyles } from '@material-ui/core/styles'
import theme from '../../../../theme'

const BccFormLabel = withStyles({
  root: {
    color: theme.palette.grey[500],
    '&.Mui-error': {
      color: theme.palette.error.main,
    },
  },
})(FormLabel)

export default BccFormLabel
