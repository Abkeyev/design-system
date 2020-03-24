import Badge from '@material-ui/core/Badge'
import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import MailIcon from '@material-ui/icons/Mail'
import theme from '../../../theme'

const BccBadge = withStyles({
  badge: {
    color: theme.palette.common.white,
  },
})(Badge)

export default BccBadge
