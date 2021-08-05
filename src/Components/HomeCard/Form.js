import React from "react";

const Form = (props) => {
  return (
    <>
      <div className="row mt-3 p-3">
        <div className="col-6" style={{ textAlign: "left" }}>
          <div className="row">
            <div
              className="col-12"
              style={{
                fontweight: "400",
                color: "#898A8F",
                fontSize: "0.75rem",
              }}
            >
              Date & Time
            </div>
          </div>
          <div className="row">
            <div
              className="col-12"
              style={{
                fontWeight: "500",
                color: "#313450",
                fontSize: "14px",
              }}
            >
              Tomorrow, 6 Aug
            </div>
          </div>
          <div className="row">
            <div
              className="col-12"
              style={{
                fontWeight: "500",
                color: "#313450",
                fontSize: "0.875rem",
              }}
            >
              {props.time}
            </div>
          </div>
        </div>
        <div
          className="col-1"
          style={{ background: "#898A8F", width: "1px", padding: "0" }}
        ></div>
        <div className="col-5" style={{ textAlign: "left" }}>
          <div className="row">
            <div
              className="col-12"
              style={{
                fontweight: "400",
                color: "#898A8F",
                fontSize: "0.75rem",
              }}
            >
              Consultation Fee
            </div>
          </div>
          <div className="row">
            <div
              className="col-12"
              style={{
                fontWeight: "500",
                color: "#313450",
                fontSize: "0.875rem",
              }}
            >
              $ 500
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-3">
        <form className="form-group">
          <div className="row">
            <div className="col-md-6 col-12 mt-2">
              <input
                type="text"
                className="form-control col-md-6 col-12"
                placeholder="Name"
                style={{ background: "#F6F6F6" }}
              />
            </div>
            <div className="col-md-6 col-12 mt-2">
              <input
                type="text"
                className="form-control col-md-6 col-12"
                placeholder="Email"
                style={{ background: "#F6F6F6" }}
              />
            </div>
            <div className="col-md-12 col-12 mt-2">
              <input
                type="text"
                className="form-control col-md-6 col-12"
                placeholder="Number"
                style={{ background: "#F6F6F6" }}
              />
            </div>
          </div>
        </form>
      </div>
      <div className="row mt-3">
        <div
          className="col-md-12"
          style={{
            textAlign: "left",
            fontWeight: "400",
            fontSize: "0.625rem",
            color: "#898A8F",
          }}
        >
          By booking this appointment you agree to the T&C
        </div>
      </div>
    </>
  );
};

export default Form;
