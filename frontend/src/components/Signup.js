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
          name="team"
          onChange={handleInput}
          onFocus={onFocus}
          onBlur={onBlur}
          onSearch={onSearch}
          filterOption={(input, option) =>
            option.props.children.toLowerCase().indexOf(input.toLowerCase()) >=
            0
          }
        >
          <Option value="Club Santos Laguna">Club Santos Laguna</Option>
          <Option value="Pumas">Pumas</Option>
          <Option value="Atlas">Atlas</Option>
          <Option value="America">America</Option>
          <Option value="Tijuana">Tijuana</Option>
          <Option value="Leon">Leon</Option>
          <Option value="Queretaro">Queretaro</Option>
          <Option value="Tigres">Tigres</Option>
          <Option value="Guadalajara">Guadalajara</Option>
          <Option value="Atletico San Luis">Atletico San Luis</Option>
          <Option value="Cruz Azul">Cruz Azul</Option>
          <Option value="Veracruz">Veracruz</Option>
          <Option value="Pachuca">Pachuca</Option>
          <Option value="Toluca">Toluca</Option>
          <Option value="Necaxa">Necaxa</Option>
          <Option value="Puebla">Puebla</Option>
          <Option value="Monterrey">Monterrey</Option>
          <Option value="Morelia">Morelia</Option>
          <Option value="Bravos">Bravos</Option>
        </Select>
        <Button type="primary" onClick={handleSignup}>
          Signup
        </Button>
      </div>
    </div>
  );
}
export default Signup;
