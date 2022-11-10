import React from "react";
import { useNavigate } from "react-router-dom";
import DevCodeCampCerts from "./devCodeCampCerts";
import UdemyCerts from "./udemyCerts";
import FreeCodeCampCerts from "./freeCodeCampCerts";
import CodeCademyCerts from "./codeCademyCerts";

const Certificates = () => {
  const navigate = useNavigate();
  return (
    <div className="certificatesPage">
      {" "}
      <button className="backButton" onClick={() => navigate("/")}>
        BACK
      </button>
      <div className="certsHolder">
      <DevCodeCampCerts />
      <UdemyCerts />
      <CodeCademyCerts />
      <FreeCodeCampCerts />
      </div>
    </div>
  );
};

export default Certificates;
