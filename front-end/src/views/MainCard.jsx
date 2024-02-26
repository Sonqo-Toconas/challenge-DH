import { Route, Routes } from "react-router-dom";
import CardMain from "../components/subcomponents/CardMain";
import BusinessList from "../components/BusinessList/BusinessList"
import AspirantList from "../components/AspirantList/AspirantList";
import UserPanel from "../components/UserPanel/UserPanel";
import ProfessionList from "../components/ProfessionList/ProfessionList";
import RegisterForm from "../components/RegisterForm/RegisterForm";

function MainCard() {
  return (
    <Routes>
      <Route path="/" exact={true} element={<CardMain />} />
      <Route path="/empresas" element={<BusinessList />} />
      <Route path="/aspirantes" element={<AspirantList />} />
      <Route path="/aspirantes/:id" element={<UserPanel />} />
      <Route path="/registro" element={<RegisterForm />} />
      <Route path="/profesiones" element={<ProfessionList />} />
    </Routes>
  );
};

export default MainCard;