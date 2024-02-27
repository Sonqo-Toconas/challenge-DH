import { Carousel } from "react-bootstrap";
import PropTypes from "prop-types";

const Card = (props) => {
  return (
    <>
      <img src={props.image} alt={props.nameImage} />
      <Carousel.Caption>
        <h3>{props.title}</h3>
        <h6>{props.description}</h6>
      </Carousel.Caption>
    </>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  nameImage: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Card;
