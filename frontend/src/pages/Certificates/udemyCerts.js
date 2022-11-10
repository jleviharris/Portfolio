import React, { useState } from "react";

const UdemyCerts = () => {
  const [arrow, setArrow] = useState("arrow_downward");
  const [hidden, setHidden] = useState(false);

  function handleClick() {
    if (hidden) {
      setHidden(false);
    } else {
      setHidden(true);
    }
  }

  function handleArrow() {
    if (arrow === "arrow_upward") {
      setArrow("arrow_downward");
    } else if (arrow === "arrow_downward") {
      setArrow("arrow_upward");
    }
  }
  return (
    <div className="certificatesPageInside">
      <h1 >
        <button
          onClick={() => {
            handleClick();
            handleArrow();
          }}
        >
          {" "}
          <span className="material-symbols-outlined">{arrow}</span>
        </button>
        Udemy (1)
      </h1>

      {hidden && (
        <div>
          <div className="certContainer">
            {" "}
            <img src={require("../Certificates/Imgs/codingInterview.jpeg")} />
            <div className="certTitles">
              <p>
                Mastering the Coding Interview: Data Structures and Algorithms
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UdemyCerts;
