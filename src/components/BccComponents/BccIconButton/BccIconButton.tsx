import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import IconButton from '@material-ui/core/IconButton'
import theme from '../../../theme'

const BccIconButton = withStyles({
  root: {},
})((props: any) => <IconButton {...props} />)

export default BccIconButton
