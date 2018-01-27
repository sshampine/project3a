import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { Input, TextArea, FormBtn } from "../../components/Form";
import { List, ListItem } from "../../components/List";
import DeleteBtn from "../../components/DeleteBtn";
import "./Profile.css";
import API from  "../../utils/newsAPI"

class Profile extends Component {
  state = {
    newsOutlet: [],
    title: "",
  };


 componentDidMount() {
    this.loadNewsOutlet();
 };

 loadNewsOutlet = () => {
    API.getNewsOutlet()
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
  }
}

export default Profile;
