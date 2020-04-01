import React from 'react'
import {
  BrowserRouter,
  Switch,
  Route,
  NavLink,
  useHistory,
} from 'react-router-dom'
import { Sidebar } from './components/Sidebar/Sidebar'
import { Components } from './components/Components/Components'
import { Home } from './pages/Home'
import { Colors, Usage, Grid, Typography } from './pages'
import { MuiThemeProvider } from '@material-ui/core/styles'
import theme from './theme'
import {
  BccButton,
  BccTypography,
  BccBreadcrumbs,
  BccChip,
} from './components/BccComponents'

const App = () => {
  let i = localStorage.getItem('item')
  let p = localStorage.getItem('parent')

  const [item, setItem] = React.useState(i !== null ? JSON.parse(i) : '')
  const [parent, setParent] = React.useState(p !== null ? JSON.parse(p) : '')

  return (
    <BrowserRouter>
      <MuiThemeProvider theme={theme}>
        <Sidebar
          parent={parent}
          item={item}
          handleSetItem={(i: any, parent: any) => {
            setItem(i)
            setParent(parent)
            localStorage.setItem('item', JSON.stringify(i))
            localStorage.setItem('parent', JSON.stringify(parent))
          }}
        />
        <Switch>
          <div className="container">
            {localStorage.getItem('item') &&
              localStorage.getItem('parent') &&
              item &&
              parent &&
              window.location.pathname !== '/' && (
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
              <Route path="/" component={Home} exact />
              <Route path="/overview/usage" component={Usage} exact />
              <Route path="/overview/colors" component={Colors} exact />
              <Route path="/overview/grid" component={Grid} exact />
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
