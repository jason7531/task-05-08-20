import React from "react";

function Btn(props) {
  return (
    <>
      <div className="row mt-5 mb-5">
        <div className="col-12">
          <button
            className="btn btn-primary"
            style={{ borderRadius: "30px", background: "#3A58FC" }}
            onClick={props.onClick}
          >
            {props.message}
          </button>
        </div>
      </div>
    </>
  );
}

export default Btn;
