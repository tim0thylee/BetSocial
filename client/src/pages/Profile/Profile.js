import React, { Component } from "react";
import { Link } from "react-router-dom";
import { List, ListItem } from "../../components/List";
import { Col, Row, Container } from "../../components/Grid";
import API from "../../utils/API";

class Profile extends Component {
  state = {
    users: {}
  };

  componentDidMount() {
    API.getUsers()
      .then(res => this.setState({ users: res.data }))
      .catch(err => console.log(err));
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

export default Profile;
