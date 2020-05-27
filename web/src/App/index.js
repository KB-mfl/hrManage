// /* eslint-disable prettier/prettier */
import { Button, Modal } from "antd";
import React, { useState, useEffect } from 'react'
export default function App() {
    const [count, setCount] = useState(0);
    useEffect(() => {
      document.title = `You clicked ${count} times`;
    });
    return <div>
    <div style={{position:"absolute",left:"44%",top:"40%"}}>You clicked {count} times</div>
    <Button type={count==2?'dashed':"primary"}  style={{position:"absolute",left:"45%",top:"45%"}} onClick = {() => setCount(count+1)} loading={count==4?true:false} size={count==1?"large":"middle"} ghost={count==3?true:false}>
      晴空工作室
    </Button>
    <Modal
      // visible={count}
      // onCancel={() => {
      //   setCount(false)
      // }}
      // onOk={() => {
      //   setCount(false)
      // }}
    >
      连招是：A+Q+A+E
    </Modal>
  </div>
}


// export default class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       visible: false,
//     };
//     // this.changeVisible = this.changeVisible.bind(this);
//   }

//   changeVisible = () => {
//     this.setState({ visible: true });
//   };

//   render() {
//     return (
//       <div>
//         <Button type="primary" onClick={this.changeVisible}>
//           vn
//         </Button>
//         <Modal
//           visible={this.state.visible}
//           onCancel={() => {
//             this.setState({ visible: false });
//           }}
//           onOk={() => {
//             this.setState({ visible: false });
//           }}
//         >
//           we modal
//         </Modal>
//       </div>
//     );
//   }
// }
