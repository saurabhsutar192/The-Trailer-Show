import { useEffect, useState } from "react";
import axios from "axios";
import Movie from "./Components/Movie";
import "./CSS/app.css";
import { endpoints, baseImgURL } from "./endpoints";
import Header from "./Components/Header";
import Recommendation from "./Components/Recommendation";

//89440096b2b595752186edca36579ff1
// const API_KEY = "89440096b2b595752186edca36579ff1";
// const baseImgURL = "https://image.tmdb.org/t/p/original";

function App() {
  return (
    <div className="App">
      {/* {movieArr.map((movie) => (
        <Movie
          title={movie.original_name || movie.original_title}
          img={`${baseImgURL}${movie?.poster_path}`}
          desc={movie.overview}
        />
      ))} */}
      <div className="trailerShow">
        <Header />
        <Recommendation />
      </div>
    </div>
  );
}

export default App;
