import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import API from "../../utils/API";
import Auth from "../../utils/Auth";
import { List, ListItem } from "../../components/List";
import { Link } from "react-router-dom";

class MyProfile extends Component {
  state = {
    user: "",
    bets: {},
    betsTwo: {},
    betsThree: {},
    friends: {},
    friendsTwo: {}
  };

  componentDidMount() {
    this.loadCurrent();
  }

  loadCurrent = () => {

    let user = Auth.getUser();

    API.getCurrentUser(user)
    .then( res => {
      this.setState({ user: res.data[0].username, friends: res.data[0].friends })
      this.getBets()
      this.getFriendsInfo()
      console.log(this.state.user)
    })
    .catch(err => console.log(err));
  }

  getBets() {

    API.getUserBets(this.state.user)
      .then(res => this.setState({ bets: res.data }))
      .catch(err => console.log(err));

    API.getUserBetsTwo(this.state.user)
      .then(res => this.setState({ betsTwo: res.data }))
      .catch(err => console.log(err));

    API.getValidatorBets(this.state.user)
      .then(res => this.setState({ betsThree: res.data }))
      .catch(err => console.log(err));
  }

  getFriendsInfo = () => {
    for (let i = 0; i < this.state.friends.length; i++) {
      API.getCurrentUser(this.state.friends[i])
        .then(res =>
          this.setState({ friendsTwo: [...this.state.friendsTwo, res.data[0]] }
          )
        )
        .catch(err => console.log(err))
    }
  }


  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <h1>
              {this.state.user}'s Profile
              </h1>
          </Col>
        </Row>
        <Row>
          <Col size="md-6">
            <h1>Current Bets</h1>
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
          <Col size="md-6">
            <h1>Friends</h1>
            {this.state.friendsTwo.length ? (
              <List>
                {this.state.friendsTwo.map(friend => (
                  <ListItem key={friend._id}>
                    <Link to={"/users/" + friend._id}>
                      <strong>
                        {friend.username}
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
      </Container>
    );
  }
}

export default MyProfile;
