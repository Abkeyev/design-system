import { withStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import theme from '../../../theme'
import React from 'react'

const BccInput = withStyles({
  root: {
    '& .MuiInputBase-root': {
      color: theme.palette.grey[600],
    },
    '& .MuiFormHelperText-contained': {
      marginLeft: 0,
    },
    '& label.Mui-focused': {
      color: theme.palette.primary.main,
    },
    '& .MuiInputLabel-outlined': {
      color: theme.palette.grey[500],
      '&.Mui-focused': {
        color: theme.palette.grey[500],
        '&.Mui-error': {
          color: theme.palette.error.main,
        },
      },
    },
    '& .MuiInputLabel-filled': {
      color: theme.palette.grey[500],
      '&.Mui-focused': {
        color: theme.palette.grey[500],
        '&.Mui-error': {
          color: theme.palette.error.main,
        },
      },
    },
    '& .MuiInput-underline:hover': {
      '&:before': {
        borderBottomColor: theme.palette.primary.main,
      },
    },
    '& .MuiInput-underline:before': {
      borderBottomColor: theme.palette.primary.main,
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: theme.palette.primary.main,
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#E8E8E8',
      },
      '&:hover fieldset': {
        borderColor: theme.palette.grey[400],
      },
      '&.Mui-focused fieldset': {
        borderColor: theme.palette.primary.main,
        borderWidth: 1,
      },
      '&.Mui-disabled fieldset': {
        backgroundColor: theme.palette.grey[100],
        border: 'none',
      },
      '&.Mui-error fieldset': {
        borderColor: theme.palette.error.main,
      },
    },
    '& .MuiFilledInput-root': {
      background: 'none',
      border: '1px solid',
      borderRadius: 4,
      borderColor: theme.palette.grey[200],
      '&:before': {
        border: 'none',
      },
      '&:after': {
        border: 'none',
      },
      '&:hover': {
        borderColor: theme.palette.grey[400],
      },
      '&.Mui-focused': {
        borderColor: theme.palette.primary.main,
      },
      '&.Mui-disabled': {
        backgroundColor: theme.palette.grey[100],
        border: 'none',
      },
      '&.Mui-error': {
        borderColor: theme.palette.error.main,
      },
    },
  },
})((props: any) => (
  <TextField variant={props.variant ? props.variant : 'filled'} {...props} />
))

export default BccInput
