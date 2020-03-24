import Popover from '@material-ui/core/Popover'
import { withStyles } from '@material-ui/core/styles'
import React from 'react'

const BccPopover = withStyles({
  root: {},
})((props: any) => <Popover {...props} />)

export default BccPopover
