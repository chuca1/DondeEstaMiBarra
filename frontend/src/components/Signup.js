import React from "react";
import AuthService from "../services/auth";
import useForm from "../Hooks/useForm";
import { Input, Icon, Button } from "antd";

function Signup(props) {
  const [form, handleInput] = useForm();
  const authService = new AuthService();
  const handleSignup = () => {
    authService
      .signup(form)
      .then(response => {
        console.log(response);
        props.history.push("/login");
      })
      .catch(err => {
        alert(err.response.data.msg || err.response.data.err.message);
      });
  };
  return (
    <div className="signup">
      <div className="fondo">
        <Input
          prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
          placeholder="Username"
          name="name"
          id="name"
          onChange={handleInput}
        />
        <Input
          prefix={<Icon type="mail" style={{ color: "rgba(0,0,0,.25)" }} />}
          placeholder="email"
          name="email"
          id="email"
          onChange={handleInput}
        />
        <Input
          prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
          placeholder="Password"
          name="password"
          id="password"
          type="password"
          onChange={handleInput}
        />
        <Button type="primary" onClick={handleSignup}>
          Signup
        </Button>
      </div>
    </div>
  );
}
export default Signup;
