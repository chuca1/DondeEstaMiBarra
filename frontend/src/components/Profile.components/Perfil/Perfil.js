import React, { Component } from "react";
import axios from "axios";
import { Map, TileLayer, Marker } from "react-leaflet";
import { Card } from "antd";

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
    console.log(user);
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
      // eslint-disable-next-line
      user.publicaciones.map(post => {
        axios
          .get(`https://polar-savannah-65683.herokuapp.com/liga/post/${post}`)
          .then(({ data }) => {
            posts.push(data);
            this.setState({ posts });
          });
      });
    }
    if (user.eventos.length > 0) {
      // eslint-disable-next-line
      user.eventos.map(evento => {
        axios
          .get(
            `https://polar-savannah-65683.herokuapp.com/liga/LigaMX/${evento}/evento`
          )
          .then(({ data }) => {
            eventos.push(data);
            this.setState({ eventos });
          });
      });
    }
  };

  render() {
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
          style={{ maxHeight: "20vh", maxWidth: "20vwCC©" }}
        />
        <h5 style={{ textAlign: "center" }}>
          Hola {user.name} este es tu historial de publicaciones y eventos{" "}
        </h5>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            margin: "3vh",
            width: "80vw"
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "50%"
            }}
          >
            {posts.length > 0 ? (
              <div>
                {posts.map((e, i) => {
                  return (
                    <Card title={`${e.post.equipo}`} key={i}>
                      {e.post.contenido}
                    </Card>
                  );
                })}
              </div>
            ) : (
              <Card title={`Perdon pero`}>
                <p>No hay publicaciones aun</p>
              </Card>
            )}
          </div>
          <div
            style={{ display: "flex", flexDirection: "column", width: "50%" }}
          >
            {eventos.length > 0 ? (
              eventos.map((event, i) => {
                console.log(event.evento.lat);
                return (
                  <Card
                    title={`${event.evento.equipo} Vs ${event.evento.rival}`}
                    key={i}
                  >
                    <h5>{event.evento.fecha}</h5>
                    <h5>{event.evento.lugar}</h5>
                    {event.evento.lng !== 0 && event.evento.lat !== 0 ? (
                      <div>
                        <Map
                          style={{ height: "20vh", width: "20vw" }}
                          center={[event.evento.lat, event.evento.lng]}
                          zoom={16}
                          id="mapid"
                          ref={e => {
                            this.mapInstance = e;
                          }}
                        >
                          <TileLayer
                            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                          />
                          <Marker
                            position={[event.evento.lat, event.evento.lng]}
                          />
                        </Map>
                      </div>
                    ) : (
                      <></>
                    )}
                    <br />
                  </Card>
                );
              })
            ) : (
              <Card title={`Perdon pero`}>
                <p>No hay eventos aun</p>
              </Card>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Perfil;
