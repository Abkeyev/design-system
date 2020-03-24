import StepConnector from '@material-ui/core/StepConnector'
import { withStyles } from '@material-ui/core/styles'
import theme from '../../../../theme'

const BccStepConnector = withStyles({
  root: {},
  line: {
    border: '2px solid',
    borderColor: theme.palette.grey[100],
  },
  alternativeLabel: {
    top: 7,
    left: 'calc(-50% + 9px)',
    right: 'calc(50% + 9px)',
  },
  completed: {
    '& .MuiStepConnector-line': {
      borderColor: theme.palette.primary.main,
    },
  },
})(StepConnector)

export default BccStepConnector
