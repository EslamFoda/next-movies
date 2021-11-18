import { useState } from "react";
import PouplarCards from "./PouplarCards";
const Popular = ({ shows, movies }) => {
  const [hideMovies, setHideMovies] = useState(false);
  const [hideShow, setHideShow] = useState(true);
  const handleSwitch = (e) => {
    const firstTv = document.querySelector(".ontv.first");
    const secTv = document.querySelector(".ontv.sec");
    const wrapperFirst = document.querySelector(".ontv-wrapper.first");
    const wrapperSec = document.querySelector(".ontv-wrapper.sec");
    hideActive();
    if (
      e.target.textContent === "On Tv" ||
      e.target.classList.contains("ontv-wrapper first")
    ) {
      firstTv.classList.add("ontv-active");
      wrapperFirst.classList.add("wrapper-active");
      setHideMovies(false);
      setHideShow(true);
    }
    if (
      e.target.textContent === "In Theaters" ||
      e.target.classList.contains("ontv-wrapper sec")
    ) {
      secTv.classList.add("ontv-active");
      wrapperSec.classList.add("wrapper-active");
      setHideMovies(true);
      setHideShow(false);
    }
  };

  const hideActive = () => {
    const tvWrapper = document.querySelectorAll(".ontv-wrapper");
    const tv = document.querySelectorAll(".ontv");
    tvWrapper.forEach((wrap) => {
      wrap.classList.remove("wrapper-active");
    });
    tv.forEach((t) => {
      t.classList.remove("ontv-active");
    });
  };

  return (
    <div className="popular-cont">
      <div className="Popular-section">
        <div className="ontv-flex">
          <h1>What's Popular</h1>
          <div onClick={handleSwitch} className="ontv-container">
            <div className="ontv-wrapper first wrapper-active">
              <span className="ontv first ontv-active">On Tv</span>
            </div>
            <div className="ontv-wrapper sec">
              <span className="ontv sec">In Theaters</span>
            </div>
          </div>
        </div>
      </div>
      <div className="px-2">
        {hideShow && <PouplarCards data={shows} />}
        {hideMovies && <PouplarCards data={movies} />}
      </div>
    </div>
  );
};

export default Popular;
