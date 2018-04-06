import React, { Component } from "react";
import API from "../../utils/API";
import Auth from "../../utils/Auth";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, FormBtn } from "../../components/Form";
import SearchForm from "../../components/SearchForm";


class Bets extends Component {
  state = {
    users: [],
    bets: [],
    better: "",
    wager: "",
    better_two: "",
    description: "",
    validator: "",
    closed: false,
    winner: '',
    loser: '',
    current: "",
    friends: []
  };

  componentDidMount() {
    this.loadBet();
  }

  loadBet = () => {
    API.getBets()
      .then(res =>{
        this.setState({ bets: res.data })
        this.loadUsers()
        this.loadCurrent()
      }
      )
      .catch(err => console.log(err));
  };


  loadUsers = () => {
    API.getUsers()
      .then(res =>
        this.setState({ users: res.data })
      )
      .catch(err => console.log(err));
  };

  loadCurrent = () => {

    let user = Auth.getUser();

    API.getCurrentUser(user)
    .then( res => {
      this.setState({ current: res.data[0].username, friends: res.data[0].friends })
      this.cleanUsers()
    })
    .catch(err => console.log(err));
  }

  cleanUsers = () => {
    for (let i = 0; i < this.state.users.length; i++){
      if (this.state.users[i].username === this.state.current ){
        this.state.users.splice(i, 1)
      }
    }
    this.setState({ users: this.state.users})
    console.log(this.state.users)
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
      better: this.state.current
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.better && this.state.wager && this.state.better_two && this.state.description) {
      API.saveBets({
        better: this.state.better,
        wager: this.state.wager,
        better_two: this.state.better_two,
        description: this.state.description,
        validator: this.state.validator,
        closed: false,
        winner: this.state.winner,
        loser: this.state.loser
      })
        .then(res => this.loadBet())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
              <h1>Make a bet?</h1>
            <form>
              <label htmlFor="Better">Better:</label>
              <Input
                value={this.state.current}
                name="better"
                users={this.state.current}
                placeholder={this.state.current}
              />
              <label htmlFor="Better">Better 2:</label>
              <SearchForm
                value={this.state.better_two}
                onChange={this.handleInputChange}
                name="better_two"
                users={this.state.users}
                placeholder="Type a second better (required)"
                list="users"
              />
              <label htmlFor="Wager">Wager</label>
              <Input
                value={this.state.wager}
                onChange={this.handleInputChange}
                name="wager"
                placeholder="Wager (required)"
              />
              <label htmlFor="Description">Description</label>
              <Input
                value={this.state.description}
                onChange={this.handleInputChange}
                name="description"
                placeholder="Description (required)"
              />
              <label htmlFor="validator">Validator</label>
              <SearchForm
                value={this.state.validator}
                onChange={this.handleInputChange}
                name="validator"
                users={this.state.users}
                placeholder="Type a validator (optional)"
                list="users"
              />
              <FormBtn
                disabled={!(this.state.better && this.state.better_two && this.state.wager && this.state.description)}
                onClick={this.handleFormSubmit}
              >
                Submit Bet
              </FormBtn>
            </form>
          </Col>
          <Col size="md-6 sm-12">
              <h1>Open Bets</h1>
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
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Bets;
