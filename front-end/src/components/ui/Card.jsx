import PropTypes from "prop-types";
const Card = (props) => {
  return (
    <div style={{maxWidth:"70%"}}>
      <div style={{textAlign:"center", maxWidth: "90%", height: "auto"  }}>
        <h2>{props.title}</h2>
        <h4>{props.description}</h4>
      </div>
      <div style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
        <img
          src={props.image}
          alt={props.nameImage}
          style={{ maxWidth: "100%", height: "auto" }}
        />
      </div>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  nameImage: PropTypes.string.isRequired,
};

export default Card;
