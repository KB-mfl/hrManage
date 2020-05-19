import React from "react";
import { Button, Modal } from "antd";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
    // this.changeVisible = this.changeVisible.bind(this);
  }

  changeVisible = () => {
    this.setState({ visible: true });
  };

  render() {
    return (
      <div>
        <Button type="primary" onClick={this.changeVisible}>
          按钮
        </Button>
        <Modal
          visible={this.state.visible}
          onCancel={() => {
            this.setState({ visible: false });
          }}
          onOk={() => {
            this.setState({ visible: false });
          }}
        >
          we modal
        </Modal>
      </div>
    );
  }
}
