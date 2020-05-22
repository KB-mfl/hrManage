import React from "react";
import { Layout, Menu, Breadcrumb, Icon } from "antd";
import headBarModuleData from "../Mock/tourist/headBarModuleData";

const { SubMenu } = Menu;
const { Header, Content, Sider, Footer } = Layout;
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      collapsed: false,
    };
    // this.changeVisible = this.changeVisible.bind(this);
  }

  changeVisible = () => {
    this.setState({ visible: true });
  };

  onCollapse = (collapsed) => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    return (
      <div>
        <Layout style={{ minHeight: "100vh" }}>
          <Header className="header">
            <div className="logo" />
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={["0"]}
              style={{ lineHeight: "64px" }}
            >
              {headBarModuleData.map((o) => {
                return <Menu.Item key={o.index}>{o.moduleName}</Menu.Item>;
              })}
            </Menu>
          </Header>
          <Layout>
            <Sider width={200} style={{ background: "#fff" }}>
              <Menu
                theme="light"
                mode="inline"
                defaultSelectedKeys={["1"]}
                defaultOpenKeys={["sub1"]}
                style={{ height: "100%", borderRight: 0 }}
              >
                <Menu.Item key="1">
                  <Icon type="user" />
                  <span>nav 1</span>
                </Menu.Item>
                <Menu.Item key="2">
                  <Icon type="video-camera" />
                  <span>nav 2</span>
                </Menu.Item>
                <Menu.Item key="3">
                  <Icon type="upload" />
                  <span>nav 3</span>
                </Menu.Item>
              </Menu>
            </Sider>
            <Layout style={{ padding: "10px 24px 24px" }}>
              <Content
                style={{
                  background: "#fff",
                  padding: 24,
                  margin: 0,
                  minHeight: 280,
                }}
              >
                Content
              </Content>
              <Footer style={{ textAlign: "center" }}>
                hr manage ©2020 Created by qk
              </Footer>
            </Layout>
          </Layout>
        </Layout>
      </div>
    );
  }
}
