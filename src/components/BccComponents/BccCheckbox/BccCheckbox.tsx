import React from 'react'
import Checkbox from '@material-ui/core/Checkbox'
import { withStyles } from '@material-ui/core/styles'
import theme from '../../../theme'

const BccCheckbox = withStyles({
  root: {
    color: theme.palette.grey[500],
    '&.Mui-disabled': {
      '&$checked': {
        color: theme.palette.grey[400],
      },
    },
    '&.Mui-checked': {
      color: theme.palette.primary.main,
      '&:hover': {
        background: 'none',
      },
    },
    '&:hover': {
      background: 'none',
      color: theme.palette.primary.main,
    },
  },
  checked: {},
})((props: any) => <Checkbox {...props} />)

export default BccCheckbox
