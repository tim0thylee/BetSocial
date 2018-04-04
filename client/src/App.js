import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Bets from "./pages/Bets";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import MyProfile from "./pages/MyProfile";
// import Friends from "./pages/Friends"
import Nav from "./components/Nav";
// import Tablist from "./components/Tablist";
import PrivateRoute from "./pages/PrivateRoute";


const App = () => (
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={Profile} />
        <Route exact path="/users/:id" component={MyProfile} />
        <Route exact path="/bets/:id" component={Detail} />
        <PrivateRoute exact path="/bets" component={Bets} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/logout" component={Logout} />
        <Route exact path="/register" component={Register} />
        <Route component={NoMatch} />
      </Switch>
      {/* <Tablist /> */}
    </div>
  </Router>
);

export default App;
