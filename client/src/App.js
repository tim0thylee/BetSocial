import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Bets from "./pages/Bets";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import Register from "./pages/Register";
import Users from "./pages/Users";
import MyProfile from "./pages/MyProfile";
import UserProfile from "./pages/UserProfile";
import Nav from "./components/Nav";
import PrivateRoute from "./pages/PrivateRoute";
import "./App.css";



const App = () => (
<Router>
    <div className="app">
      <Nav />
      <Switch>
        <PrivateRoute exact path="/users/:id" component={UserProfile} />
        <PrivateRoute exact path="/bets/:id" component={Detail} />
        <PrivateRoute exact path="/" component={MyProfile} />
        <PrivateRoute exact path="/bets" component={Bets} />
        <PrivateRoute exact path="/users" component={Users} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/logout" component={Logout} />
        <Route exact path="/register" component={Register} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>
)

export default App;
