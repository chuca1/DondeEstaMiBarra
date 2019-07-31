import React, { Component } from "react";
import { Breadcrumb, Layout, Card } from "antd";
import axios from "axios";
import { Link, Switch, Route } from "react-router-dom";

class Encuentros extends Component {
  state = {
    equipo: [],
    juegos: [],
    equipos: []
  };
  componentDidMount = () => {
    const {
      match: { params }
    } = this.props;
    axios
      .get(`http://localhost:3000/liga/LigaMX/${params.id}`)
      .then(({ data }) => {
        this.setState({ juegos: data.equipo.juegos });
        axios
          .get(`http://localhost:3000/liga/LigaMX`)
          .then(({ data }) => {
            this.setState({ equipos: data.equipos });
          })
          .catch(err => console.log("err"));
      });
  };
  render() {
    const { juegos, equipos } = this.state;
    return (
      <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        {juegos.map(equipo => {
          return (
            <Card
              key={equipo.id}
              title={equipo.name}
              style={{
                width: "33%",
                maxheight: "15%",
                display: "flex",
                flexDirection: "column",
                aligncontent: "center"
              }}
            >
              {equipos.map(equipoE => {
                if (equipoE.name === equipo) {
                  return (
                    <Link to={`/profile/equipo/${equipoE._id}/posts`}>
                      <img
                        src={equipoE.logo}
                        alt="puto"
                        style={{ maxWidth: "100%", maxHeight: "100%" }}
                      />
                    </Link>
                  );
                }
              })}
            </Card>
          );
        })}
      </div>
    );
  }
}

export default Encuentros;
