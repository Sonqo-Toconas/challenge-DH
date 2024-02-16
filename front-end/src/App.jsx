import Header from './views/header';
import MainCard from './views/MainCard';
import LateralMenu from './views/LateralMenu';
import Aspirants from './views/Aspirants';
import Professions from './views/Professions';
import './App.css'

function App() {

  return (
    <div>

      <LateralMenu />
      <Header />
      <Aspirants />
      <Professions />
    </div>
  )
}

export default App;
