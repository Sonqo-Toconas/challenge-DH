/* import PropTypes from "prop-types";

const Input = (props) => {
  return (
    <div className="d-inline-block">
      <form action={props.route} method="POST" className="d-flex align-items-center"> 
        <label htmlFor={props.name}>
          <input
            type={props.type}
            name={props.name}
            id={props.name}
            placeholder={props.placeholder}
            className="form-control border border-black rounded-0" 
          />
        </label>
      </form>
    </div>
  );
};

Input.propTypes = {
  route: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
};

export default Input; */

import PropTypes from "prop-types";
import { Form } from "react-bootstrap";

const Input = (props) => {
  return (
    <Form className="d-flex">
      <Form.Control
        aria-label={props.name}
        placeholder={props.placeholder}
        id={props.name}
        type={props.type}
        className="rounded-0 w-100"
      />
    </Form>
  );
};

Input.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
};

export default Input;
