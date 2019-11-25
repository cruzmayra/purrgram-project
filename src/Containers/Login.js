import React from 'react'
import ContextUser from '../Context/ContextUser'

const Login = ({handleChange}) => {
  return (
    <ContextUser.Consumer>
      {
        value => {
          return (
            <div className="container is-fullhd login-container has-background-white-bis">
              <div className="column is-6">
                <h1 class="title">Enter and enjoy beautiful images of cats.</h1>
                <div className="field">
                  <p className="control">
                    <input className="input"
                      type="email"
                      placeholder="Ingresa tu usuario"
                      onChange={ handleChange }/>
                  </p>
                </div>
                <div className="field">
                  <p className="control">
                      <button className="button is-primary" onClick={ () => window.location.href= "/home"}>
                        Login
                      </button>
                  </p>
                </div>
              </div>
            </div>
          )
        }
      }
    </ContextUser.Consumer>
    

  )
}

export default Login