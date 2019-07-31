import React, { useEffect } from "react";
import AuthService from "../../services/auth";
import { Switch, Route, Link } from "react-router-dom";
import { Layout, Menu, Icon } from "antd";
import Todos_E from "./Todos_E";
const { Content, Footer, Sider } = Layout;

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
      <Layout style={{ height: "100vh" }}>
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
              <Icon type="idcard" />
              <span className="nav-text">Perfil</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="insurance" />
              <span className="nav-text">Tus equipo</span>
            </Menu.Item>
            <Menu.Item key="3">
              <Icon type="contacts" />
              <span className="nav-text">Tus Eventos</span>
            </Menu.Item>
            <Menu.Item key="5">
              <Link to={`/profile/equipos`}>
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
        <Layout>
          <Content style={{ margin: "24px 16px 0" }}>
            <div style={{ padding: 24, background: "#fff", minHeight: "90vh" }}>
              <Switch>
                <Route exact path="/profile/equipos" component={Todos_E} />
              </Switch>
            </div>
          </Content>
        </Layout>
      </Layout>
    </>
  );
}
export default Profile;
