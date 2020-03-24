import React from 'react'
import { BccTabs, BccTab } from '../../BccComponents'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import theme from '../../../theme'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    tabs: {
      padding: '8px 16px',
      backgroundColor: theme.palette.grey[50],
    },
  })
)

const BccTabsEx = () => {
  const [value, setValue] = React.useState(0)
  const classes = useStyles()

  return (
    <div>
      <BccTabs
        value={value}
        onChange={(e: any, index: number) => setValue(index)}
        aria-label="simple tabs example"
      >
        <BccTab label="Таб 1" />
        <BccTab label="Таб 2" />
        <BccTab label="Таб 3" />
      </BccTabs>
      <div className={classes.tabs} hidden={value !== 0}>
        Таб 1
      </div>
      <div className={classes.tabs} hidden={value !== 1}>
        Таб 2
      </div>
      <div className={classes.tabs} hidden={value !== 2}>
        Таб 3
      </div>
    </div>
  )
}

export default BccTabsEx
