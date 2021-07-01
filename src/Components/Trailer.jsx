import React from "react";
import YouTube from "react-youtube";
import CancelIcon from "@material-ui/icons/Cancel";
function Trailer({ setClicked, videoId }) {
  return (
    <div className="youtubeContainer">
      <div className="youtube">
        <YouTube
          className="video"
          videoId={videoId}
          onEnd={() => setClicked(false)}
        />
        <div onClick={() => setClicked(false)} className="cancel">
          <CancelIcon fontSize="large" />
        </div>
      </div>
    </div>
  );
}

export default Trailer;
