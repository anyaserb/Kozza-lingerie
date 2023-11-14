import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar as faFullStar,
  faStarHalfAlt
} from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-regular-svg-icons";

const Star = (props) => {
  const ratingStar = Array.from({ length: 5 }, (elem, index) => {
    let number = index + 0.5;

    return (
      <span key={index}>
        {props.stars >= index + 1 ? (
          <FontAwesomeIcon icon={faFullStar}  />
        ) : props.stars >= number ? (
          <FontAwesomeIcon icon={faStarHalfAlt}  />
        ) : (
          <FontAwesomeIcon icon={faStar}  />
        )}
      </span>
    );
  });

  return (
    <>
      <div>
        {ratingStar}
      </div>
    </>
  );
};

export default Star;