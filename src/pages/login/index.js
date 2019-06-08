import React from "react";
import { Form, Icon, Input, Button, Checkbox } from "antd";
import { LoginWrapper, LinksWrapper } from "./styles";

class Login extends React.Component {
  state = {
    email: "",
    senha: ""
  };

  handleSubmit = e => {
    console.log(e);
  };

  render() {
    return (
      <LoginWrapper>
        <h1>Login</h1>
        <Form onSubmit={this.handleSubmit} className="login-form">
          <Form.Item>
            <Input
              prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
              placeholder="Email"
              onChange={() => this.handleChange(this)}
            />
          </Form.Item>
          <Form.Item>
            <Input
              prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
              type="password"
              placeholder="Senha"
              onChange={() => this.handleChange()}
            />
          </Form.Item>
          <Form.Item>
            <LinksWrapper>
              <Checkbox>Lembre-me</Checkbox>
              <a className="login-form-forgot" href="">
                Esqueceu sua senha?
              </a>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
              >
                Entrar
              </Button>
              <a href="">Cadastre-se</a>
            </LinksWrapper>
          </Form.Item>
        </Form>
      </LoginWrapper>
    );
  }
}

export default Form.create()(Login);
