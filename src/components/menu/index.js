import React from "react";
import { Menu, Icon, Dropdown, Avatar, message } from "antd";
import { BrowserRouter as Link } from "react-router-dom";

const { SubMenu } = Menu;

function handleButtonClick(e) {
  message.info("Click on left button.");
  console.log("click left button", e);
}

function handleMenuClick(e) {
  message.info("Click on menu item.");
  console.log("click", e);
}

const menu = (
  <Menu onClick={handleMenuClick}>
    <Menu.Item key="1">
      <Icon type="user" />
      Perfil
    </Menu.Item>
    <Menu.Item key="2">
      <Icon type="setting" />
      Configuração
    </Menu.Item>
    <Menu.Item key="3">
      <Icon type="logout" />
      Sair
    </Menu.Item>
  </Menu>
);

class Nav extends React.Component {
  state = {
    collapsed: false
  };

  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };

  render() {
    return (
      <Menu
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        mode="inline"
        theme="dark"
        inlineCollapsed={this.state.collapsed}
        onClick={this.handleClick}
        selectedKeys={[this.state.current]}
        mode="horizontal"
      >
        <Menu.Item key="home">
          <a href="/">
            <Icon type="home" />
            Home
          </a>
        </Menu.Item>
        <Menu.Item key="charts">
          <a href="/charts">
            <Icon type="bar-chart" />
            Gráficos
          </a>
        </Menu.Item>
        <Menu.Item key="charts">
          <a href="/">
            <Icon type="logout" />
            Sair
          </a>
        </Menu.Item>
        <Dropdown
          overlay={menu}
          style={{ position: "absolute", bottom: 0, right: 0 }}
        >
          <Avatar size={30} icon="user" />
        </Dropdown>
      </Menu>
    );
  }
}

export default Nav;
