import React, { Fragment } from 'react'
import { useHistory, NavLink } from 'react-router-dom'
import { Grid, Snackbar } from '@material-ui/core'
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert'
import './Colors.css'
import BccTypography from '@bit/bcc.components.bcc-typography'

function Alert(props: AlertProps) {
  return <MuiAlert elevation={6} variant="filled" {...props} />
}

const colors = [
  {
    title: 'Nephritis Drak',
    code: '#249052',
  },
  {
    title: 'Nephritis',
    code: '#27AE60',
  },
  {
    title: 'Nephritis Light',
    code: '#52BE80',
  },
  {
    title: 'Nephritis 5',
    code: '#E9F7EF',
  },
  {
    title: 'White',
    code: '#FFFFFF',
  },
  {
    title: 'Nero',
    code: '#141414',
  },
  {
    title: 'Gray 70',
    code: '#5b5b5b',
  },
  {
    title: 'Gray 50',
    code: '#B9B9B9',
  },
  {
    title: 'Gray 30',
    code: '#B9B9B9',
  },
  {
    title: 'Gray 20',
    code: '#D0D0D0',
  },
  {
    title: 'Light Gray',
    code: '#E8E8E8',
  },
  {
    title: 'Disabled',
    code: '#F3F3F3',
  },
  {
    title: 'Light Bg',
    code: '#F8F8F8',
  },
  {
    title: 'Blue',
    code: '#28759A',
  },
  {
    title: 'Red',
    code: '#C84F4F',
  },
  {
    title: 'Success',
    code: '#65CC7B',
  },
  {
    title: 'Orange (Warning)',
    code: '#F5984E',
  },
]

const Colors = () => {
  const history = useHistory()
  const [open, setOpen] = React.useState(false)
  const [color, setColor] = React.useState('')

  const copyToChipboard = (code: string) => {
    navigator.clipboard.writeText(code)
    setColor(code)
    setOpen(true)
  }

  return (
    <Fragment>
      <div className="wrapper">
        <img src={process.env.PUBLIC_URL + '/colors.svg'} alt="Grid" />
      </div>
      <BccTypography block type="h4" className="descTitle">
        Полный набор цветов в интерфейсе
      </BccTypography>
      <Grid
        container
        direction="row"
        justify="flex-start"
        alignItems="flex-start"
        className="content-block"
        spacing={4}
      >
        {colors.map(c => (
          <Grid item>
            <div
              className="color"
              onClick={() => copyToChipboard(c.code)}
              style={{ backgroundColor: c.code }}
            >
              <div className="color-title">
                <span>{c.title}</span>
                <span>{c.code}</span>
              </div>
            </div>
          </Grid>
        ))}
      </Grid>
      <Snackbar
        open={open}
        autoHideDuration={1500}
        onClose={() => setOpen(false)}
      >
        <Alert onClose={() => setOpen(false)} severity="success">
          Цвет {color} скопирован!
        </Alert>
      </Snackbar>
    </Fragment>
  )
}

export default Colors
