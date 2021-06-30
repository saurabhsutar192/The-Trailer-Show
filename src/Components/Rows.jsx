import React, { useRef } from "react";
import { baseImgURL } from "../endpoints";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import "../CSS/rows.css";

function Rows({ title, content }) {
  const contentContainer = useRef();

  function scrollBack() {
    sideScroll(contentContainer.current, "left", 1, 500, 10);
  }
  function scrollNext() {
    sideScroll(contentContainer.current, "right", 1, 500, 10);
  }

  function sideScroll(element, direction, speed, distance, step) {
    let scrollAmount = 0;
    let slideTimer = setInterval(function () {
      if (direction == "left") {
        element.scrollLeft -= step;
      } else {
        element.scrollLeft += step;
      }
      scrollAmount += step;
      if (scrollAmount >= distance) {
        window.clearInterval(slideTimer);
      }
    }, speed);
  }

  return (
    <div className="rows">
      <h1 className="rowTitle">{title}</h1>
      <div className="rowContainer">
        <div onClick={scrollBack} className="before">
          <NavigateBeforeIcon fontSize="large" />
        </div>
        <div ref={contentContainer} className="content">
          {content.map((movie) => {
            return (
              <div key={movie.id} className="movie">
                {/* <h3>{movie.original_title || movie.original_name}</h3> */}
                <div className="poster">
                  <img
                    src={baseImgURL + movie.poster_path}
                    alt={movie.original_title}
                  />
                </div>
              </div>
            );
          })}
        </div>
        <div onClick={scrollNext} className="after">
          <NavigateNextIcon fontSize="large" />
        </div>
      </div>
    </div>
  );
}

export default Rows;
