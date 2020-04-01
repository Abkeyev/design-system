import React from 'react'
import BccDialog from '@bit/bcc.components.bcc-dialog'
import BccDialogActions from '@bit/bcc.components.bcc-dialog-actions'
import BccDialogTitle from '@bit/bcc.components.bcc-dialog-title'
import BccDialogContent from '@bit/bcc.components.bcc-dialog-content'
import BccButton from '@bit/bcc.components.bcc-button'
import BccTypography from '@bit/bcc.components.bcc-typography'

export default function CustomizedDialogs() {
  const [open, setOpen] = React.useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }

  return (
    <div>
      <BccButton variant="outlined" onClick={handleClickOpen}>
        Открыть
      </BccButton>
      <BccDialog
        fullScreen
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BccDialogTitle id="customized-dialog-title" onClose={handleClose}>
          <BccTypography type="h5">Заголовок</BccTypography>
        </BccDialogTitle>
        <BccDialogContent dividers>
          <BccTypography type="p1">
            Сохранить введенные вами данные и перейти к следуюшему шагу?
          </BccTypography>
        </BccDialogContent>
        <BccDialogActions>
          <BccButton
            autoFocus
            onClick={handleClose}
            variant="contained"
            size="small"
            color="primary"
          >
            Надпись
          </BccButton>
        </BccDialogActions>
      </BccDialog>
    </div>
  )
}
