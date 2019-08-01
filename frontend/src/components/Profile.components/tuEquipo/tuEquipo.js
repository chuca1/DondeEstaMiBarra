import React, { Component } from "react";
import axios from "axios";
import { Breadcrumb, Layout } from "antd";
import { Switch, Route, Link } from "react-router-dom";
import SeeTuPosts from "./SeeTuPosts";
import TuEncuentros from "./TuEncuentros";
import SeeTuEvents from "./SeeTuEvents";
const { Content } = Layout;

class tuEquipo extends Component {
  state = {
    equipo: []
  };
  componentDidMount = () => {
    let loggedUser = localStorage.getItem("loggedUser");
    let user = JSON.parse(loggedUser);
    this.setState({ user });
    axios
      .get(
        `https://polar-savannah-65683.herokuapp.com/liga/LigaMX/${user.team}`
      )
      .then(({ data }) => {
        console.log(data);
        this.setState({ equipo: data.equipo });
      });
  };
  render() {
    const { equipo } = this.state;
    console.log(equipo._id);
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Layout style={{ background: "#F6FAFF" }}>
          <img
            src={equipo.logo}
            alt="s"
            style={{ maxHeight: "20vh", maxWidth: "20vwCC©" }}
          />
        </Layout>
        <Layout>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Link to={`/profile/equipos`}>
              <Breadcrumb.Item>Posts</Breadcrumb.Item>
            </Link>
            <Link to={`/profile/equipos/${equipo._id}/encuentros`}>
              <Breadcrumb.Item>Encuentros</Breadcrumb.Item>
            </Link>
          </Breadcrumb>
        </Layout>

        <Content>
          <div>
            <Switch>
              <Route exact path={`/profile/equipos`} component={SeeTuPosts} />
              <Route
                exact
                path={`/profile/equipos/:id/encuentros`}
                component={TuEncuentros}
              />
              <Route
                exact
                path={`/profile/equipos/:id/encuentros/:rival`}
                component={SeeTuEvents}
              />
            </Switch>
          </div>
        </Content>
      </div>
    );
  }
}

export default tuEquipo;
