import AspirantsList from "../components/AspirantList/AspirantList";
import Professions from "../components/subcomponents/Professions";
import CardMain from "../components/subcomponents/CardMain";

const MainCard = () => {
  return (
    <div>
      <div>
        <CardMain/>
      </div>
      <div>
        <AspirantsList />
      </div>
      <div>
        <Professions />
      </div>
    </div>
  );
};

export default MainCard;
