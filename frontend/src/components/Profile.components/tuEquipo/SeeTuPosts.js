import React, { Component } from "react";

import axios from "axios";
import { Card } from "antd";
class SeeTuPosts extends Component {
  state = {
    publicacioness: [],
    form: []
  };

  componentDidMount = () => {
    let loggedUser = localStorage.getItem("loggedUser");
    let user = JSON.parse(loggedUser);
    console.log(this.props);
    this.setState({ user });
    axios
      .get(
        `https://polar-savannah-65683.herokuapp.com/liga/LigaMX/${
          user.team
        }/post`
      )
      .then(({ data }) => {
        this.setState({ publicacioness: data.publicacioness });
      });
  };

  render() {
    const { publicacioness } = this.state;

    if (publicacioness.length > 0) {
      publicacioness.sort((a, b) => (a._id > b._id ? -1 : 1));

      return (
        <div style={{ width: "80vw" }}>
          {publicacioness.map((publicaion, i) => {
            return (
              <Card title={`${publicaion.usuario}`} key={i}>
                <p>{publicaion.contenido}</p>
              </Card>
            );
          })}
        </div>
      );
    }
    return (
      <div>
        <Card title={`Perdon pero`}>
          <p>No hay publicaciones aun</p>
        </Card>
      </div>
    );
  }
}

export default SeeTuPosts;
