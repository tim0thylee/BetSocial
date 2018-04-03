import React from "react";
import { BrowserRouter as Route, Redirect } from "react-router-dom";
import Auth from '../../utils/Auth';

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={props => 
        Auth.test() ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );

export default PrivateRoute;