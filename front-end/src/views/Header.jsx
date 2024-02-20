import SearchBar from "../components/subcomponents/SearchBar";
import UserMenu from "../components/subcomponents/UserMenu";

const Header = () => {
  return (
    <div className="d-flex justify-content-between align-items-center">
    <nav className="navbar fixed-top nav border-bottom ">
      <div className="container-fluid ">
        <div className="d-inline-flex">
          <div className="">
            <SearchBar />
          </div>
          <div>
            <UserMenu/>
          </div>
        </div>
      </div>
    </nav>
    </div>
  );
};

export default Header;
