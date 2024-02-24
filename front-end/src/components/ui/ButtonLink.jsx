/* import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const ButtonLink = (props) => {
  return (
    <div className="d-inline-block">
      <Link to={props.link} className="btn btn-outline-dark rounded-0 d-flex justify-content-center align-items-center">
        <div>
          {props.icon}
          <div>{props.name}</div>
        </div>
      </Link>
    </div>
  );
};

ButtonLink.propTypes = {
  link: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
  name: PropTypes.string.isRequired,
};

<Nav.Link href="#action1">Home</Nav.Link>

export default ButtonLink; */

import { Button, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

const ButtonLink = (props) => {
  return (
    <Nav.Item>
      <NavLink to={props.link}>
        <Button variant="outline-dark" className="rounded-0 align-items-center">
          {props.icon}
          {props.name}
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
