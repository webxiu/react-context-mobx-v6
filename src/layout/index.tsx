import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { menus } from "@/router";
import { useEffect } from "react";
import { getLoginInfo, removeLoginInfo } from "@/utils/storage";
import { useNavigate } from "react-router-dom";
import { useRouteChange } from "@/hooks/useGlable";

function Layout() {
  const navigate = useNavigate();

  useRouteChange(({ from, to }) => {
    console.log("form", from.pathname);
    console.log(`to: ${to.pathname}`);
  });

  useEffect(() => {
    const loginInfo = getLoginInfo();
    if (loginInfo.username !== "Hailen") {
      navigate("/login");
    }
  }, []);

  function onClear() {
    removeLoginInfo();
  }

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          {/* <Link to={"home"}>首页</Link> &nbsp;&nbsp;
          <Link to={"community"}>社区</Link> &nbsp;&nbsp;
          <Link to={"test"}>测试</Link> */}
          {menus.map((menu) => (
            <Link to={menu.path} key={menu.path} style={{ margin: "0 10px" }}>
              {menu.title}
            </Link>
          ))}
        </div>
        <div>
          <Link to={"/login"}>退出</Link> &nbsp;&nbsp;
          <a href="#" onClick={onClear}>
            清空缓存
          </a>
        </div>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
