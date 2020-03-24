import InputLabel from '@material-ui/core/InputLabel'
import { withStyles } from '@material-ui/core/styles'
import theme from '../../../../theme'

const BccInputLabel = withStyles({
  root: {
    color: theme.palette.grey[500],
    padding: '0 20px',
    '&.Mui-focused': {
      paddingTop: 10,
    },
  },
})(InputLabel)

export default BccInputLabel
