import React, { useState } from "react";
import "./App.css";

import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import "./bootstrap-5.1.0-dist/css/bootstrap.min.css";
import DateSlider from "./Components/HomeCard/DateSlider";
import Btn from "./Components/HomeCard/Btn";
import NoSlot from "./Components/HomeCard/NoSlot";
import Slots from "./Components/HomeCard/Slots";
import ProfileHeader from "./Components/HomeCard/ProfileHeader";
import Form from "./Components/HomeCard/Form";
function App() {
  const [showForm, setShowForm] = useState(false);
  const [showSlots, setShowSlots] = useState(false);
  const [showNoSlot, setShowNoSlot] = useState(true);
  const [date, setDate] = useState("Today 05");
  const [dateSlider, setDateSlider] = useState(true);
  const [message, setMessage] = useState("Next Day Available on Fri, 06");
  const [time, setTime] = useState("");
  const increaseHandler = () => {
    setDate("Tommorow 06");
    setShowNoSlot(false);
    setShowSlots(true);
    setMessage("Next");
  };
  const decreaseHandler = () => {
    setDate("Today 05");
    setShowSlots(false);
    setShowNoSlot(true);
    setMessage("Next Day Available on Fri, 06");
  };
  const clickHandler = (time) => {
    setShowForm(true);
    setShowSlots(false);
    setDateSlider(false);
    setMessage("Confirm Booking");
    setTime(time);
  };
  const backHandler = () => {
    setShowForm(false);
    setDateSlider(true);
    increaseHandler();
  };
  return (
    // <>
    //   <div className="App"></div>
    //   <a href="#" className="back-btn">
    //     <ArrowBackIcon />
    //     Select a Time Slot
    //   </a>
    //   <Card>
    //     <img
    //       src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGVyc29ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"
    //       alt="Avatar"
    //       className="avatar"
    //     />
    //     <h3>Mr Swami</h3>
    //     <hr />
    //     <h2>this is a card</h2>
    //     <ChevronRightIcon />
    //     <ChevronLeftIcon />
    //     <Button>Button</Button>
    //   </Card>
    // </>
    <>
      <div
        className="container-fluid"
        style={{
          background: "#3A58FC",
          minHeight: "13rem",
          borderRadius: "0 0 2.5rem 2.5rem",
        }}
      >
        <div className="row">
          <div className="col-md-12" style={{ marginTop: "4rem" }}>
            <span className="back-btn" onClick={backHandler}>
              <ArrowBackIcon />
              &nbsp; Select a Time slot
            </span>
          </div>
        </div>
      </div>
      <div
        className="row"
        style={{ margin: "-5.125rem 1rem", marginTop: "-5rem" }}
      >
        <div className="col-md-3 col-sm-12"></div>
        <div
          className="col-md-6 col-sm-12 text-center mb-5"
          style={{
            background: "white",
            minHeight: "100px",
            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.25)",
            borderRadius: "0.875rem",
            fontFamily: "Poppins",
          }}
        >
          <ProfileHeader />
          <hr />
          {dateSlider && (
            <DateSlider
              onIncrease={increaseHandler}
              onDecrease={decreaseHandler}
              date={date}
            />
          )}
          {showNoSlot && <NoSlot />}
          {showSlots && <Slots onClick={clickHandler} />}

          {showForm && <Form time={time} />}
          <Btn
            message={message}
            onClick={() => {
              increaseHandler();
              setDateSlider(true);
              setShowForm(false);
            }}
          />
        </div>
        <div className="col-md-3"></div>
      </div>
    </>
  );
}

export default App;
