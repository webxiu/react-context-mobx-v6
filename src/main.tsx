import ReactDOM from "react-dom/client";
import App from "~/src/App.tsx";
import "@/index.css";
import RootStoreProvider from "@/stores/index.tsx";

// 严格模式不能自动检测到你的副作用，但它可以帮助你发现它们，使它们更具确定性。通过故意重复调用以下函数来实现的该操作。
// 注意：这仅适用于开发模式。生产模式下生命周期不会被调用两次。

ReactDOM.createRoot(document.getElementById("root")!).render(
  // <React.StrictMode>
  <RootStoreProvider>
    <App />
  </RootStoreProvider>
  // </React.StrictMode>
);
