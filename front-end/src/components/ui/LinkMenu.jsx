
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import "./ButtonLink.css"
/* import { Button, NavItem } from "react-bootstrap"; */

const LinkMenu = (props) => {

  return (
    <NavLink to={props.link} /* variant="outline-dark" */ className="rounded-0 text-black text-decoration-none">
    <span className="m-2">{props.icon}</span> 
   {/*  <span className="">{props.name}</span> */}
</NavLink>     
  );
};

LinkMenu.propTypes = {
  link: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
  /* name: PropTypes.string.isRequired, */
};

export default LinkMenu;