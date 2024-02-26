import { Button, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import "./ButtonLink.css"

const ButtonLink = (props) => {

  return (
    <Nav.Item>
      <NavLink to={props.link}>
        <Button variant="outline-dark" className="rounded-0">
          <span className="mr-2">{props.icon}</span> 
          <span className="">{props.name}</span>
        </Button>
      </NavLink>
    </Nav.Item>
  );
};

ButtonLink.propTypes = {
  link: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
  name: PropTypes.string.isRequired,
};

export default ButtonLink;