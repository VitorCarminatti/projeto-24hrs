import React from "react";
import { Menu, Icon, Dropdown, Avatar, message } from "antd";
import { DropdownStyle } from "./styles";

const { SubMenu } = Menu;

function handleMenuClick(e) {
  if (e.key === "logout") {
    message.info("Logout com sucesso!");
  }
}

const menu = (
  <Menu onClick={handleMenuClick}>
    <Menu.Item key="user">
      <Icon type="user" />
      Perfil
    </Menu.Item>
    <Menu.Item key="setting">
      <Icon type="setting" />
      Configuração
    </Menu.Item>
    <Menu.Item key="logout">
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
        <DropdownStyle>
          <Dropdown overlay={menu}>
            <Avatar size={30} icon="user" />
          </Dropdown>
        </DropdownStyle>
      </Menu>
    );
  }
}

export default Nav;
