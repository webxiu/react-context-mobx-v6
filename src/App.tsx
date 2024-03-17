import RootRouter from "@/router";
import zhCN from "antd/locale/zh_CN";
import { ConfigProvider } from "antd";

function App() {
  return (
    <ConfigProvider locale={zhCN}>
      <RootRouter />
    </ConfigProvider>
  );
}

export default App;
