import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import MuiAlert from '@material-ui/lab/Alert'

const BccAlert = withStyles({
  root: {
    fontSize: '16px',
  },
  action: {
    marginLeft: 0,
    marginRight: 0,
    paddingLeft: 16,
  },
  standardSuccess: {
    color: '#27AE60',
  },
})((props: any) => <MuiAlert {...props} />)

export default BccAlert
