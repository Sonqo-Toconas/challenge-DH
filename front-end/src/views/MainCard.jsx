import AspirantsList from "../components/AspirantList/AspirantList";
import ProfessionsList from "../components/ProfessionList/ProfessionList"
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
        <ProfessionsList />
      </div>
    </div>
  );
};

export default MainCard;
