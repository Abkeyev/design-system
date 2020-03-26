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
    padding: '0 24px',
    lineHeight: '56px',
    letterSpacing: 0,
    '&.Mui-focusVisible': {
      boxShadow: 'none',
    },
    '&.MuiButton-containedPrimary': {
      '&.Mui-focusVisible': {
        '&::before': {
          content: '" "',
          border: '1px solid',
          borderColor: theme.palette.common.white,
          position: 'absolute',
          left: 5,
          right: 5,
          bottom: 5,
          top: 5,
          borderRadius: 4,
        },
      },
    },
    '&.MuiButton-containedSecondary': {
      color: theme.palette.primary.dark,
      backgroundColor: theme.palette.secondary.main,
      '&:hover': {
        backgroundColor: theme.palette.secondary.dark,
      },
      '&:active': {
        backgroundColor: theme.palette.primary.light,
      },
      '&.Mui-focusVisible': {
        '&::before': {
          content: '" "',
          border: '1px solid',
          borderColor: theme.palette.primary.light,
          position: 'absolute',
          left: 5,
          right: 5,
          bottom: 5,
          top: 5,
          borderRadius: 4,
        },
      },
    },
    '&.MuiButton-sizeSmall': {
      height: 48,
      fontSize: 16,
      lineHeight: '48px',
    },
    '&.MuiButton-sizeLarge': {
      height: 64,
      fontSize: 18,
      lineHeight: '64px',
    },
    '&:focus': {
      boxShadow: 'none',
    },
    '&:hover': {
      backgroundColor: theme.palette.primary.light,
      boxShadow: 'none',
    },
    '&.Mui-disabled': {
      backgroundColor: theme.palette.grey[50],
      color: theme.palette.grey[300],
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#1F7042',
    },
    '&.MuiButton-text': {
      textTransform: 'uppercase',
      color: theme.palette.primary.main,
      '&:hover': {
        background: 'none',
        color: theme.palette.primary.dark,
      },
      '&:active': {
        boxShadow: 'none',
        background: 'none',
      },
      '&.Mui-focusVisible': {
        background: theme.palette.grey[50],
      },
      '&.Mui-disabled': {
        background: 'none',
        color: theme.palette.grey[200],
      },
    },
    '&.MuiButton-outlined': {
      '&.Mui-disabled': {
        backgroundColor: theme.palette.grey[50],
        color: theme.palette.grey[300],
        border: 'none',
      },
    },
    '&.MuiButton-outlinedPrimary': {
      backgroundColor: theme.palette.grey[50],
      border: 'none',
      color: theme.palette.grey[600],
      '&:hover': {
        backgroundColor: theme.palette.grey[200],
      },
      '&:active': {
        backgroundColor: theme.palette.grey[300],
      },
      '&.Mui-focusVisible': {
        '&::before': {
          content: '" "',
          border: '1px solid',
          borderColor: theme.palette.grey[200],
          position: 'absolute',
          left: 5,
          right: 5,
          bottom: 5,
          top: 5,
          borderRadius: 4,
        },
      },
    },
    '&.MuiButton-outlinedSecondary': {
      color: theme.palette.grey[600],
      border: '1px solid',
      borderColor: theme.palette.grey[200],
      background: 'none',
      '&:hover': {
        borderColor: theme.palette.grey[600],
        backgroundColor: 'rgba(0,0,0,0)',
      },
      '&:active': {
        backgroundColor: theme.palette.grey[50],
      },
      '&.Mui-focusVisible': {
        '&::before': {
          content: '" "',
          border: '1px solid',
          borderColor: theme.palette.grey[200],
          position: 'absolute',
          left: 5,
          right: 5,
          bottom: 5,
          top: 5,
          borderRadius: 4,
        },
      },
    },
  },
})((props: any) => <Button {...props} />)

export default BccButton
