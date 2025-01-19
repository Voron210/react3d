import { useLocation, useNavigate } from "react-router-dom";
import Cube from "../Cube/Cube";
import SidePage from "../SidePage/SidePage";
import { useState } from "react";

function Home() {
  const savedData = localStorage.getItem("cubeData");
  const [data, setData] = useState(
    savedData
      ? JSON.parse(savedData)
      : {
          id: 0,
          UUID: "",
          text: "",
          top: 0,
          left: 0,
        }
  );

  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="for-task">
      <div className="btn-box_links">
        {location.pathname !== "/" ? (
          <button className="btn-back" onClick={() => navigate("/")}>
            Назад
          </button>
        ) : (
          <></>
        )}
      </div>
      <div className="container">
        {location.pathname === "/" ? (
          <Cube setData={setData} />
        ) : (
          <>
            <div
              className="shema"
              style={{ left: `${data.left - 15}px`, top: `${data.top - 15}px` }}
            ></div>
            <SidePage data={data} />
          </>
        )}
      </div>
    </div>
  );
}

export default Home;
