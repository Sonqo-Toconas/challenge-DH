import "./App.css";
import Header from "./views/Header";/* 
import { Row, Col } from 'react-bootstrap'; */
/* import LateralMenu from "./views/LateralMenu"; */
import MainCard from "./views/MainCard";

function App() {
  return (
    <div>
    {/*   <LateralMenu /> */}
      <Header />
      {/* <Row>
      <Col xs={12} md={{ span: 8, offset: 2 }}> */}
      <MainCard />
     {/*  </Col>
    </Row> */}
      
            
    </div>
  );
}

export default App;