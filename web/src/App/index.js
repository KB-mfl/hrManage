import React from "react";
import { Layout, Menu, Icon, Drawer, Button } from "antd";
import { BrowserRouter, Route, Redirect, Switch, Link } from "react-router-dom";
import headBarModuleData from "../Mock/tourist/headBarModuleData";
import Notification from "../Component/Notification/Notification";
import Square from "../Component/Square/Square";

const { Header, Content, Footer } = Layout;
const headBar = headBarModuleData;
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
  }

  showDrawer = () => {
    this.setState({ visible: true });
  };

  onClose = () => {
    this.setState({ visible: false });
  };

  getDefaultKeys = () => {
    console.log("1");
    return window.location.pathname.split("/")[1];
  };

  render() {
    const siderBar = [
      {
        name: "用户",
        type: "user",
        key: "0",
      },
      {
        name: "记录",
        type: "video-camera",
        key: "1",
      },
      {
        name: "文件上传",
        type: "upload",
        key: "2",
      },
    ];
    return (
      <div>
        <BrowserRouter>
          <Layout style={{ minHeight: "100vh" }}>
            <Header className="header">
              <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={[this.getDefaultKeys()]}
                style={{ lineHeight: "64px" }}
              >
                {headBar.map((o) => {
                  return (
                    <Menu.Item key={o.key}>
                      <Link to={`/${o.key}`} />
                      <span>{o.moduleName}</span>
                    </Menu.Item>
                  );
                })}
              </Menu>
              <Button
                type="primary"
                style={{ float: "right", marginTop: -50, right: -30 }}
                onClick={this.showDrawer}
              >
                设 置<Icon type="menu" />
              </Button>
              <div>
                <Drawer
                  title={window.loginId ? "设置选项" : "设置选项（未登录）"}
                  placement="right"
                  closable={false}
                  onClose={this.onClose}
                  visible={this.state.visible}
                >
                  <Menu
                    theme="light"
                    mode="inline"
                    style={{ height: "100%", borderRight: 0 }}
                  >
                    {siderBar.map((o) => {
                      return (
                        <Menu.Item key={o.key}>
                          <Icon type={o.type} />
                          <span>{o.name}</span>
                        </Menu.Item>
                      );
                    })}
                  </Menu>
                </Drawer>
              </div>
            </Header>
            <Layout>
              <Layout style={{ padding: "10px 24px 24px" }}>
                <Content
                  style={{
                    background: "#fff",
                    padding: 24,
                    margin: 0,
                    minHeight: 280,
                  }}
                >
                  <Switch>
                    <Route
                      exact
                      path="/"
                      component={() => <Redirect to="/homePage" />}
                    />
                    <Route exact path="/square" component={Square} />
                    <Route
                      exact
                      path="/notification"
                      component={Notification}
                    />
                  </Switch>
                </Content>
                <Footer style={{ textAlign: "center" }}>
                  hr manage ©2020 Created by qk
                </Footer>
              </Layout>
            </Layout>
          </Layout>
        </BrowserRouter>
      </div>
    );
  }
}
