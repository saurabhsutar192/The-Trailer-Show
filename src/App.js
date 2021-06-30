import { useEffect, useState } from "react";
import axios from "axios";
import Movie from "./Components/Movie";
import "./CSS/app.css";
import { endpoints, baseImgURL } from "./endpoints";
import Header from "./Components/Header";
import Recommendation from "./Components/Recommendation";
import { useSelector } from "react-redux";
import SearchRes from "./Components/SearchRes";

function App() {
  let { isSearched } = useSelector((state) => state);

  useEffect(() => {
    console.log(isSearched);
  }, [isSearched]);

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
        {!isSearched ? <Recommendation /> : <SearchRes />}
      </div>
    </div>
  );
}

export default App;
