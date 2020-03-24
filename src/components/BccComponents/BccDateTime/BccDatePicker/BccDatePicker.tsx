import { KeyboardDatePicker } from '@material-ui/pickers'
import { withStyles } from '@material-ui/core/styles'
import Tooltip from '@material-ui/core/Tooltip'
import React from 'react'
import theme from '../../../../theme'

const BccDatePicker = withStyles({
  root: {
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: theme.palette.grey[200],
    },
    '& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
      borderColor: theme.palette.grey[400],
    },
    '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: theme.palette.primary.main,
      borderWidth: 1,
    },
  },
})((props: any) => (
  <KeyboardDatePicker cancelLabel="Отмена" inputVariant="outlined" {...props} />
))

export default BccDatePicker
