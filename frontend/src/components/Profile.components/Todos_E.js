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
      .get("https://polar-savannah-65683.herokuapp.com/liga/LigaMX")
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
        {equipos.map((equipo, i) => {
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
              <Link to={`/profile/equipo/${equipo._id}/posts`}>
                <img
                  style={{ maxWidth: "13vw", height: "13vh" }}
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
