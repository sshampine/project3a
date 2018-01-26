import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Col, Row, Container } from "../../components/Grid";
import { Input, FormBtn } from "../../components/Form";

const LoginForm = ({
  onSubmit,
  onChange,
  errors,
  successMessage,
  user,
  toggleAuthenticateStatus
}) => (

  <Container>
    <Row>
      <Col size="md-6">
        <form action="/" onSubmit={onSubmit}>
          <h2 className="card-heading">Login</h2>

          {successMessage && <p className="success-message">{successMessage}</p>}
          {errors.summary && <p className="error-message">{errors.summary}</p>}
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
                type="password"
                placeholder="Password"
              />
            </div>

              <FormBtn onClick={onSubmit} type="submit">
                Log In
              </FormBtn>

            <div>Don't have an account? <Link to={'/signup'}>Create One</Link></div>
        </form>
      </Col>
    </Row>
  </Container>
);

LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  successMessage: PropTypes.string.isRequired,
  user: PropTypes.object.isRequired
};

export default LoginForm;
