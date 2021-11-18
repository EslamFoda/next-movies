import { useState } from "react";
import TrendingCards from "./TrendingCards";
import PouplarCards from "./PouplarCards";
const Trending = ({ trendingToday, trendingThisWeek }) => {
  const [hideThisWeek, setHideThisWeek] = useState(false);
  const [hideToday, setHideToday] = useState(true);
  const handleSwitch = (e) => {
    const firstTv = document.querySelector(".today.first");
    const secTv = document.querySelector(".today.sec");
    const wrapperFirst = document.querySelector(".today-wrapper.first");
    const wrapperSec = document.querySelector(".today-wrapper.sec");
    hideActive();
    if (
      e.target.textContent === "Today" ||
      e.target.classList.contains("today-wrapper first")
    ) {
      firstTv.classList.add("today-active");
      wrapperFirst.classList.add("wrap-active");
      setHideThisWeek(false);
      setHideToday(true);
    }
    if (
      e.target.textContent === "This Week" ||
      e.target.classList.contains("today-wrapper sec")
    ) {
      secTv.classList.add("today-active");
      wrapperSec.classList.add("wrap-active");
      setHideThisWeek(true);
      setHideToday(false);
    }
  };

  const hideActive = () => {
    const tvWrapper = document.querySelectorAll(".today-wrapper");
    const tv = document.querySelectorAll(".today");
    tvWrapper.forEach((wrap) => {
      wrap.classList.remove("wrap-active");
    });
    tv.forEach((t) => {
      t.classList.remove("today-active");
    });
  };
  return (
    <div className="trending-container">
      <div className="Popular-section">
        <div className="ontv-flex">
          <h1>Trending</h1>
          <div onClick={handleSwitch} className="ontv-container">
            <div className="today-wrapper first wrap-active">
              <span className="today first today-active">Today</span>
            </div>
            <div className="today-wrapper sec">
              <span className="today sec">This Week</span>
            </div>
          </div>
        </div>
      </div>
      <div className="px-2">
        {hideToday && <TrendingCards data={trendingToday} />}
        {hideThisWeek && <TrendingCards data={trendingThisWeek} />}
      </div>
    </div>
  );
};

export default Trending;
