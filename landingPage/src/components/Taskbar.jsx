import React, { useState, useEffect } from "react";

export default function FootBar() {
  const now = new Date();

  function getCurrentDateTime() {
    const date =
      reDesign(now.getDate()) +
      "-" +
      reDesign(now.getMonth() + 1) +
      "-" +
      now.getFullYear();
    const time = reDesign(now.getHours()) + ":" + reDesign(now.getMinutes());
    return { date, time };
  }

  const [dateTime, setDateTime] = useState(getCurrentDateTime());

  function reDesign(a) {
    return a >= 0 && a < 10 ? "0" + a : a;
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setDateTime(getCurrentDateTime());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="taskbar">
      <span className="date">{dateTime.date}</span>

      <div className="tools">
        
      </div>
    </div>
  );
}
