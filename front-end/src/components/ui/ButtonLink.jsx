import { Link } from "react-router-dom";
import PropTypes from "prop-types";
/* import { NavLink } from "react-bootstrap"; */

const ButtonLink = (props) => {
  return (
    <div>
      <button>
        <Link to={props.link}>
          <div>
            {props.icon}
            <div>{props.name}</div>
          </div>
        </Link>
      </button>
    </div>
  );
  /* 
    <NavLink exacth to={props.link}>{props.icon}{props.nameLink}</NavLink>
   */
};

ButtonLink.propTypes = {
  link: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
  name: PropTypes.string.isRequired,
};

export default ButtonLink;
