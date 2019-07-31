import React from "react";
import AuthService from "../services/auth";
import useForm from "../Hooks/useForm";

import { Input, Icon, Button, Select } from "antd";
const { Option } = Select;

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

  function onBlur() {
    console.log("blur");
  }

  function onFocus() {
    console.log("focus");
  }
  function onSearch(val) {
    console.log("search:", val);
  }
  function onChange(value) {
    form.team = value;
    console.log(`selected ${value}`);
  }
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

        <Select
          showSearch
          style={{ width: 200 }}
          placeholder="Select a person"
          optionFilterProp="children"
          onFocus={onFocus}
          onBlur={onBlur}
          onChange={onChange}
          onSearch={onSearch}
          filterOption={(input, option) =>
            option.props.children.toLowerCase().indexOf(input.toLowerCase()) >=
            0
          }
        >
          <Option value="5d40a5883ebb1e14fd71bfbc">Club Santos Laguna</Option>
          <Option value="5d40a5883ebb1e14fd71bfc7">Pumas</Option>
          <Option value="5d40a5883ebb1e14fd71bfbf">Atlas</Option>
          <Option value="5d40a5883ebb1e14fd71bfcc">America</Option>
          <Option value="5d40a5883ebb1e14fd71bfc9">Tijuana</Option>
          <Option value="5d40a5883ebb1e14fd71bfc3">Leon</Option>
          <Option value="5d40a5883ebb1e14fd71bfcb">Queretaro</Option>
          <Option value="5d40a5883ebb1e14fd71bfc8">Tigres</Option>
          <Option value="5d40a5883ebb1e14fd71bfbd">Chivas</Option>
          <Option value="5d40a5883ebb1e14fd71bfc5">Atletico San Luis</Option>
          <Option value="5d40a5883ebb1e14fd71bfcd">Cruz Azul</Option>
          <Option value="5d40a5883ebb1e14fd71bfc6">Veracruz</Option>
          <Option value="5d40a5883ebb1e14fd71bfc4">Pachuca</Option>
          <Option value="5d40a5883ebb1e14fd71bfce">Toluca</Option>
          <Option value="5d40a5883ebb1e14fd71bfc1">Necaxa</Option>
          <Option value="5d40a5883ebb1e14fd71bfc0">Puebla</Option>
          <Option value="5d40a5883ebb1e14fd71bfc2">Monterrey</Option>
          <Option value="5d40a5883ebb1e14fd71bfca">Monarcas</Option>
          <Option value="5d40a5883ebb1e14fd71bfbe">Bravos</Option>
        </Select>
        <Button type="primary" onClick={handleSignup}>
          Signup
        </Button>
      </div>
    </div>
  );
}
export default Signup;
