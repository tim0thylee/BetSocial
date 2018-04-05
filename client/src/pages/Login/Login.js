import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import Auth from '../../utils/Auth';
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { Input, FormBtn } from "../../components/Form";

class Login extends Component {
  state = {
    username: "",
    password: "",
    errorMessage: null,
    user: {}
  };

  componentDidMount() {
  }

  authenticate = () => {
    const userData = {
      username: this.state.username,
      password: this.state.password
    }

    API.authenticateUser(userData)
      .then(res => {
        // clear error message
        this.setState({ errorMessage: null });
        Auth.authenticateUser(res.data.token, res.data.user.username);

        // hard redirect to / to reload all the state and nav
        window.location.href = "/";
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

  handleLogin = event => {
    event.preventDefault();
    if (this.state.username && this.state.password && this.state.password.length >= 6) {
      this.authenticate();
    } else {
      this.setState({ errorMessage: "Please enter valid username and password to sign in." })
    }
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1 className="h4 mb-3 font-weight-normal">Please Login</h1>
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
                type="password"
                placeholder="password (required)"
                className="form-control"
                required=""
                autoFocus={true}
              />
              <div className="checkbox mb-3">
                <label>
                  <input type="checkbox" value="remember-me" /> Remember me
            </label>
              </div>
              <div className="checkbox mb-3 text-danger">
                {this.state.errorMessage}
              </div>
                <FormBtn
                  disabled={!(this.state.username && this.state.password)}
                  onClick={this.handleLogin}
                >
                  Login
              </FormBtn>
                <p className="mt-5 mb-3">
                  Don't have an account?&nbsp;&nbsp;
            <Link to={"/register"}>Sign Up</Link>
                </p>
            </form>
          </Col>
        </Row>
      </Container>
        );
      }
    }
    
    export default Login;
