import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";

class Friends extends Component {
  state = {
    friends: {}
  };
  // When this component mounts, grab the book with the _id of this.props.match.params.id
  // e.g. localhost:3000/books/599dcb67f0f16317844583fc


  // componentDidMount() {
  //   API.getFriends(this.props.match.params.id)
  //     .then(res => this.setState({ Friends: res.data }))
  //     .catch(err => console.log(err));
  // }

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>
                Friends List
              </h1>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size="md-10 md-offset-1">
            <article>
              <h1>Friends</h1>
              <p>
                <ul>
                  <li>Friends Generate here</li>
                  <button>Make a Bet</button>
                  <li>Friends Generate here</li>
                  <button>Make a Bet</button>
                  <li>Friends Generate here</li>
                  <button>Make a Bet</button>
                  <li>Friends Generate here</li>

                </ul>
              </p>
            </article>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Friends;
