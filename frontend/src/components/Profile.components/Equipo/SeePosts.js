import React, { Component } from "react";
import PostCreate from "../../PostCreate";
import axios from "axios";

class SeePosts extends Component {
  state = {
    publicacioness: [],
    form: []
  };

  componentDidMount = () => {
    const {
      match: { params }
    } = this.props;
    axios
      .get(
        `https://polar-savannah-65683.herokuapp.com/liga/LigaMX/${
          params.id
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
        <div>
          <PostCreate propps={this.props} />
          {publicacioness.map((publicaion, i) => {
            return (
              <div key={i}>
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
        <PostCreate propps={this.props} />
        <h1>No hay publicaciones aun</h1>
      </div>
    );
  }
}

export default SeePosts;
