import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { menus } from "@/router";
import { useEffect } from "react";
import { getLoginInfo } from "@/utils/storage";
import { useNavigate } from "react-router-dom";

function Layout() {
  const navigate = useNavigate();
  useEffect(() => {
    const loginInfo = getLoginInfo();
    if (loginInfo.username !== "Hailen") {
      navigate("/login");
    }
  }, []);

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
        <Link to={"/login"}>退出</Link>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
