import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();
  const goBack = () => navigate("/");

  return (
    <div style={{ textAlign: "center" }}>
      <h1>页面未找到</h1>
      <div className="card">
        <button onClick={goBack}> </button>
      </div>
    </div>
  );
}

export default NotFound;
