import React from "react";
import { Button } from "antd";

export default class Admin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visiable: null,
    };
  }

  render() {
    return <Button type="primary">admin</Button>;
  }
}
