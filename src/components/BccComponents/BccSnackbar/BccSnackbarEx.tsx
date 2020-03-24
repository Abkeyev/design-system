import React from 'react'
import Button from '@material-ui/core/Button'
import { BccSnackbar, BccButton, BccAlert } from '../../BccComponents'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'

export default function SimpleSnackbar() {
  const [open, setOpen] = React.useState(false)

  const handleClick = () => {
    setOpen(true)
  }

  const handleClose = (
    event: React.SyntheticEvent | React.MouseEvent,
    reason?: string
  ) => {
    if (reason === 'clickaway') {
      return
    }

    setOpen(false)
  }

  return (
    <div>
      <BccButton variant="text" color="primary" onClick={handleClick}>
        Открыть Snackbar
      </BccButton>
      <BccSnackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <BccAlert onClose={handleClose} severity="success">
          This is a success message!
        </BccAlert>
      </BccSnackbar>
    </div>
  )
}
