import React, { Component } from "react";
import axios from "axios";

class Perfil extends Component {
  state = {
    user: [],
    posts: [],
    eventos: [],
    equipo: []
  };
  componentDidMount = () => {
    let loggedUser = localStorage.getItem("loggedUser");
    let user = JSON.parse(loggedUser);
    let posts = [];
    let eventos = [];
    this.setState({ user });
    axios
      .get(
        `https://polar-savannah-65683.herokuapp.com/liga/LigaMX/${user.team}`
      )
      .then(({ data }) => {
        this.setState({ equipo: data.equipo });
      });
    if (user.publicaciones.length > 0) {
      user.publicaciones.map(post => {
        axios.get(`/liga/post/${post}`).then(({ data }) => {
          posts.push(data);
        });
      });
      this.setState({ posts });
    }
  };

  render() {
    console.log(this.state);
    const { equipo, posts, eventos, user } = this.state;
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <img
          src={equipo.logo}
          alt="s"
          style={{ maxHeight: "30%", maxWidth: "30%" }}
        />
        <h5 style={{ textAlign: "center" }}>
          Hola {user.name} este es tu historial de publicaciones y eventos{" "}
        </h5>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div
            style={{ display: "flex", flexDirection: "column", width: "50%" }}
          >
            {posts.length > 0 ? (
              <h1>Si hay posts</h1>
            ) : (
              <h2>No haz hecho posts</h2>
            )}
          </div>
          <div
            style={{ display: "flex", flexDirection: "column", width: "50%" }}
          >
            {eventos.length > 0 ? (
              <h1>Si hay posts</h1>
            ) : (
              <h2>No tienes eventos</h2>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Perfil;
