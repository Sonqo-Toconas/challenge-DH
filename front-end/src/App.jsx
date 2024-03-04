import Header from "./views/Header";
import "./App.css";
import LateralMenu from "./views/LateralMenu";
import CardMain from "./components/subcomponents/CardMain";
/* import MainContainer from "./views/MainContainer"; */
import MainCard from "./views/MainCard";

const App = () => {
  return (
    <div>
      <Header />
      <LateralMenu />
      <MainCard />
      {/* <MainContainer></MainContainer> */}
    </div>
  );
};

export default App;
