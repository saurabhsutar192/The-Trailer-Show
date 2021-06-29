import Rows from "./Rows";
import { useEffect, useState } from "react";
import { caller, baseImgURL, endpoints } from "../endpoints";

function Recommendation() {
  let [trending, setTrending] = useState([]);
  let [tv, setTv] = useState([]);
  let [action, setAction] = useState([]);
  let [comedy, setComedy] = useState([]);
  let [horror, setHorror] = useState([]);
  let [romance, setRomance] = useState([]);
  let [docs, setDocs] = useState([]);
  useEffect(() => {
    caller.get(endpoints.fetchTrending).then((res) => {
      setTrending(res.data.results);
    });

    caller.get(endpoints.fetchTV).then((res) => {
      setTv(res.data.results);
    });
    caller.get(endpoints.fetchActionMovies).then((res) => {
      setAction(res.data.results);
    });
    caller.get(endpoints.fetchComedyMovies).then((res) => {
      setComedy(res.data.results);
    });
    caller.get(endpoints.fetchHorrorMovies).then((res) => {
      setHorror(res.data.results);
    });
    caller.get(endpoints.fetchRomanceMovies).then((res) => {
      setRomance(res.data.results);
    });
    caller.get(endpoints.fetchDocumentariesMovies).then((res) => {
      setDocs(res.data.results);
    });
  }, []);

  return (
    <div>
      <Rows title={"Trending Now"} content={trending} />
      <Rows title={"Discover TV"} content={tv} />
      <Rows title={"Action"} content={action} />
      <Rows title={"Comedy"} content={comedy} />
      <Rows title={"Horror"} content={horror} />
      <Rows title={"Romance"} content={romance} />
    </div>
  );
}

export default Recommendation;
