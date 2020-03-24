import { withStyles } from '@material-ui/core/styles'
import Radio from '@material-ui/core/Radio'
import theme from '../../../theme'

const BccRadio = withStyles({
  root: {
    color: theme.palette.grey[500],
    '&.Mui-checked': {
      color: theme.palette.primary.main,
    },
    '&.Mui-disabled': {
      '&.Mui-checked': {
        color: theme.palette.grey[300],
      },
    },
  },
})(Radio)

export default BccRadio
