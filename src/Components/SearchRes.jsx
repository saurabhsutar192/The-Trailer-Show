import React from "react";
import { useSelector } from "react-redux";
import { baseImgURL } from "../endpoints";
import "../CSS/searchRes.css";
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import { useDispatch } from "react-redux";

function SearchRes() {
  let { movieRes, tvRes, isMovies, isTV } = useSelector((state) => state);
  let dispatch = useDispatch();
  return (
    <div className="searchRes">
      {isMovies ? (
        movieRes.length !== 0 ? (
          movieRes.map((movie) => {
            if (movie.poster_path !== null) {
              return (
                <div className="searchedImg">
                  <img
                    src={baseImgURL + movie.poster_path}
                    alt={movie.original_title}
                  />{" "}
                </div>
              );
            }
          })
        ) : (
          <h1 className="nothing">Nothing found! Try different keywords</h1>
        )
      ) : isTV && tvRes.length !== 0 ? (
        tvRes.map((tv) => {
          if (tv.poster_path !== null) {
            return (
              <div className="searchedImg">
                <img src={baseImgURL + tv.poster_path} alt={tv.original_name} />
              </div>
            );
          }
        })
      ) : (
        <h1 className="nothing">Nothing found! Try different keywords</h1>
      )}
      <div
        onClick={() => {
          dispatch({ type: "isSearched", payload: false });
        }}
        className="homeBtn"
      >
        <HomeRoundedIcon />
      </div>
    </div>
  );
}

export default SearchRes;
