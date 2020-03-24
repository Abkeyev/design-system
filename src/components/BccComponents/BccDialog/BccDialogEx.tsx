import React from 'react'
import {
  createStyles,
  Theme,
  withStyles,
  WithStyles,
} from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import {
  BccDialog,
  BccDialogActions,
  BccDialogTitle,
  BccDialogContent,
  BccButton,
  BccTypography,
} from '../../BccComponents'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'
import Typography from '@material-ui/core/Typography'

const styles = (theme: Theme) =>
  createStyles({
    root: {
      margin: 0,
      padding: theme.spacing(2),
    },
    closeButton: {
      position: 'absolute',
      right: theme.spacing(1),
      top: theme.spacing(1),
      color: theme.palette.grey[500],
    },
  })

export interface DialogTitleProps extends WithStyles<typeof styles> {
  id: string
  children: React.ReactNode
  onClose: () => void
}

const DialogTitle = withStyles(styles)((props: DialogTitleProps) => {
  const { children, classes, onClose, ...other } = props
  return (
    <BccDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </BccDialogTitle>
  )
})

const DialogContent = withStyles((theme: Theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(BccDialogContent)

const DialogActions = withStyles((theme: Theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(BccDialogActions)

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
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          <BccTypography type="h5">Заголовок</BccTypography>
        </DialogTitle>
        <DialogContent dividers>
          <BccTypography type="p1">
            Сохранить введенные вами данные и перейти к следуюшему шагу?
          </BccTypography>
        </DialogContent>
        <DialogActions>
          <BccButton
            autoFocus
            onClick={handleClose}
            variant="contained"
            size="small"
            color="primary"
          >
            Надпись
          </BccButton>
        </DialogActions>
      </BccDialog>
    </div>
  )
}
