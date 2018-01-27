import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { Input, TextArea, FormBtn } from "../../components/Form";
import { List, ListItem } from "../../components/List";
import DeleteBtn from "../../components/DeleteBtn";
import "./Profile.css";
import API from  "../../utils/newsAPI"
import Auth from "../../modules/Auth";

class Profile extends Component {
  state = {
    newsOutlet: [],
    title: "",
    user: ""
  };

 componentDidMount() {
    this.loadNewsOutlet();

    const xhr = new XMLHttpRequest();
    xhr.open('get', 'http://localhost:3000/api/dashboard');
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    // set the authorization HTTP header
    xhr.setRequestHeader('Authorization', `Bearer ${Auth.getToken()}`);
    xhr.responseType = 'json';
    xhr.addEventListener('load', () => {
      console.log(xhr.response);
      if (xhr.status === 200) {
        this.setState({
          user: xhr.response.user,
        });
      }
    });
    xhr.send();
 };

 loadNewsOutlet = () => {
    API.news()
      .then(res =>
        this.setState({ newsOutlet: res.data, title: ""})
      )
      .catch(err => console.log(err));
  };

 handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    console.log("this is the state", this.state);
    if (this.state.title) {
      API.saveOutlet({
        name: this.state.title
      }).then((res) => {
          console.log("got this back from the backend", res);
           this.loadNewsOutlet()
        })
        // .catch(err => console.log(err));
    }
  };

render() {
  return (
    <Container>
        <Row>
            <Col size="md-3 sm-3"></Col>
            <Col size="md-9 sm-9">
                <Col size="md-3 sm-3">
                    <p><i class="far fa-user"></i></p>
                </Col>
                <Col size="md-9 sm-9">
                    <div className="userInfo">
                        <p><strong>Name:</strong><span> {this.state.user.name}</span> </p>
                        <p><strong>Email:</strong><span> {this.state.user.email}</span> </p>
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
  }
}

export default Profile;
