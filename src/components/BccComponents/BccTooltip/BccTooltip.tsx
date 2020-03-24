import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Tooltip from '@material-ui/core/Tooltip'
import theme from '../../../theme'

const BccTooltip = withStyles({
  popper: {
    marginTop: 5,
  },
  tooltip: {
    backgroundColor: theme.palette.secondary.light,
    color: theme.palette.grey[600],
    padding: '14px 16px',
    marginTop: 15,
    fontSize: 12,
    maxWidth: '200px',
    boxShadow: '0px 4px 8px rgba(31, 112, 66, 0.2)',
  },
  arrow: {
    '&:before': {
      borderBottomColor: `${theme.palette.secondary.light}!important`,
    },
  },
})(Tooltip)

export default BccTooltip
