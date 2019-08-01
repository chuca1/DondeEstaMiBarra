import React, { Component } from "react";
import PostCreate from "../../PostCreate";
import axios from "axios";

class SeeEvents extends Component {
  state = {
    evnetss: []
  };
  componentDidMount = () => {
    const {
      match: { params }
    } = this.props;
    axios
      .get(
        `https://polar-savannah-65683.herokuapp.com/liga/LigaMX/${
          params.id
        }/evento/${params.rival}`
      )
      .then(({ data }) => {
        console.log(data);
        this.setState({ evnetss: data.evnetss });
      })
      .catch(({ err }) => console.log(err));
  };
  render() {
    const { evnetss } = this.state;
    console.log("fd");
    if (evnetss.length > 0) {
      return (
        <div>
          {evnetss.map(event => {
            console.log(event);
            return (
              <div>
                <h3>{event.usuario}</h3>
                <p>{event.contenido}</p>
              </div>
            );
          })}
        </div>
      );
    }
    return (
      <div>
        <h1>No hay eventos aun</h1>
      </div>
    );
  }
}

export default SeeEvents;
