import React, { Component } from "react";
import axios from "axios";
import { Card } from "antd";
import { Link } from "react-router-dom";

class Todos_E extends Component {
  state = {
    equipos: [],
    equipo: []
  };

  componentDidMount = () => {
    axios
      .get("http://localhost:3000/liga/LigaMX")
      .then(({ data }) => {
        this.setState({ equipos: data.equipos });
      })
      .catch(err => console.log("err"));
  };
  render() {
    const { equipos } = this.state;
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap"
        }}
      >
        {equipos.map(equipo => {
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
              <Link to={`/profile/equipo/${equipo._id}`}>
                <img
                  width="100%"
                  maxheight="75%"
                  src={equipo.logo}
                  alt="puto"
                />
              </Link>
            </Card>
          );
        })}
      </div>
    );
  }
}
export default Todos_E;
