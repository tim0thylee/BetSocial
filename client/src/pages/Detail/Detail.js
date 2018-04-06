import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
// import Auth from "../../utils/Auth";



class Detail extends Component {
  state = {
    bet: {},
    user: {}
  };

  componentDidMount() {
    API.getBet(this.props.match.params.id)
      .then(res => this.setState({ bet: res.data }))
      .catch(err => console.log(err));

  }

  loadBet = () => {
    API.getBet(this.props.match.params.id)
    .then(res => this.setState({ bet: res.data }))
    .catch(err => console.log(err));
  };

  openBet = id => {
    API.update(id, {
      closed: false
    })
      .then(res => this.loadBet())
      .catch(err => console.log(err));
  };
  

  closeBet = id => {
    API.update(id, {
      closed: true
    })
      .then(res => {
        this.loadBet()
        this.whoWon()
      })          
      .catch(err => console.log(err));
  };

  whoWon = () => {
    console.log(this.state.bet)

    let winner = prompt('Who Won?');

    if(winner !== this.state.bet.better && winner !== this.state.bet.better_two){
      console.log('you fucked up')
      // alert('Enter a valid party!')
    }
    else {
      console.log('The winner is '+ winner)
    }    
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
          <Col size="md-6">
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
          </Col>
          <Col size="md-6">
            <article>
              <h1>Closed?</h1>
              <h4>
                {String(this.state.bet.closed)}
              </h4>
            </article>
            <article>
              <h1>Winner:</h1>
              <h4>
                {this.state.bet.winner}
              </h4>
            </article>
            <article>
              <h1>Loser:</h1>
              <h4>
                {this.state.bet.loser}
              </h4>
            </article>
            <button onClick ={() => this.whoWon()}>Close Bet</button>
            <button onClick ={() => this.openBet(this.state.bet._id)}>Open Bet</button>
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
