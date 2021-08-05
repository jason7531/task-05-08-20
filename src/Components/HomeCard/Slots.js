import React from "react";

const Slots = (props) => {
  return (
    <>
      <div className="row mt-1 mb-3 p-3">
        <div
          className="col-12"
          style={{
            border: "1px solid grey",
            borderRadius: "5px",
            position: "relative",
            fontSize: "14px",
            background: "#FBFBFB",
          }}
        >
          <div className="row">
            <div
              className="col-5"
              style={{
                borderRadius: "25px",
                fontSize: "14px",
                position: "absolute",
                top: "-12px",
                left: "13px",
                background:
                  "linear-gradient(116.7deg, #FFFB91 2.47%, #FF9FFF 125.44%)",
                width: "auto",
              }}
            >
              Morning
            </div>
          </div>
          <div
            className="row mt-3 mb-2"
            style={{
              fontWeight: "400",
              fontSize: "0.805rem",
              color: "#313450",
              fontFamily: "Poppins",
            }}
          >
            <div className="row">
              <div className="col-1"></div>
              <div
                className="col-2"
                onClick={() => props.onClick("10:00 AM")}
                style={{ cursor: "pointer" }}
              >
                10:00
              </div>
              <div
                className="col-2"
                onClick={() => props.onClick("11:00 AM")}
                style={{ cursor: "pointer" }}
              >
                11:00
              </div>
              <div
                className="col-2"
                onClick={() => props.onClick("12:00 PM")}
                style={{ cursor: "pointer" }}
              >
                12:00
              </div>

              <div className="col-1"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-1 mb-3 p-3">
        <div
          className="col-12"
          style={{
            border: "1px solid grey",
            borderRadius: "5px",
            position: "relative",
            fontSize: "14px",
            background: "#FBFBFB",
          }}
        >
          <div className="row">
            <div
              className="col-5"
              style={{
                borderRadius: "25px",
                fontSize: "14px",
                position: "absolute",
                top: "-12px",
                left: "13px",
                background:
                  "linear-gradient(133.92deg, #E0CCFF 2.64%, #C1FFF1 95.62%)",
                width: "auto",
              }}
            >
              Afternoon
            </div>
          </div>
          <div
            className="row mt-3 mb-2"
            style={{
              fontWeight: "400",
              fontSize: "0.805rem",
              color: "#313450",
              fontFamily: "Poppins",
            }}
          >
            <div className="row">
              <div className="col-1"></div>
              <div
                className="col-2"
                onClick={() => props.onClick("12:00 PM")}
                style={{ cursor: "pointer" }}
              >
                12:00
              </div>
              <div
                className="col-2"
                onClick={() => props.onClick("01:00 PM")}
                style={{ cursor: "pointer" }}
              >
                01:00
              </div>
              <div
                className="col-2"
                onClick={() => props.onClick("02:00 PM")}
                style={{ cursor: "pointer" }}
              >
                02:00
              </div>
              <div
                className="col-2"
                onClick={() => props.onClick("03:00 PM")}
                style={{ cursor: "pointer" }}
              >
                03:00
              </div>
              <div
                className="col-2"
                onClick={() => props.onClick("04:00 PM")}
                style={{ cursor: "pointer" }}
              >
                04:00
              </div>
              <div className="col-1"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-1 mb-3 p-3">
        <div
          className="col-12"
          style={{
            border: "1px solid grey",
            borderRadius: "5px",
            position: "relative",
            fontSize: "14px",
            background: "#FBFBFB",
          }}
        >
          <div className="row">
            <div
              className="col-5"
              style={{
                borderRadius: "25px",
                fontSize: "14px",
                position: "absolute",
                top: "-12px",
                left: "13px",
                background:
                  "linear-gradient(133.92deg, #90E4FF 2.64%, #9FFFF5 95.62%)",
                width: "auto",
              }}
            >
              Evening & Night
            </div>
          </div>
          <div
            className="row mt-3 mb-2"
            style={{
              fontWeight: "400",
              fontSize: "0.805rem",
              color: "#313450",
              fontFamily: "Poppins",
            }}
          >
            <div className="row">
              <div className="col-1"></div>
              <div
                className="col-2"
                onClick={() => props.onClick("05:00 PM")}
                style={{ cursor: "pointer" }}
              >
                05:00
              </div>
              <div
                className="col-2"
                onClick={() => props.onClick("06:00 PM")}
                style={{ cursor: "pointer" }}
              >
                06:00
              </div>
              <div
                className="col-2"
                onClick={() => props.onClick("07:00 PM")}
                style={{ cursor: "pointer" }}
              >
                07:00
              </div>
              <div
                className="col-2"
                onClick={() => props.onClick("08:00 PM")}
                style={{ cursor: "pointer" }}
              >
                08:00
              </div>
              <div
                className="col-2"
                onClick={() => props.onClick("09:00 PM")}
                style={{ cursor: "pointer" }}
              >
                09:00
              </div>
              <div className="col-1"></div>
            </div>
            <div className="row">
              <div className="col-1"></div>
              <div
                className="col-2"
                onClick={() => props.onClick("10:00 PM")}
                style={{ cursor: "pointer" }}
              >
                10:00
              </div>

              <div className="col-1"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Slots;
