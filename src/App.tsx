import React from 'react'
import {
  BrowserRouter,
  Switch,
  Route,
  NavLink,
  Redirect,
} from 'react-router-dom'
import { Sidebar } from './components/Sidebar/Sidebar'
import { Components } from './components/Components/Components'
import { Colors, Usage, Grid, Typography } from './pages'
import { MuiThemeProvider } from '@material-ui/core/styles'
import theme from './theme'
import {
  BccTypography,
  BccBreadcrumbs,
  BccChip,
} from './components/BccComponents'

import { Menu } from './components/Sidebar/Sidebar'
import { animateScroll } from 'react-scroll'

const menu: Menu[] = require('./data/menu.json')

const App = () => {
  let i = localStorage.getItem('item')
  let p = localStorage.getItem('parent')
  animateScroll.scrollToTop(0)
  if (window.location.pathname === '/') {
  }

  const [item, setItem] = React.useState(
    i !== null &&
      window.location.pathname !== '/' &&
      window.location.pathname !== '/overview/usage'
      ? JSON.parse(i)
      : menu[0].submenu[0]
  )
  const [parent, setParent] = React.useState(
    p !== null &&
      window.location.pathname !== '/' &&
      window.location.pathname !== '/overview/usage'
      ? JSON.parse(p)
      : menu[0]
  )

  const handleSetRoute = (index: number) => {
    setItem(menu[0].submenu[index])
    localStorage.setItem('item', JSON.stringify(menu[0].submenu[index]))
  }

  return (
    <BrowserRouter basename={`${process.env.PUBLIC_URL}/`}>
      <MuiThemeProvider theme={theme}>
        <Sidebar
          parent={parent}
          item={item}
          handleSetItem={(i: any, parentSidebar: any) => {
            setItem(i)
            setParent(parentSidebar)
            localStorage.setItem('item', JSON.stringify(i))
            localStorage.setItem('parent', JSON.stringify(parentSidebar))
          }}
        />
        <Switch>
          <div className="container">
            {item && parent && (
              <>
                <BccTypography block type="p4" className="breadcrumbs">
                  <BccBreadcrumbs>
                    <NavLink
                      onClick={() => {
                        setItem('')
                        setParent('')
                      }}
                      to="/"
                    >
                      BCC Design System
                    </NavLink>
                    <BccTypography type="p4" className="last-crumb">
                      {parent.title}
                    </BccTypography>
                    <BccTypography type="p4" className="last-crumb">
                      {item.title}
                    </BccTypography>
                  </BccBreadcrumbs>
                </BccTypography>
                <BccTypography type="h3" weight="normal" className="title">
                  {item.title}{' '}
                  {item.version && (
                    <BccChip size="small" label={`v${item.version}`} />
                  )}
                </BccTypography>
              </>
            )}
            <div className="container-block">
              <Route
                path="/"
                render={() => <Redirect to="/overview/usage" />}
                exact
              />
              <Route
                path="/overview/usage"
                render={() => (
                  <Usage setRoute={(index: number) => handleSetRoute(index)} />
                )}
                exact
              />
              <Route
                path="/overview/colors"
                render={() => (
                  <Colors setRoute={(index: number) => handleSetRoute(index)} />
                )}
                exact
              />
              <Route
                path="/overview/grid"
                render={() => (
                  <Grid setRoute={(index: number) => handleSetRoute(index)} />
                )}
                exact
              />
              <Route path="/overview/typography" component={Typography} exact />
              <Route
                path="/components/:itemId"
                render={props => (
                  <Components {...props} item={item} parent={parent} />
                )}
              />
            </div>
          </div>
        </Switch>
      </MuiThemeProvider>
    </BrowserRouter>
  )
}

export default App
