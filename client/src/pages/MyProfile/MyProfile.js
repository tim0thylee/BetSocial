import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import API from "../../utils/API";
import { List, ListItem } from "../../components/List";
import { Link } from "react-router-dom";


class MyProfile extends Component {
  state = {
    user: {},
    bets: {},
    betsTwo: {},
    betsThree: {}
  };
 
  componentDidMount() {
    API.getUser(this.props.match.params.id)
      .then(res => this.setState({ user: res.data }))
      .catch(err => console.log(err));

    // API.getBets({better_two: this.state.user.username})
    // .then(res => this.setState({ betsTwo: res.data }))
    // .catch(err => console.log(err));

    // API.getBets({validator: this.state.user.username})
    // .then(res => this.setState({ betsThree: res.data }))
    // .catch(err => console.log(err));
  }
  
getBets() {  
  API.getUserBets(this.state.user.username)
  .then(res => this.setState({ bets: res.data }))
  .catch(err => console.log(err));

  API.getUserBetsTwo(this.state.user.username)
  .then(res => this.setState({ betsTwo: res.data }))
  .catch(err => console.log(err));

  API.getValidatorBets(this.state.user.username)
  .then(res => this.setState({ betsThree: res.data }))
  .catch(err => console.log(err));
}

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
              <h1>
                {this.state.user.username}'s Profile
              </h1>
          </Col>
        </Row>
        <Row>
          <Col size="md-10 md-offset-1">
              <h1>Current Bets</h1>
              <button onClick ={() => this.getBets()}>Show All bets</button>
              <h2>Bets Opened By You</h2>
              {this.state.bets.length ? (
              <List>
                {this.state.bets.map(bet => (
                  <ListItem key={bet._id}>
                    <Link to={"/bets/" + bet._id}>
                      <strong>
                        {bet.better} bets {bet.better_two} {bet.wager} that {bet.description}, closed: {String(bet.closed)}
                      </strong>
                    </Link>
                  </ListItem>
                ))}
              </List>
            ) : (
                <h3>No Results to Display</h3>
              )}
                 <h2>Bets Wagered Against You</h2>
              {this.state.betsTwo.length ? (
              <List>
                {this.state.betsTwo.map(bet => (
                  <ListItem key={bet._id}>
                    <Link to={"/bets/" + bet._id}>
                      <strong>
                        {bet.better} bets {bet.better_two} {bet.wager} that {bet.description}, closed: {String(bet.closed)}
                      </strong>
                    </Link>
                  </ListItem>
                ))}
              </List>
            ) : (
                <h3>No Results to Display</h3>
              )}
              <h2>Bets You Are Validating</h2>
              {this.state.betsThree.length ? (
              <List>
                {this.state.betsThree.map(bet => (
                  <ListItem key={bet._id}>
                    <Link to={"/bets/" + bet._id}>
                      <strong>
                        {bet.better} bets {bet.better_two} {bet.wager} that {bet.description}, closed: {String(bet.closed)}
                      </strong>
                    </Link>
                  </ListItem>
                ))}
              </List>
            ) : (
                <h3>No Results to Display</h3>
              )}
          </Col>
        </Row>
        <Row>
        </Row>
      </Container>
    );
  }
}

export default MyProfile;
