import React, { useEffect } from "react";
import AuthService from "../services/auth";
import useForm from "../Hooks/useForm";
import { Input, Icon, Button } from "antd";
function Login(props) {
  const [form, handleInput] = useForm();
  const authService = new AuthService();
  useEffect(() => {
    const loggedUser = localStorage.getItem("loggedUser");
    console.log(JSON.parse(loggedUser));
    if (loggedUser) return props.history.push("/profile");
  }, [props.history]);

  const handleLogin = () => {
    authService
      .login(form)
      .then(response => {
        localStorage.setItem("loggedUser", JSON.stringify(response.data.user));
        props.history.push("/profile");
      })
      .catch(err => {
        console.log(err);
      });
  };
  return (
    <div className="signup">
      <div className="fondo">
        <label htmlFor="email">Email</label>
        <Input
          prefix={<Icon type="mail" style={{ color: "rgba(0,0,0,.25)" }} />}
          type="email"
          name="email"
          id="email"
          onChange={handleInput}
          placeholder="email"
        />

        <Input
          prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
          type="password"
          name="password"
          id="password"
          onChange={handleInput}
          placeholder="password"
        />
        <Button type="primary" onClick={handleLogin}>
          Login
        </Button>
      </div>
    </div>
  );
}
export default Login;
