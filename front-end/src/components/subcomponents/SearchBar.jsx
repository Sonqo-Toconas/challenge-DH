import React from "react";

const SearchBar = (props) => {
  return (
    <div>
      <form action="" method="POST">
        <input type="text" placeholder={props.placeholder} />
        <button>
          {props.iconSearch}
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
