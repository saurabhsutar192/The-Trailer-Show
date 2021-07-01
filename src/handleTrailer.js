import * as trailer from "movie-trailer";

function handleTrailer(id, setVideoId, setClicked, title) {
  trailer(null, { tmdbId: id }).then((res) => {
    if (res && title) {
      let urlId = new URLSearchParams(new URL(res).search);
      setVideoId(urlId?.get("v"));

      setClicked(true);
    } else {
      window.alert("No trailer found");
    }
  });
}

export default handleTrailer;
