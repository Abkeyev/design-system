import React from 'react'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import { NavLink } from 'react-router-dom'
import './Sidebar.css'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Collapse from '@material-ui/core/Collapse'
import ColorLensIcon from '@material-ui/icons/ColorLens'
import { BccInput } from '../BccComponents'
import InputAdornment from '@material-ui/core/InputAdornment'
import SearchIcon from '@material-ui/icons/Search'

export interface Component {
  id: number
  title: string
  desc?: string
  component: string
}

export interface Props {
  id: number
  name: string
  type?: string
  default?: string
  desc?: string
}

export interface Submenu {
  id: number
  title: string
  desc?: string
  version?: string
  link: string
  install?: string
  components?: Component[]
  props?: Props[]
}

export interface Menu {
  id: number
  title: string
  link: string
  submenu: Submenu[]
}

const menu: Menu[] = require('../../data/menu.json')

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      backgroundColor: theme.palette.background.paper,
      '& .MuiListItemIcon-root': {
        minWidth: 30,
      },
    },
    nested: {
      padding: 0,
    },
  })
)

export const Sidebar = (props: any) => {
  const classes = useStyles()
  const [open, setOpen] = React.useState([true, true])
  const [num, setNum] = React.useState(0)

  const handleClick = (id: number) => {
    let o = open
    o[id - 1] = !o[id - 1]
    setOpen(o)
    setNum(num + 1)
  }

  const setItem = (item: any, parent: any) => {
    props.handleSetItem(item, parent)
  }

  return (
    <>
      <div className="sidebar">
        <NavLink onClick={() => setItem('', '')} to="/">
          <div className="logo">
            <img src="logo-green.svg" alt="BCC Logo" />
          </div>
        </NavLink>
        <div className="menu">
          <List
            component="nav"
            aria-labelledby="nested-list-subheader"
            className={classes.root}
          >
            {menu.map(m => {
              return (
                <>
                  <ListItem
                    className={
                      props.parent && props.parent.id == m.id ? 'active' : ''
                    }
                    key={m.id}
                    button
                    onClick={() => handleClick(m.id)}
                  >
                    <ListItemIcon>
                      <ColorLensIcon />
                    </ListItemIcon>
                    <ListItemText primary={m.title} />
                  </ListItem>

                  <Collapse in={open[m.id - 1]} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                      {m.submenu.map(s => {
                        return (
                          <ListItem
                            key={s.id}
                            button
                            onClick={() => setItem(s, m)}
                            className={classes.nested}
                          >
                            <ListItemText
                              className={props.menuId == m.id ? 'active' : ''}
                            >
                              <NavLink to={`/${m.link}/${s.link}`}>
                                {s.title}
                              </NavLink>
                            </ListItemText>
                          </ListItem>
                        )
                      })}
                    </List>
                  </Collapse>
                </>
              )
            })}
          </List>
        </div>
      </div>
    </>
  )
}
