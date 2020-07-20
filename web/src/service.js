import axios from "axios";
import store from "store";
import { message, notification, Icon } from "antd";
import moment from "moment";

const server = axios.create({
  baseURL: "",
});

server.interceptors.request.use(
  (config) => {
    config.headers.Authorization = store.get("Authorization");
    return config;
  },
  (error) => Promise.reject(error)
);

server.createNotification = (error, errMsg) => {
  notification.open({
    message: error.response.config.method === "get" ? "请求失败" : "操作失败",
    description: (
      <div>
        <div>
          {moment(error.response.headers.date).format("YYYY-MM-DD HH:mm:ss")}
        </div>
        <div>
          <strong>错误代码：</strong>
          <span>{error.response.status}</span>
        </div>
        <div>
          <strong>错误信息：</strong>
          <span>{errMsg}</span>
        </div>
      </div>
    ),
    icon: <Icon type="frown" style={{ color: "#e90240" }} />,
    placement: "bottomRight",
  });
};

server.interceptors.response.use(
  (response) => {
    if (response.config.method === "get") {
      // do something
    } else if (response.config.url.match(/\/upload.*$/)) {
      message.success("上传成功");
    } else {
      notification.open({
        message: "bingo",
        description: moment(response.headers.date).format(
          "YYYY-MM-DD HH:mm:ss"
        ),
        icon: <Icon type="smile" style={{ color: "#108ee9" }} />,
        placement: "bottomRight",
      });
    }
  },
  (err) => {
    const code = err.response.status;
    let errMsg;
    if (code === 401) {
      errMsg = err.response.data.message || "登录信息过期，请重新登录";
    } else if (code === 403) {
      errMsg = err.response.data.message || "权限不够，无法进行此操作";
    } else if (code === 404) {
      errMsg = err.response.data.message || "页面走丢啦";
    } else {
      errMsg = err.response.data.message || "暂时未定义错误";
    }
    if (!errMsg) {
      Promise.reject(err);
    }
    server.createNotification(err, errMsg);
    return Promise.reject(err);
  }
);
