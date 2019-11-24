import React from 'react'
import {Route, Redirect} from 'react-router-dom'

import ContextUser from '../Context/ContextUser'

const PrivateRoute = ({children, ...rest}) => {
  return (
    <ContextUser.Consumer>
      {
        value => {
          return (
            <Route 
              {...rest}
              render={({ location }) =>
              value ? (
                children
              ) : (
              <Redirect
                to={{
                  pathname:"/",
                  state: {from: location }
                }} />
              )
            }>
            </Route>
          )
        }
      }
    </ContextUser.Consumer>
  )
}

export default PrivateRoute