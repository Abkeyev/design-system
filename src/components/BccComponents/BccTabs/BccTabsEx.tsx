import React from 'react'
import BccTab from '@bit/bcc.components.bcc-tab'
import BccTabs from '@bit/bcc.components.bcc-tabs'

import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    tabs: {
      padding: '8px 0',
      fontSize: 16,
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
        <BccTab label="Частным лицам" />
        <BccTab label="Бизнес клиентам" />
        <BccTab label="P2P переводы" />
        <BccTab label="Офисы" />
        <BccTab label="Банкоматы" />
      </BccTabs>
      <div className={classes.tabs} hidden={value !== 0}>
        Частным лицам
      </div>
      <div className={classes.tabs} hidden={value !== 1}>
        Бизнес клиентам
      </div>
      <div className={classes.tabs} hidden={value !== 2}>
        P2P переводы
      </div>
      <div className={classes.tabs} hidden={value !== 3}>
        Офисы
      </div>
      <div className={classes.tabs} hidden={value !== 4}>
        Банкоматы
      </div>
    </div>
  )
}

export default BccTabsEx
