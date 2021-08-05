import React from "react";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";

const DateSlider = (props) => {
  return (
    <>
      <div className="row mt-3 mb-2">
        <div className="col-2">
          {props.date === "Tommorow 06" && (
            <span
              style={{
                background: "white",
                height: "1.375rem",
                width: "1.466rem",
                borderRadius: "50%",
                filter: "drop-shadow(0px 1px 8px rgba(0, 0, 0, 0.129))",
              }}
              onClick={props.onDecrease}
            >
              <ChevronLeftIcon />
            </span>
          )}
        </div>
        <div className="col-8">{`${props.date}, August`}</div>
        <div className="col-2">
          <span
            style={{
              background: "white",
              height: "1.375rem",
              width: "1.466rem",
              borderRadius: "50%",
              filter: "drop-shadow(0px 1px 8px rgba(0, 0, 0, 0.129))",
            }}
            onClick={props.onIncrease}
          >
            <ChevronRightIcon />
          </span>
        </div>
      </div>
    </>
  );
};

export default DateSlider;
