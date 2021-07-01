import React, { useState } from "react";
import { useSelector } from "react-redux";
import { baseImgURL } from "../endpoints";
import "../CSS/searchRes.css";
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import { useDispatch } from "react-redux";

import Trailer from "./Trailer";
import handleTrailer from "../handleTrailer";

function SearchRes() {
  let { movieRes, tvRes, isMovies, isTV } = useSelector((state) => state);
  let dispatch = useDispatch();
  let [videoId, setVideoId] = useState("");
  let [clicked, setClicked] = useState(false);

  // function handleTvTrailer(id) {
  //   console.log("Executed");
  //   trailer("dark").then((res) => {
  //     console.log(res);
  //   });
  // }

  return (
    <div className="searchRes">
      {isMovies ? (
        movieRes.length !== 0 ? (
          movieRes.map((movie) => {
            if (movie.poster_path !== null) {
              return (
                <div
                  onClick={() => {
                    handleTrailer(movie.id, setVideoId, setClicked);
                  }}
                  key={movie.id}
                  className="searchedImg"
                >
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
              <div
                onClick={() => {
                  handleTrailer(tv.id);
                }}
                key={tv.id}
                className="searchedImg"
              >
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
      {clicked && <Trailer setClicked={setClicked} videoId={videoId} />}
    </div>
  );
}

export default SearchRes;
