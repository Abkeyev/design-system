import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Chip from '@material-ui/core/Chip'
import theme from '../../../theme'

const BccChip = withStyles({
  root: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    fontSize: 11,
    '& .MuiChip-icon, & .MuiChip-deleteIcon': {
      color: theme.palette.common.white,
    },
  },
  clickable: {
    '&:hover': {
      backgroundColor: theme.palette.primary.light,
    },
    '&:focus, &:active': {
      backgroundColor: theme.palette.primary.dark,
    },
    '&.MuiChip-outlined': {
      '&:hover': {
        borderColor: theme.palette.primary.light,
        backgroundColor: 'white',
        color: theme.palette.primary.light,
      },
      '&:focus, &:active': {
        borderColor: theme.palette.primary.dark,
        backgroundColor: 'white',
        color: theme.palette.primary.dark,
      },
    },
  },
  sizeSmall: {
    fontSize: 10,
  },
  deletable: {
    '&:focus': {
      backgroundColor: theme.palette.primary.main,
    },
    '&.MuiChip-outlined': {
      '&:focus, &:active': {
        borderColor: theme.palette.primary.main,
        backgroundColor: 'white',
        color: theme.palette.primary.main,
      },
    },
  },
  outlined: {
    backgroundColor: 'white',
    borderColor: theme.palette.primary.main,
    color: theme.palette.primary.main,
    '& .MuiChip-icon, & .MuiChip-deleteIcon': {
      color: theme.palette.primary.main,
    },
  },
})((props: any) => <Chip {...props} />)

export default BccChip
