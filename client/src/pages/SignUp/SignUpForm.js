import React from "react";
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Col, Row, Container } from "../../components/Grid";
import { Input, FormBtn } from "../../components/Form";


const SignUpForm = ({
  onSubmit,
  onChange,
  errors,
  user,
}) => (
  <Container>
    <Row>
      <Col size="md-6">
        <form action="/" onSubmit={onSubmit}>
          <h2 className="card-heading">Sign Up</h2>

            {errors.summary && <p className="error-message">{errors.summary}</p>}
            <div className='field-line'>
              <Input
                value={user.name}
                onChange={onChange}
                name="name"
                placeholder="Name"
              />
            </div>

             <div className='field-line'>
              <Input
                value={user.email}
                onChange={onChange}
                name="email"
                placeholder="Email"
              />
            </div>

            <div className='field-line'>
              <Input
                value={user.password}
                onChange={onChange}
                name="password"
                placeholder="Password"
              />
            </div>

              <FormBtn onClick={onSubmit} type="submit">
                Sign Up
              </FormBtn>

            <div>Already haveasdfasdfount? <Link to={'/login'}>Log in</Link></div>
        </form>
      </Col>
    </Row>
  </Container>
);

SignUpForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired
};

export default SignUpForm;