import Rows from "./Rows";
import { useEffect, useState } from "react";
import { caller, endpoints } from "../endpoints";

function Recommendation() {
  let [recommendation, setRecommendation] = useState({
    trending: [],
    tv: [],
    action: [],
    comedy: [],
    horror: [],
    romance: [],
  });

  useEffect(() => {
    Promise.all([
      caller.get(endpoints.fetchTrending),
      caller.get(endpoints.fetchTV),
      caller.get(endpoints.fetchActionMovies),
      caller.get(endpoints.fetchComedyMovies),
      caller.get(endpoints.fetchHorrorMovies),
      caller.get(endpoints.fetchRomanceMovies),
    ]).then((res) => {
      setRecommendation({
        trending: res[0].data.results,
        tv: res[1].data.results,
        action: res[2].data.results,
        comedy: res[3].data.results,
        horror: res[4].data.results,
        romance: res[5].data.results,
      });
    });
  }, []);

  return (
    <div>
      <Rows title={"Trending Now"} content={recommendation.trending} />
      <Rows title={"Discover TV"} content={recommendation.tv} />
      <Rows title={"Action"} content={recommendation.action} />
      <Rows title={"Comedy"} content={recommendation.comedy} />
      <Rows title={"Horror"} content={recommendation.horror} />
      <Rows title={"Romance"} content={recommendation.romance} />
    </div>
  );
}

export default Recommendation;
