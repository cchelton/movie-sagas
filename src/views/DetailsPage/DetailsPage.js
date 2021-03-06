import React, { Component } from "react";
import { connect } from "react-redux";
import "./DetailsPage.css";
import Details from "../../components/Details/Details";
import ToListButton from "../../components/ToListButton/ToListButton";
import EditButton from "../../components/EditButton/EditButton";

class DetailsPage extends Component {
  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.dispatch({
      type: "GET_MOVIE_GENRES",
      payload: id,
    });
  }

  render() {
    const movieID = this.props.match.params.id;
    return (
      <div>
        <Details />
        <div className="buttonArea">
          <div className="leftButton">
            <EditButton movieID={movieID} />
          </div>
          <ToListButton />
        </div>
      </div>
    );
  }
}

const putStoreOnProps = (store) => ({
  store,
});

export default connect(putStoreOnProps)(DetailsPage);
