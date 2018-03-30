import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";

class Bet extends Component {
  state = {
    username: [],
    wager: "",
    validator: "",
    description: "",
    endDate:""
  };

  componentDidMount() {
    this.loadBet();
  }

  loadBet = () => {
    API.getBet()
      .then(res =>
        this.setState({ bet: res.data, username: "", wager: "", description:""})
      )
      .catch(err => console.log(err));
  };

  deleteBet = id => {
    API.deleteBet(id)
      .then(res => this.loadBet())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.username && this.state.wager) {
      API.saveBet({
        username: this.state.username,
        wager: this.state.wager,
        description: this.state.description
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
              <Input
                value={this.state.username}
                onChange={this.handleInputChange}
                name="username"
                placeholder="UserName (required)"
              />
              <Input
                value={this.state.wager}
                onChange={this.handleInputChange}
                name="wager"
                placeholder="Wager (required)"
              />
              <TextArea
                value={this.state.description}
                onChange={this.handleInputChange}
                name="description"
                placeholder="Description (Optional)"
              />
              <FormBtn
                disabled={!(this.state.username && this.state.wager)}
                onClick={this.handleFormSubmit}
              >
                Submit Bet
              </FormBtn>
            </form>
          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>Bet On My List</h1>
            </Jumbotron>
            {this.statefriendslength ? (
              <List>
                {this.statefriendsmap(friends => (
                  <ListItem key={friends._id}>
                    <Link to={"/friends/" + friends._id}>
                      <strong>
                        {friends.title} by {friends.author}
                      </strong>
                    </Link>
                    <DeleteBtn onClick={() => this.deleteBook(friends._id)} />
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

export default Bet;
