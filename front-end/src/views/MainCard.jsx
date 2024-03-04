import React from 'react';
import { Route, Routes } from "react-router-dom";
import CardMain from "../components/subcomponents/CardMain";
import BusinessList from "../components/BusinessList/BusinessList"
import AspirantList from "../components/AspirantList/AspirantList";
import UserPanel from "../components/UserPanel/UserPanel";
import ProfessionList from "../components/ProfessionList/ProfessionList";
import RegisterForm from "../components/RegisterForm/RegisterForm";
import "./MainCard.css"

function MainCard() {
  return (
    <div className='routes'>
      <Routes>
        <Route path="/" exact={true} element={<CardMain />} />
        <Route path="/empresas" element={<BusinessList />} />
        <Route path="/aspirantes" element={<AspirantList />} />
        <Route path="/aspirantes/:id" element={<UserPanel />} />
        <Route path="/registro" element={<RegisterForm />} />
        <Route path="/profesiones" element={<ProfessionList />} />
      </Routes>
    </div>
  );
};

export default MainCard;