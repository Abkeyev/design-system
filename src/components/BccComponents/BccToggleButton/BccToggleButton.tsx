import ToggleButton from '@material-ui/lab/ToggleButton'
import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import theme from '../../../theme'

const BccToggleButton = withStyles({
  root: {
    borderColor: theme.palette.primary.main,
    '&:hover': {
      backgroundColor: theme.palette.primary.main,
      '& span': {
        color: theme.palette.common.white,
      },
    },
    '&.Mui-selected': {
      backgroundColor: theme.palette.primary.main,
      '&:hover': {
        backgroundColor: theme.palette.primary.light,
      },
      '& span': {
        color: theme.palette.common.white,
      },
    },
    '& span': {
      color: theme.palette.primary.main,
    },
  },
})(ToggleButton)

export default BccToggleButton
