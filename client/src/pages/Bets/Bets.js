import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, FormBtn } from "../../components/Form";
import SearchForm from "../../components/SearchForm";
import SearchFormTwo from "../../components/SearchFormTwo";
import SearchFormThree from "../../components/SearchFormThree";




class Bets extends Component {
  state = {
    users: [],
    bets: [],
    better: "",
    wager: "",
    better_two: "",
    description: "",
    validator: "",
    closed: false
  };

  componentDidMount() {
    this.loadBet();
    this.loadUsers();
  }

  loadBet = () => {
    API.getBets()
      .then(res =>
        this.setState({ bets: res.data, better: "", wager: "", better_two: "", description: "", validator: "", closed: false })
      )
      .catch(err => console.log(err));
  };


  loadUsers = () => {
    API.getUsers()
      .then(res => 
        this.setState({ users: res.data, better: "", wager: "", better_two: "", description: "", validator: "", closed: false })
      )
      .catch(err => console.log(err));
  };

  closeBet = id => {
    API.update(id, {
      closed: true
    })
      .then(res => this.loadBet())
      .catch(err => console.log(err));

    console.log('test')
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
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
        closed: false
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
            <Jumbotron>
              <h1>Make a bet?</h1>
            </Jumbotron>
            <form>
            <label htmlFor="Better">Better:</label>
              <SearchForm
                value={this.state.better}
                onChange={this.handleInputChange}
                name="better"
                users={this.state.users}
              />
            <label htmlFor="Better">Better 2:</label>
              <SearchForm
                value={this.state.better_two}
                onChange={this.handleInputChange}
                name="better_two"
                users={this.state.users}
              />
              <Input
                value={this.state.wager}
                onChange={this.handleInputChange}
                name="wager"
                placeholder="Wager (required)"
              />
              <Input
                value={this.state.description}
                onChange={this.handleInputChange}
                name="description"
                placeholder="Description (required)"
              />
              <SearchForm
                value={this.state.validator}
                onChange={this.handleInputChange}
                name="validator"
                users={this.state.users}
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
            <Jumbotron>
              <h1>Open Bets</h1>
            </Jumbotron>
            {this.state.bets.length ? (
              <List>
                {this.state.bets.map(bet => (
                  <ListItem key={bet._id}>
                    <Link to={"/bets/" + bet._id}>
                      <strong>
                        {bet.better} bets {bet.better_two} {bet.wager} that {bet.description}, closed: {String(bet.closed)}
                      </strong>
                      <DeleteBtn />
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
