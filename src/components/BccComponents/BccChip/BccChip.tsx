import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Chip from '@material-ui/core/Chip'

const BccChip = withStyles({
  root: {
    backgroundColor: '#27AE60',
    color: 'white',
    fontSize: 12,
    '& .MuiChip-icon, & .MuiChip-deleteIcon': {
      color: 'white',
    },
  },
  label: {
    padding: '8px 24px',
  },
  clickable: {
    '&:hover': {
      backgroundColor: '#7DCEA0',
    },
    '&:focus, &:active': {
      backgroundColor: '#1F7042',
    },
    '&.MuiChip-outlined': {
      '&:hover': {
        borderColor: '#7DCEA0',
        backgroundColor: 'white',
        color: '#7DCEA0',
      },
      '&:focus, &:active': {
        borderColor: '#1F7042',
        backgroundColor: 'white',
        color: '#1F7042',
      },
    },
  },
  sizeSmall: {
    fontSize: 10,
  },
  labelSmall: {
    padding: '4px 12px',
  },
  deletable: {
    '&:focus': {
      backgroundColor: '#27AE60',
    },
    '&.MuiChip-outlined': {
      '&:focus, &:active': {
        borderColor: '#27AE60',
        backgroundColor: 'white',
        color: '#27AE60',
      },
    },
  },
  outlined: {
    backgroundColor: 'white',
    borderColor: '#27AE60',
    color: '#27AE60',
    '& .MuiChip-icon, & .MuiChip-deleteIcon': {
      color: '#27AE60',
    },
  },
})((props: any) => <Chip {...props} />)

export default BccChip
