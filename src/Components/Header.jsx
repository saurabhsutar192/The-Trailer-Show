import { useRef, useEffect } from "react";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import "../CSS/header.css";

function Header() {
  let dropDownList = useRef();
  let dropDownBtn = useRef();
  function toggleDropDown() {
    dropDownList.current.classList.toggle("dropDownClicked");
  }

  function setCategory(e) {
    let category = e.target.innerHTML;
    dropDownBtn.current.innerHTML = category;
  }

  useEffect(() => {
    //prevents adding all values when dragged

    let list = dropDownList.current.childNodes;
    for (let i = 0; i < list.length; i++) {
      list[i].addEventListener("click", setCategory);
    }
  }, []);

  return (
    <header className="header">
      <div className="searchContainer">
        <input type="text" className="search" placeholder="Search"></input>
        <div onClick={toggleDropDown} className="dropDownContainer">
          <button className="dropDownBtn">
            <span ref={dropDownBtn}>Movies</span>
            <ArrowDropDownIcon />
          </button>
          <ul ref={dropDownList} className="dropDownList">
            <li>Movies</li>
            <li>Tv Shows</li>
            <li>Actor</li>
            <li>Collection</li>
          </ul>
        </div>
      </div>

      <h1 className="title">The Trailer Show</h1>
    </header>
  );
}

export default Header;
