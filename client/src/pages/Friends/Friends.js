import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, FormBtn } from "../../components/Form";

class Friends extends Component {
  state = {
    users: [],
    friends: ''
  };

  componentDidMount() {
    this.loadUsers();
  }

  loadUsers = () => {
    API.getUsers()
      .then(res => 
        this.setState({ users: res.data, friends: '' })
      )
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    })
  };

  handleFormSubmit = event => {
    event.preventDefault();
    console.log(this.state.users)
    if (this.state.friends) {
      API.saveUser({
        friends: this.state.friends
      })
        .then(res => this.loadUsers())
        .catch(err => console.log(err));
    };
  }

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>Add Some Friends You Loser!</h1>
            </Jumbotron>
            <form>
              <Input
                value={this.state.friends}
                onChange={this.handleInputChange}
                name="friends"
                placeholder="Add some friends!"
              />
               <FormBtn
                disabled={!(this.state.friends)}
                onClick={this.handleFormSubmit}
              >
                Add A Friend!
              </FormBtn>
            </form>
          </Col>
          <Col size="md-6 sm-12">
            {this.state.users.length ? (
              <List>
                {this.state.users.map(user => (
                  <ListItem key={user._id}>
                      <strong>
                       {user.name}
                      </strong>
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
export default Friends;