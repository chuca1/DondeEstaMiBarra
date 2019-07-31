import React, { Component } from "react";
import PostCreate from "../../PostCreate";
import axios from "axios";

class SeePosts extends Component {
  state = {
    publicacioness: []
  };
  componentDidMount = () => {
    const {
      match: { params }
    } = this.props;
    axios
      .get(`http://localhost:3000/liga/LigaMX/${params.id}/post`)
      .then(({ data }) => {
        console.log(data);
        this.setState({ publicacioness: data.publicacioness });
      });
  };
  render() {
    const { publicacioness } = this.state;
    console.log(publicacioness);
    if (publicacioness.length > 0) {
      return (
        <div>
          {publicacioness.map(publicaion => {
            console.log(publicaion);
            return (
              <div>
                <h3>{publicaion.usuario}</h3>
                <p>{publicaion.contenido}</p>
              </div>
            );
          })}
        </div>
      );
    }
    return (
      <div>
        <h1>No hay publicaciones aun</h1>
      </div>
    );
  }
}

export default SeePosts;
