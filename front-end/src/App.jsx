import Header from "./views/Header";
import "./App.css";
import LateralMenu from "./views/LateralMenu";
import CardMain from "./components/subcomponents/CardMain";
/* import MainContainer from "./views/MainContainer"; */

const App = () => {
  return (
    <div>
      <Header></Header>
        <LateralMenu></LateralMenu>
        {/* <MainContainer></MainContainer> */}
        <CardMain></CardMain>
      </div>
  );
};

export default App;
