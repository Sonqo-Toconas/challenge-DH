/* import SearchBar from "../components/subcomponents/SearchBar";
import UserMenu from "../components/subcomponents/UserMenu";

const Header = () => {
  return(
    
    <nav >
    <div className="d-flex justify-content-between">
      <SearchBar/>
      <div className="mx-4"></div>
      <UserMenu />
    </div>
    </nav> 
  )
}

export default Header; */

/* import { Link } from "react-router-dom";
import SearchBar from "../components/subcomponents/SearchBar"
import UserMenu from "../components/subcomponents/UserMenu";
import ButtonMenu from "../components/ui/ButtonMenu";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-md navbar fixed-top border-bottom border-black bg-white navbar-white">
      <div className="container-fluid">
        <ButtonMenu></ButtonMenu>
        <Link to="/" style={{maxWidth: "100%"}}>
        <img
            src="/src/assets/images/logo-dh.png"
            alt="Logo Digital House Emplear"
            style={{width:"40%", height:"auto"}}
          />
        </Link>
        <div className=" collapse navbar-collapse" id="menu">
          <UserMenu/>
        </div>
      </div>
    </nav>
  );
};

export default Header; */

import { Nav, Navbar, /* NavDropdown, */ Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import SearchBar from "../components/subcomponents/SearchBar";
import UserMenu from "../components/subcomponents/UserMenu";

const Header = () => {
  return (
    <Navbar collapseOnSelect expand="md" className=" fixed-top border-bottom">
      {/* es un componente que sirve de contenedor que indica que se debe ocupar todo el ancho disponible horizontal */}
      <Container fluid>
        {/*Componente de React-boostrap donde se aloja el logo*/}
        {/* as={Link} to="/" establece que funcione como un enlace de navegacion usando react-router-dom */}{" "}
        <Navbar.Brand as={Link} to="/">
          <img
            src="/src/assets/images/logo-dh.png"
            alt="Logo Digital House Emplear"
            style={{ width: "40%", height: "auto" }}
          />
        </Navbar.Brand>
        {/*Componente de React-Boostrap que crea Botón de Menú en pantallas pequeñas */}
        {/* arias controls establece la relacion entre el boton y el contenido expandible */}
        <Navbar.Toggle aria-controls="header" />
        {/*Componente de react-boostrap Envuelve los componentes que seran contraidos/expandidos atraves de Navbar.Toggle */}
        <Navbar.Collapse id="header">
          <Nav className="d-flex align-items-center">
            <SearchBar></SearchBar>
            <UserMenu></UserMenu>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
