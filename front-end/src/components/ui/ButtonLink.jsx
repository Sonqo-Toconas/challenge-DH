import { Button, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import "./ButtonLink.css"

const ButtonLink = (props) => {

  return (
    <Nav.Item>
      <NavLink to={props.link}>
        <Button variant="outline-dark" className="rounded-0">
          <span className="m-2">{props.icon}</span>
        </Button>
      </NavLink>
    </Nav.Item>
  );
};

ButtonLink.propTypes = {
  link: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
};

export default ButtonLink;