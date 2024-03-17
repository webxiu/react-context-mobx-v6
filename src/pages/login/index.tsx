import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { setLoginInfo, LoginInfoType } from "@/utils/storage";

let timer: any;

function Login() {
  const [coutdown, setCoutdown] = useState(3);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const onLogin = () => {
    const params: LoginInfoType = {
      username: "Hailen",
      password: "300700635",
    };
    setLoading(true);
    setLoginInfo(params);
    timer = setInterval(() => setCoutdown((x) => --x), 1000);
  };

  useEffect(() => {
    if (coutdown <= 0) {
      navigate("/");
      clearInterval(timer);
      setLoading(false);
    }
  }, [coutdown]);

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Login页面</h1>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={onLogin}>登录{loading ? `(${coutdown})` : ""}</button>
      </div>
    </div>
  );
}

export default Login;
