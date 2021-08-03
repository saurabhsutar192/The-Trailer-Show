
import "./CSS/app.css";
import "./CSS/youtube.css";
import Header from "./Components/Header";
import Recommendation from "./Components/Recommendation";
import { useSelector } from "react-redux";
import SearchRes from "./Components/SearchRes";

function App() {
  let { isSearched } = useSelector((state) => state);



  return (
    <div className="App">
      <div className="trailerShow">
        <Header />
        {!isSearched ? <Recommendation /> : <SearchRes />}
      </div>
    </div>
  );
}

export default App;
