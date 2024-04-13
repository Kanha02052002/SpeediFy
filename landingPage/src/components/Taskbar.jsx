import React, { useState, useEffect } from "react";
import Spotify from "../assets/icons/spotify.png";
import YTMusic from "../assets/icons/youtube-music.png";
import Slack from "../assets/icons/slack.png";
import Bing from "../assets/icons/bing.png";
import Discord from "../assets/icons/discord (1).png";
import Gemini from "../assets/icons/gemini.png";
import Chatgpt from "../assets/icons/chatgpt-icon.png";
import Copilot from "../assets/icons/copilot-icon.png";
import Runway from "../assets/icons/runway-ai-icon.png";
import Unity from "../assets/icons/unity-game-engine-icon.png";
import Mid from "../assets/icons/midjourney-color-icon.png";
import Teams from "../assets/icons/teams.png";
import Notion from "../assets/icons/notion.png";
import Kaggle from "../assets/icons/kaggle.png";
import LeetCode from "../assets/icons/leetcode.png";

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
      <div className="links">
        <a href="https://leetcode.com/">
          <img className="icon" src={LeetCode} alt="" />
        </a>
        <a href="https://www.kaggle.com/">
          <img className="icon" src={Kaggle} alt="" />
        </a>
        <a href="https://open.spotify.com/">
          <img className="icon" src={Spotify} alt="" />
        </a>
        <a href="https://music.youtube.com/">
          <img className="icon" src={YTMusic} alt="" />
        </a>
        <a href="https://slack.com/">
          <img className="icon" src={Slack} alt="" />
        </a>
        <a href="https://discord.com/">
          <img className="icon" src={Discord} alt="" />
        </a>
        <a href="https://login.microsoftonline.com/">
          <img className="icon" src={Teams} alt="" />
        </a>
        <a href="https://www.notion.so/">
          <img className="icon" src={Notion} alt="" />
        </a>
        <a href="https://www.bing.com/">
          <img className="icon" src={Bing} alt="" />
        </a>
        <a href="https://gemini.google.com/app">
          <img style={{ width: "32px" }} className="icon" src={Gemini} alt="" />
        </a>
        <a href="https://chat.openai.com/">
          <img
            style={{ width: "32px" }}
            src={Chatgpt}
            className="icon"
            alt=""
          />
        </a>
        <a href="https://www.bing.com/chat?q=Bing+AI&FORM=hpcodx">
          <img
            style={{ width: "32px" }}
            src={Copilot}
            alt=""
            className="icon"
          />
        </a>
        <a href="https://app.runwayml.com/login">
          <img
            style={{ width: "24px", filter: "invert(100%)" }}
            src={Runway}
            alt=""
            className="icon"
          />
        </a>

        <a href="https://www.midjourney.com/home">
          <img style={{ width: "32px" }} src={Mid} alt="" className="icon" />
        </a>
        <a href="https://learn.unity.com/">
          <img style={{ width: "32px" }} src={Unity} alt="" className="icon" />
        </a>
      </div>
    </div>
  );
}
