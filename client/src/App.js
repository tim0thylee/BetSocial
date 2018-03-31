import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Bets from "./pages/Bets";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Friends from "./pages/Friends"
import Nav from "./components/Nav";
import Tablist from "./components/Tablist"

const App = () => (
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={Bets} />
        <Route exact path="/bets/:id" component={Detail} />
        <Route exact path='/Detail' component={Detail} />
        <Route exact path="/Friends" component={Friends} />
        <Route exact path="/Bets" component={Bets} />
        <Route component={NoMatch} />
      </Switch>
      <Tablist />
    </div>
  </Router>
);

export default App;
