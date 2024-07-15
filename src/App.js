import React, { Fragment } from 'react'
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom'
import { CSSTransition,TransitionGroup } from 'react-transition-group'
import './assets/scss/app.scss';
import 'react-toastify/dist/ReactToastify.css'
import {routes} from './routes/index'
import Updating from './components/layout/updating'
import useToken from './utilities/useToken'
import Loading from './components/layout/loading'
import TapTop from './components/layout/tapTop';

const Login = React.lazy(() => import('./screens/login/index'))
const LoginErp = React.lazy(() => import('./screens/login/loginErp'))
const Home = React.lazy(() => import('./screens/home/index'))

const App = () => {

  const { token, setToken } = useToken()

  return (
    <Fragment>
            <TapTop />
      <BrowserRouter basename={`/`}>
        <React.Suspense fallback={Loading}>
      {
        !token ? (
          <Switch>
            <Route exact path={'/'} render={() => {
                return (<Redirect to='/login'/>)
              }} /> 
            <Route exact path="/login" name="Login Page" render={() => <Login setToken={setToken} />} />
            <Route exact path="/login-erp/:username/:password" name="Login Erp Page" render={() => <LoginErp/>} />
          </Switch>
        ) : (
          <Switch>
            <Home>
              <Route exact path={'/'} render={() => {
                return (<Redirect to='/homepage'/>)
              }} /> 
              <TransitionGroup>
                <CSSTransition 
                  timeout={0}
                  unmountOnExit>
                  <Switch>
                    {
                      routes.map(({ path, Component }) => (
                        <Route key={path}  exact  path={`${path}`}>
                          {() => (
                            <div><Component userInfo={token}/></div>
                          )}
                        </Route>
                      ))
                    }
                    <Route component={Updating}/>
                  </Switch>
                </CSSTransition>
              </TransitionGroup>
            </Home>
          </Switch>
        )
      }
        </React.Suspense>
      </BrowserRouter>
    </Fragment>
  )
}

export default App