import PropTypes from "prop-types";
import { Form } from "react-bootstrap";
import "./Input.css";/* 
import React from "react"; */

const Input = (props) => {
  return (
    <Form className="d-flex" id="form-input" style={{/* maxWidth:"300px", */ minWidth:"250px"}}>
      
      <Form.Control
        aria-label={props.name}
        placeholder={props.placeholder}
        id={props.name}
        type={props.type}
        className="rounded-0"
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
