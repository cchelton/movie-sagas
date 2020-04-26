import React, { Component } from "react";
import { connect } from "react-redux";
import { Button, TextField } from "@material-ui/core";
import "./EditPage.css";
import Details from "../../components/Details/Details";
import ToListButton from "../../components/ToListButton/ToListButton";
import CancelEditButton from "../../components/CancelEditButton/CancelEditButton";

class EditPage extends Component {
  state = {
    title: "",
    description: "",
  };
  id = this.props.match.params.id;

  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.dispatch({ type: "GET_MOVIE_GENRES", payload: id }); // this renders stuff in case the user didn't come from the details page. The fields are empty, but the title/poster is there.
    // if the user comes from details page, this setState fills out the input fields w/ current data.
    this.setState(
      {
        title: this.props.store.selected_movie_genres.title,
        description: this.props.store.selected_movie_genres.description,
      },
      () => {
        console.log(this.state);
      }
    );
  }

  handleChange = (event, prop) => {
    this.setState({
      ...this.state,
      [prop]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const id = this.props.match.params.id;
    console.log(this.state, id);

    this.props.dispatch({
      type: "EDIT_MOVIE",
      payload: {
        id: id,
        body: this.state,
      },
    });
  };

  render() {
    return (
      <div>
        <Details />
        <div>
          <TextField
            label="title"
            type="text"
            value={this.state.title}
            onChange={(event) => {
              this.handleChange(event, "title");
            }}
          />
        </div>
        <div>
          <TextField
            className="EditPageDescriptionField"
            label="description"
            multiline
            value={this.state.description}
            onChange={(event) => {
              this.handleChange(event, "description");
            }}
          />
        </div>
        <div className="buttonArea">
          <div>
            <Button variant="contained" onClick={this.handleSubmit}>
              submit changes
            </Button>
          </div>
          <div className="middleButton">
            <CancelEditButton className="middleButton" movieID={this.id} />
          </div>
          <div>
            <ToListButton />
          </div>
        </div>
      </div>
    );
  }
}

const putStoreOnProps = (store) => ({
  store,
});

export default connect(putStoreOnProps)(EditPage);
