import React from "react";

const ProfileHeader = () => {
  return (
    <div>
      <div className="row mt-3">
        <div className="col-md-3 col-sm-2 col-2">
          <img
            src="https://smhlancers.org/wp-content/uploads/2016/06/profile-placeholder-300x300.png"
            alt="Avatar"
            className="avatar"
          />
        </div>
        <div className="col-md-8 col-sm-8 col-8" style={{ marginLeft: "20px" }}>
          <div className="row">
            <div
              className="col-md-12"
              style={{ textAlign: "left", fontWeight: "400" }}
            >
              Dr. Jitendra Raut
            </div>
          </div>
          <div className="row">
            <div
              className="col-md-12"
              style={{
                textAlign: "left",
                color: "gray",
                fontSize: "0.75rem",
              }}
            >
              MA.BL- Corporate Lawyer
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
