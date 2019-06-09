import React from "react";
import { Form, Icon, Input, Button, Checkbox, Alert } from "antd";
import { LoginWrapper, LinksWrapper } from "./styles";
import api from "../../services/api";
import { login } from "../../services/auth";

class Login extends React.Component {
  state = {
    email: "",
    password: "",
    error: ""
  };

  handleSubmit = async e => {
    e.preventDefault();
    const { email, password } = this.state;
    if (!email || !password) {
      this.setState({ error: "Preencha e-mail e senha para continuar!" });
    } else {
      try {
        const response = await api.post("/login", { email, password });
        login(response.data.token);
        this.props.history.push("/dashboard");
      } catch (err) {
        this.setState({
          error: "Houve um problema com o login, verifique suas credenciais."
        });
      }
    }
  };

  render() {
    return (
      <LoginWrapper>
        <h1>Login</h1>
        {this.state.error && (
          <Alert message={this.state.error} type="error" showIcon />
        )}
        <Form onSubmit={this.handleSubmit} className="login-form">
          <Form.Item>
            <Input
              prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
              placeholder="Email"
              onChange={e => this.setState({ email: e.target.value })}
            />
          </Form.Item>
          <Form.Item>
            <Input
              prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
              type="password"
              placeholder="Senha"
              onChange={e => this.setState({ password: e.target.value })}
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
