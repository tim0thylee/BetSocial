import React, { Component } from "react";
import { Link } from "react-router-dom";
import { List, ListItem } from "../../components/List";
import { Col, Row, Container } from "../../components/Grid";
import API from "../../utils/API";
import Auth from "../../utils/Auth";
// import AddButton from "../../components/AddButton"
// import {FormBtn} from "../../components/Form";

class Users extends Component {
  state = {
    users: {},
    current: "",
    currentId: "",
    friends: []
  };

  componentDidMount() {
    API.getUsers()
      .then(res => this.setState({ users: res.data }))
      .catch(err => console.log(err));
    this.loadCurrent();

  }

  loadCurrent = () => {
    let user = Auth.getUser();
    API.getCurrentUser(user)
      .then(res =>
        // console.log('username: ' + res.data[0].username + ", Friends: " + res.data[0].friends),
        this.setState({ current: res.data[0].username, currentId: res.data[0]._id, friends: res.data[0].friends })
      )
      .catch(err => console.log(err));
  }

  addFriend = event => {
    event.preventDefault();
    let id = this.state.currentId;
    let otherUser = event.target.value;

    if (otherUser === this.state.current) {
      alert('You Cannot Add Yourself');
    }
    else {
      for (let i = 0; i < this.state.friends.length; i++){
        if (this.state.friends[i] === otherUser){
          alert('User Already Added!')
          return;
        }
      }
      API.updateUser(id, {
        friends: [...this.state.friends, otherUser]
      })
        .then(res => this.loadCurrent())
        .catch(err => console.log(err))
      alert(`Congratulations. You have added ${otherUser} as a Friend!`)
    }
  }

checkState = event => {
  event.preventDefault();
  console.log(this.state.friends)
}

render() {
  return (
    <Container fluid>
      <Row>
        <Col size="md-12">
          <h1>User List</h1>
          {this.state.users.length ? (
            <List>
              {this.state.users.map(user => (
                <ListItem key={user._id}>
                  <Link to={"/users/" + user._id}>
                    <strong>
                      {user.username}
                    </strong>
                  </Link>
                  <button
                    value={user.username}
                    onClick={this.addFriend}
                  >
                    Add Friend
                    </button>
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

export default Users;
