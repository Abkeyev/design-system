import React from 'react'
import {
  withStyles,
  makeStyles,
  Theme,
  createStyles,
} from '@material-ui/core/styles'
import Avatar from '@material-ui/core/Avatar'
import theme from '../../../theme'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    green: {
      color: `${theme.palette.common.white}!important`,
      backgroundColor: `${theme.palette.primary.main}!important`,
    },
  })
)

const BccAvatar = withStyles({
  root: {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.grey[500],
  },
})((props: any) => {
  const classes = useStyles()
  return <Avatar className={props.green ? classes.green : ''} {...props} />
})

export default BccAvatar
