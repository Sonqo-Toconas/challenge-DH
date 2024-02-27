import {
  /* Nav, */ Navbar,
  /* NavDropdown, */ Container,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import SearchBar from "../components/subcomponents/SearchBar";
import UserMenu from "../components/subcomponents/UserMenu";
import "./Header.css";

const Header = () => {
  return (
    /*  <Navbar collapseOnSelect expand="md" className="fixed-top border-bottom border-black ms-0 bg-white"> */
    /* es un componente que sirve de contenedor que indica que se debe ocupar todo el ancho disponible horizontal */
    <Navbar collapseOnSelect expand="md" className="custom-navbar fixed-top border-bottom border-black ms-0 bg-white">
      {/* /*que ocupe desde LateralMenu*/}
      <Container fluid>
        {/*Componente de React-boostrap donde se aloja el logo*/}
        {/* as={Link} to="/" establece que funcione como un enlace de navegacion usando react-router-dom */}{" "}
        <Navbar.Brand as={Link} to="/" className=" navbar-brand">
          <img
            src="/src/assets/images/logo-dh.png"
            alt="Logo Digital House Emplear"
            style={{
              width: "100%",
              height: "auto",
              minWidth: "80px",
              maxWidth: "100px",
            }}
          />
        </Navbar.Brand>
        {/*Componente de React-Boostrap que crea Botón de Menú en pantallas pequeñas */}
        {/* arias controls establece la relacion entre el boton y el contenido expandible */}
        <Navbar.Toggle
          aria-controls="header"
          className="navbar-toggler border-0"
        />
        {/*Componente de react-boostrap Envuelve los componentes que seran contraidos/expandidos atraves de Navbar.Toggle */}
        <Navbar.Collapse id="header" className="navbar-collapse">
          {/* <Nav className="me-auto"> */}
          {/* <Container fluid expand="md" */}
          <SearchBar className="search-bar-header" />
          <UserMenu className="user-menu-header" />
          {/* </Nav> */}
          {/* </Container> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
