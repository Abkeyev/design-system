import React from 'react'
import StepIcon from '@material-ui/core/StepIcon'
import { withStyles } from '@material-ui/core/styles'
import theme from '../../../../theme'

const BccStepIcon = withStyles({
  root: {
    border: '2px solid',
    borderColor: theme.palette.grey[100],
    '& > svg': {
      display: 'none',
    },
  },
})((props: any) => <StepIcon icon={0} {...props} />)

export default BccStepIcon
