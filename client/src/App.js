import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Books from "./pages/Books";
import Bets from "./pages/Bets";
import Activity from "./pages/Activity";
import Detail from "./pages/Detail";
import Friends from "./pages/Friends";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";

const App = () => (
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={Activity} />
        <Route exact path="/activity" component={Activity} />
        <Route exact path="/friends" component={Friends} />
        <Route exact path="/bets" component={Bets} />
        <Route exact path="/bets/:id" component={Activity} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>
);

export default App;
