import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { Input, TextArea, FormBtn } from "../../components/Form";
import { List, ListItem } from "../../components/List";
// import DeleteBtn from "../../components/DeleteBtn";
import "./Profile.css";
// import API from  "../../utils/newsAPI"
//import LeftNav from "../../components/LeftNav";

const Profile = props => (
    <Container>
    <Row>
        <Col size="md-3 sm-3"></Col>
        <Col size="md-9 sm-9">
            <Col size="md-3 sm-3">
                <p><i class="far fa-user"></i></p>
            </Col>
            <Col size="md-9 sm-9">
                <div className="userInfo">
                    <p><strong>Name:</strong><span> User Test</span> </p>
                    <p><strong>Email:</strong><span> User Email</span> </p>
                </div>
            </Col>
        </Col>
    </Row>
    <Row>
        <Col size="md-3 sm-3"></Col>
        <Col size="md-9 sm-9">
             <form>
                 <h2>Choose News Outlets</h2>
                <Input
                    value={this.state.title}
                    onChange={this.handleInputChange}
                    name="title"
                    placeholder="Title (required)"
                />
                <FormBtn onClick={this.handleFormSubmit}>
                        Submit Outlet
                </FormBtn>
            </form>
            {this.state.newsOutlet.length ? (
          <List>
            {this.state.newsOutlet.map(outlet => (
              <ListItem key={outlet._id}>
                <Link to={"/outlets/" + outlet._id}>
                  <strong>
                    {outlet.title}
                  </strong>
                </Link>
                {/* <DeleteBtn onClick={() => this.deleteBook(book._id)} /> */}
              </ListItem>
            ))}
          </List>
        ) : (
          <h3>No Results to Display</h3>
        )}
        </Col>
    </Row>
</Container>
);

// Profile.propTypes = {
//   secretData: PropTypes.string.isRequired,
// };

export default Profile;
