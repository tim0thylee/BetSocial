import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import Auth from '../../utils/Auth';
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { Input, FormBtn } from "../../components/Form";

class ForgotPassword extends Component {
  state = {
    username: "",
    password: "",
    errorMessage: null,
    id: ""
  };

  componentDidMount() {
    this.getUserId()
  }


  updateUser() {
    API.updateUser(this.state.id, {
      password: this.state.password})
      .then(res => {
        // console.log(res.data)
        alert('remember your password mother father')

        // hard redirect to / to reload all the state and nav
        window.location.href = "/login";
      })
      .catch(err => console.log(err))
  }

  getUserId() {
    let user = Auth.getUser()

    API.getCurrentUser(user)
    .then( res => {
      console.log('res.data: ' + res.data[0]._id)
      this.setState({ id: res.data[0]._id })
    })
    .catch(err => console.log(err));
  }
  

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFocus = event => {
    event.target.select();
  };

  handleReset = event => {
    event.preventDefault();
    if (this.state.username && this.state.password && this.state.password.length >= 6) {
      this.updateUser()
    }
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1 className="h4 mb-3 font-weight-normal">Password Reset. Please Remember to Write Down Your Password!</h1>
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
                autoFocus={true}
              />
              <div className="checkbox mb-3 text-danger">
                {this.state.errorMessage}
              </div>
              <FormBtn
                disabled={!(this.state.username && this.state.password)}
                onClick={this.handleReset}
              >
                Rest Password
              </FormBtn>
            </form>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default ForgotPassword;
