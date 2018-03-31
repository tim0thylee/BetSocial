import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import Auth from '../../utils/Auth';
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { Input, FormBtn } from "../../components/Form";

class Register extends Component {
  state = {
    username: "",
    password: "",
    errorMessage: null
  };

  componentDidMount() {
  };

  authenticate = () => {
    const userData = {
      username: this.state.username,
      password: this.state.password
    };

    API.authenticateUser(userData)
      .then(res => {
        // clear error message
        this.setState({ errorMessage: null });
        Auth.authenticateUser(res.data.token);

        // hard redirect to / to reload all the state and nav
        window.location.href = "/";
      })
      .catch(err => this.setState({ errorMessage: err.response.data.message }));
  };

  signUp = () => {
    const userData = {
      username: this.state.username,
      password: this.state.password
    };

    API.signUp(userData)
      .then(res => {
        // clear error message
        this.setState({ errorMessage: null });

        // authenticate the user after successful sign up
        this.authenticate();
      })
      .catch(err => this.setState({ errorMessage: err.response.data.message }));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFocus = event => {
    event.target.select();
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.username&& this.state.password && this.state.password.length >= 8) {
      this.signUp();
    } else {
      this.setState({ errorMessage: "Please enter all required fields to sign up." })
    }
  };



  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1 className="h4 mb-3 font-weight-normal">Welcome to Bet Social! Please Register to Join Our Community</h1>
            </Jumbotron>
            <form>
              <Input
                value={this.state.username}
                onChange={this.handleInputChange}
                name="username"
                placeholder="username (required)"
                className="form-control"
                required=""
                autoFocus={true}
              />
              <Input
                value={this.state.password}
                onChange={this.handleInputChange}
                name="password"
                placeholder="password (required)"
                className="form-control"
                required=""
              />
              <div className="checkbox mb-3 text-danger">
                  {this.state.errorMessage}
              </div>
              <FormBtn
                disabled={!(this.state.username && this.state.password && this.state.password.length >= 6)}
                onClick={this.handleFormSubmit}
              >
                Register
              </FormBtn>
            </form>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Register;
