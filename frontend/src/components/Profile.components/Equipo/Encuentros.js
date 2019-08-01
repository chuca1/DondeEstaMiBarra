import React, { Component } from "react";
import { Breadcrumb, Layout, Card } from "antd";
import axios from "axios";
import { Link, Switch, Route } from "react-router-dom";

class Encuentros extends Component {
  state = {
    equipoT: [],
    juegos: [],
    equipos: []
  };
  componentDidMount = () => {
    const {
      match: { params }
    } = this.props;
    axios
      .get(
        `https://polar-savannah-65683.herokuapp.com/liga/LigaMX/${params.id}`
      )
      .then(({ data }) => {
        this.setState({ juegos: data.equipo.juegos });
        this.setState({ equipoT: data.equipo });
        axios
          .get(`https://polar-savannah-65683.herokuapp.com/liga/LigaMX`)
          .then(({ data }) => {
            this.setState({ equipos: data.equipos });
          })
          .catch(err => console.log("err"));
      });
  };
  render() {
    const { juegos, equipos, equipoT } = this.state;

    return (
      <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        {juegos.map((equipo, i) => {
          return (
            <Card
              key={i}
              title={equipo.name}
              style={{
                width: "33%",
                maxheight: "15%",
                display: "flex",
                flexDirection: "column",
                aligncontent: "center"
              }}
            >
              {equipos.map((equipoE, i) => {
                if (equipoE.name === equipo) {
                  return (
                    <div key={i}>
                      <Link
                        to={`/profile/equipo/${equipoT._id}/encuentros/${
                          equipoE._id
                        }`}
                      >
                        <img
                          src={equipoE.logo}
                          alt="puto"
                          style={{ maxWidth: "100%", maxHeight: "100%" }}
                        />
                      </Link>
                    </div>
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
