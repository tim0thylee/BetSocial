import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import registerAPI from "../../utils/registerAPI";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { Input, FormBtn } from "../../components/Form";

class Register extends Component {
  state = {
    username: "",
    password: ""
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  registerUser = (res) => {
    // console.log(res)
    this.setState({username: "", password: ""})  
    // window.location = "/login"
  }

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.username && this.state.password) {
      registerAPI.register({
        username: this.state.username,
        password: this.state.password
      })
        .then(res => console.log(res))
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>Register</h1>
            </Jumbotron>
            <form>
              <Input
                value={this.state.username}
                onChange={this.handleInputChange}
                name="username"
                placeholder="username (required)"
              />
              <Input
                value={this.state.password}
                onChange={this.handleInputChange}
                name="password"
                placeholder="password (required)"
              />
              <FormBtn
                disabled={!(this.state.username && this.state.password)}
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
