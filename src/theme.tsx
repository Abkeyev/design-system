import { createMuiTheme } from '@material-ui/core/styles'

export default createMuiTheme({
  props: {
    MuiButtonBase: {
      disableRipple: true,
      color: 'primary',
    },
    MuiCheckbox: {
      color: 'primary',
    },
  },
  overrides: {
    MuiPickersToolbar: {
      toolbar: {
        backgroundColor: '#27AE60',
        '& .MuiPickersToolbarText-toolbarBtnSelected': {
          color: 'white',
        },
        '& .MuiPickersToolbarText-toolbarTxt': {
          color: '#F3F3F3',
        },
      },
    },
    MuiPickersClock: {
      clock: {
        '& .MuiPickersClockNumber-clockNumberSelected': {
          color: 'white',
        },
      },
    },
    MuiPickersDay: {
      day: {
        color: '#141414',
      },
      daySelected: {
        backgroundColor: '#27AE60',
        color: 'white',
      },
      dayDisabled: {
        color: 'blue',
      },
      current: {
        color: '#27AE60',
      },
    },
    MuiPickersModal: {
      dialogAction: {
        color: 'blue',
      },
    },
  },
  palette: {
    primary: {
      light: '#7DCEA0',
      main: '#27AE60',
      dark: '#1F7042',
    },
    secondary: {
      main: '#E9F7EF',
      dark: '#BEEBD1',
    },
    info: {
      main: '#28759A',
    },
    error: {
      main: '#C84F4F',
    },
    grey: {
      50: '#F3F3F3', //background
      100: '#E6E7E8', //disabled
      200: '#CCCFD1', //border
      300: '#B3B6BA',
      400: '#80868C', //icon
      500: '#4D565F',
      600: '#000D1A', //black
    },
  },
})
