import React, { Component } from "react";
import { Breadcrumb, Layout } from "antd";
import axios from "axios";
import { Link, Switch, Route } from "react-router-dom";
import Encuentros from "./Encuentros";
import SeePosts from "./SeePosts";
import SeeEvents from "./SeeEvents";
const { Content } = Layout;
class Un_Equipo extends Component {
  state = {
    equipo: []
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
        this.setState({ equipo: data.equipo });
      });
  };
  render() {
    const { equipo } = this.state;
    return (
      <>
        <h3>{equipo.name}</h3>
        <Layout>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Link to={`/profile/equipo/${equipo._id}/posts`}>
              <Breadcrumb.Item>Posts</Breadcrumb.Item>
            </Link>
            <Link to={`/profile/equipo/${equipo._id}/encuentros`}>
              <Breadcrumb.Item>Encuentros</Breadcrumb.Item>
            </Link>
          </Breadcrumb>
        </Layout>

        <Content>
          <div>
            <Switch>
              <Route
                exact
                path="/profile/equipo/:id/posts"
                component={SeePosts}
              />
              <Route
                exact
                path="/profile/equipo/:id/encuentros"
                component={Encuentros}
              />
              <Route
                exact
                path="/profile/equipo/:id/encuentros/:rival"
                component={SeeEvents}
              />
            </Switch>
          </div>
        </Content>
      </>
    );
  }
}

export default Un_Equipo;
