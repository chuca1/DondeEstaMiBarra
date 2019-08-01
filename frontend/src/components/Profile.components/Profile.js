import React, { useEffect } from "react";
import AuthService from "../../services/auth";
import { Switch, Route, Link } from "react-router-dom";
import { Layout, Menu, Icon } from "antd";
import Todos_E from "./Todos_E";
import Un_Equipo from "./Equipo/Equipo";
import Perfil from "./Perfil/Perfil";
import tuEquipo from "./tuEquipo/tuEquipo";

const { Content, Sider } = Layout;

function Profile(props) {
  const authService = new AuthService();
  useEffect(() => {
    const loggedUser = localStorage.getItem("loggedUser");
    if (!loggedUser) return props.history.push("/login");
  }, [props.history]);
  const handleLogout = () => {
    authService
      .logout()
      .then(() => {
        localStorage.removeItem("loggedUser");
        props.history.push("/login");
      })
      .catch(err => console.log(err));
  };

  return (
    <>
      <Layout
        style={{
          height: "100vh"
        }}
      >
        <Sider
          breakpoint="lg"
          collapsedWidth="0"
          onBreakpoint={broken => {
            console.log(broken);
          }}
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
          }}
        >
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
            <Menu.Item key="1">
              <Link to={`/profile/`}>
                <Icon type="idcard" />
                <span className="nav-text">Perfil</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to={`/profile/equipos`}>
                <Icon type="insurance" />
                <span className="nav-text">Tu equipo</span>
              </Link>
            </Menu.Item>

            <Menu.Item key="5">
              <Link to={`/profile/T_equipos`}>
                <Icon type="insurance" />
                <span className="nave-text">Todos los equipos</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="4" onClick={handleLogout}>
              <Icon type="logout" />
              <span className="nav-text">Logout</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout
          style={{
            backgroundImage:
              "url(https://image.freepik.com/foto-gratis/campo-futbol-fondo-foco-estadio_46250-1363.jpg)",
            backgroundSize: "cover"
          }}
        >
          <Content
            style={{
              margin: "24px 16px 0",
              backgroundImage:
                "url(https://image.freepik.com/foto-gratis/campo-futbol-fondo-foco-estadio_46250-1363.jpg)"
            }}
          >
            <div
              style={{ padding: 24, background: "#F6FAFF", minHeight: "90vh" }}
            >
              <Switch>
                <Route path="/profile/equipos" component={tuEquipo} />
                <Route exact path="/profile/" component={Perfil} />
                <Route exact path="/profile/T_equipos" component={Todos_E} />
                <Route path="/profile/equipo/:id" component={Un_Equipo} />
              </Switch>
            </div>
          </Content>
        </Layout>
      </Layout>
    </>
  );
}
export default Profile;
