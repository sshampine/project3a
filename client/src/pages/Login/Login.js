import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { Input, TextArea, FormBtn } from "../../components/Form";
import AuthButton from "../../components/AuthButton";
import "./Login.css";

class Login extends Component {
  state = {
  };


 componentDidMount() {

 };

render() {
  return (
    <Container>
        <Row>
          <Col size="md-6">
            <form>
              <Input name="email" placeholder="email"/>
              <Input name="password" placeholder="password"/>
              <AuthButton />
            </form>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Login;
