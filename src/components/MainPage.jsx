import React, { useState, useEffect } from "react";
import Taskbar from "./Taskbar";
import Search from "./Search";
import HeadBar from "./HeadBar";
import Quotes from "./Quotes";

export default function MainPage(props) {
  const [dateTime, setDateTime] = useState(getCurrentDateTime());

  function getCurrentDateTime() {
    const now = new Date();
    const date =
      reDesign(now.getDate()) +
      "-" +
      reDesign(now.getMonth() + 1) +
      "-" +
      now.getFullYear();
    const time = reDesign(now.getHours()) + ":" + reDesign(now.getMinutes());
    
    return { date, time };
  }

  function reDesign(a) {
    return a >= 0 && a < 10 ? "0" + a : a;
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setDateTime(getCurrentDateTime());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  function greetUser() {
    const now = new Date();
    if (now.getHours() >= 5 && now.getHours() < 12) {
      return "Good Morning";
    } else {
      return "Good Evening";
    }
  }

  return (
    <div className="Home">
      <div className="Landing">
        <HeadBar />
        <div className="mainContainer">
          <span className="timeDetail">{dateTime.time}</span>
          
          <span className="greetingUser">{greetUser()}, {props.name}</span>
          <Search />
          <Quotes />
        </div>
      </div>
      <div className="mainTaskbar">
        <Taskbar />
      </div>
    </div>
  );
}
