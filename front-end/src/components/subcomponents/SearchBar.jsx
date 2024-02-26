/* import Input from "../ui/Input";
import ButtonLink from "../ui/ButtonLink";
import "./SearchBar.css"
import LinkMenu from "../ui/LinkMenu";
import { Button } from "react-bootstrap";

const SearchBar = () => {
  return (
    <div className="d-flex " id="search-bar">
      <Input
        name="searchBar"
        placeholder="Ingrese su búsqueda..."
        type="search"
        className="input-search"
      ></Input>
      <Button className="rounded-0 border-black bg-black text-light">
      <LinkMenu
        link="/"
        icon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            className="bi bi-search"
            viewBox="0 0 16 16"
            id="button-search"
          >
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
          </svg>
        }
        name="Buscar"
      ></LinkMenu>
      </Button>
    </div>
  );
};

export default SearchBar; */

import Input from "../ui/Input";
import ButtonLink from "../ui/ButtonLink";
import "./SearchBar.css"

const SearchBar = () => {
  return (
    <div className="d-flex" id="search-bar">
      <Input
        name="searchBar"
        placeholder="Ingrese su búsqueda..."
        type="search"
        className="input-search"
      ></Input>
      <ButtonLink
        link="/"
        icon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-search"
            viewBox="0 0 16 16"
            id="button-search"
          >
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
          </svg>
        }
        name="Buscar"
      ></ButtonLink>
    </div>
  );
};

export default SearchBar;