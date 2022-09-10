import { faAngleDown, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ContainerSearch } from "../../styles/HomeStyles";

export function Search() {
  return <SearchBar />;
}

const SearchBar = () => {
  return (
    <ContainerSearch>
      <form action="#">
        <div className="search">
          <i>
            <FontAwesomeIcon icon={faSearch} />
          </i>
          <input type={`text`} placeholder={`Search for a country...`}></input>
        </div>{" "}
      </form>
      {/*filter by region is also here */}
      <div className="filter">
        <div className="dropdown">
          Filter by Region{" "}
          <FontAwesomeIcon icon={faAngleDown} className="icon1" />
        </div>
        <div className="dropdown-content">
          <ul>
            <li>
              <button>Africa</button>
            </li>
          </ul>
          <ul>
            <li>
              <button>America</button>
            </li>
          </ul>
          <ul>
            <li>
              <button>Asia</button>
            </li>
          </ul>
          <ul>
            <li>
              <button>Europe</button>
            </li>
          </ul>
          <ul>
            <li>
              <button>Oceania</button>
            </li>
          </ul>
        </div>
      </div>
    </ContainerSearch>
  );
};
