import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import theme from '../../../theme'
import React from 'react'

const BccButton = withStyles({
  root: {
    borderRadius: 4,
    fontWeight: 'normal',
    color: theme.palette.common.white,
    textTransform: 'none',
    boxShadow: 'none',
    height: 56,
    fontSize: 16,
    padding: '0 20px',
    lineHeight: '56px',
    letterSpacing: 0,
    '&.MuiButton-containedSizeSmall': {
      height: 48,
      fontSize: 16,
      lineHeight: '48px',
      padding: 0,
    },
    '&.MuiButton-containedSizeLarge': {
      height: 64,
      fontSize: 18,
      lineHeight: '64px',
      padding: 0,
    },
    '&:focus': {
      boxShadow: 'none',
    },
    '&:hover': {
      backgroundColor: theme.palette.primary.light,
      boxShadow: 'none',
    },
    '&.Mui-disabled': {
      backgroundColor: theme.palette.grey[100],
      color: theme.palette.grey[400],
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#1F7042',
    },
    '&.MuiButton-text': {
      '&.Mui-disabled': {
        background: 'none',
        color: theme.palette.grey[400],
      },
    },
    '&.MuiButton-textPrimary': {
      color: theme.palette.primary.main,
      '&:hover': {
        background: 'none',
        color: theme.palette.primary.dark,
      },
      '&:active': {
        boxShadow: 'none',
        background: 'none',
      },
    },
    '&.MuiButton-textSecondary': {
      color: theme.palette.info.main,
      '&:hover': {
        background: 'none',
        color: '#1a526d',
      },
      '&:active': {
        boxShadow: 'none',
        background: 'none',
      },
    },
    '&.MuiButton-outlined': {
      backgroundColor: theme.palette.common.white,
      border: '1px solid',
      borderColor: theme.palette.grey[200],
      color: theme.palette.primary.main,
      '&:hover': {
        borderColor: theme.palette.primary.main,
      },
      '&:active': {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.common.white,
      },
      '&.Mui-disabled': {
        backgroundColor: theme.palette.grey[100],
        color: theme.palette.grey[400],
        borderColor: theme.palette.grey[200],
      },
    },
  },
})((props: any) => <Button {...props} />)

export default BccButton
