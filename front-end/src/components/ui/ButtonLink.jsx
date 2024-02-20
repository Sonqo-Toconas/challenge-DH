import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const ButtonLink = (props) => {
  return (
    <div className="d-inline-block">
      <Link to={props.link} className="btn btn-outline-dark rounded-0">
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

export default ButtonLink;
