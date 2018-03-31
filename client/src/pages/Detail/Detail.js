import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";


class Detail extends Component {
  state = {
    bet: {}
  };

  componentDidMount() {
    API.getBet(this.props.match.params.id)
      .then(res => this.setState({ bet: res.data }))
      .catch(err => console.log(err));
  }


  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>
                {this.state.bet.better} bets {this.state.bet.better_two}
              </h1>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size="md-10 md-offset-1">
            <article>
              <h1>Wager</h1>
              <h4>
                {this.state.bet.wager}
              </h4>
            </article>
            <article>
              <h1>Terms</h1>
              <h4>
                {this.state.bet.description}
              </h4>
            </article>
            <article>
              <h1>Validator (if used)</h1>
              <h4>
                {this.state.bet.validator}
              </h4>
            </article>
            <article>
              <h1>Closed?</h1>
              <h4>
                {String(this.state.bet.closed)}
              </h4>
            </article>
          </Col>
        </Row>
        <Row>
          <Col size="md-2">
            <Link to="/">← Back to Bets</Link>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Detail;
