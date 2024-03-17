import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { setLoginInfo, LoginInfoType } from "@/utils/storage";
import logon from "@/assets/logo.png";
import { Button } from "antd";

/**
 * 图片引入
 * https://vitejs.cn/guide/assets.html#new-url-url-import-meta-url
 */

let timer: any;

function Login() {
  const [coutdown, setCoutdown] = useState(3);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (coutdown <= 0) {
      navigate("/");
      clearInterval(timer);
      setLoading(false);
    }
  }, [coutdown]);

  function onLogin() {
    const params: LoginInfoType = {
      username: "Hailen",
      password: "300700635",
    };
    setLoading(true);
    setLoginInfo(params);
    timer = setInterval(() => setCoutdown((x) => --x), 1000);
  }

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Login页面</h1>
      <h1 className="app-name">Vite + React</h1>
      <img src={logon} alt="" />
      <div className="card">
        <Button type="primary" onClick={onLogin}>
          登录{loading ? `(${coutdown})` : ""}
        </Button>
      </div>
      <style jsx>{`
        .app-name {
          color: red;
        }
      `}</style>
    </div>
  );
}

export default Login;
