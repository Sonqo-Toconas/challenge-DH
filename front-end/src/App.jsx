import "./App.css";
import Header from "./views/Header";
import LateralMenu from "./views/LateralMenu";
import MainCard from "./views/MainCard";

function App() {
  return (
    <div>
      <LateralMenu />
      <Header />
      <MainCard />
    </div>
  );
}

export default App;