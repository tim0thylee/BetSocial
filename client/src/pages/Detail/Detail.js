import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
// import Auth from "../../utils/Auth";
import SimpleModalWrapped from "../../components/Modal";
import Dialog from 'material-ui/Dialog';
import Button from 'material-ui/Button';



class Detail extends Component {
  state = {
    bet: {},
    user: {},
    winner: "",
    loser: "",
    open: false
  };

  componentDidMount() {
    this.loadBet()

  }

  loadBet = () => {
    API.getBet(this.props.match.params.id)
      .then(res => this.setState({ bet: res.data }))
      .catch(err => console.log(err));
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  updateWinners = () => {
    if (this.state.winner && this.state.loser) {
      API.update(this.props.match.params.id, {
        closed: true,
        winner: this.state.winner,
        loser: this.state.loser
      })
        .then(res => {
          console.log('success!')
          this.loadBet()
        })
        .catch(err => console.log(err))
    } else {
      console.log('updateWinners else')
    }
  }

  whoWon = event => {
    console.log("clicked: " + event.target.value)

    if (!this.state.bet.closed) {
      
      if (event.target.value === this.state.bet.better) {
        this.setState({ winner: event.target.value, loser: this.state.bet.better_two },
          this.updateWinners
        )
      }
      else if (event.target.value === this.state.bet.better_two) {
        this.setState({ winner: event.target.value, loser: this.state.bet.better },
          this.updateWinners
        )
      }

    }
    else {
      alert("Bet is closed!")
    }
  }

  openBet = event => {
    this.setState({ closed: false })

    API.update(this.props.match.params.id, {
      closed: false
    })
    .then(res => {
      this.loadBet()
    })
    .catch(err => console.log(err))
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
            <SimpleModalWrapped
              closed={this.state.closed}
              better={this.state.bet.better}
              better_two={this.state.bet.better_two}
              onClick={this.whoWon}
            />
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
