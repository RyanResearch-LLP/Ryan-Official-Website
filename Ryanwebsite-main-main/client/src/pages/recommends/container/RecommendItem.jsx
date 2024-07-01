import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import { images, stables } from "../../../constants";
import "./RecommendItem.css"; // Import the new CSS file

const RecommendItem = (props) => {
  const recommend = props.recommend;

  return (
    <li className="recommend-item">
      <Link className="recommend-item-link" to={`/ryan-recommends/${recommend.slug}`}>
        <img
          className="recommend-item-img"
          src={recommend.photo ? stables.UPLOAD_FOLDER_BASE_URL + recommend.photo : images.samplePostImage}
          alt={recommend.title}
        />
      </Link>
      <Link className="recommend-item-link" to={`/ryan-recommends/${recommend.slug}`}>
        <h5 className="recommend-item-title">
          {recommend.title}
        </h5>
      </Link>
      <p className="recommend-item-categories">
        {recommend.categories.length > 0
          ? recommend.categories.slice(0, 3).map((category, index) => (
            <span key={index}>
              {category.title}
              {recommend.categories.slice(0, 3).length === index + 1 ? '' : ', '}
            </span>
          ))
          : "Uncategorized"}
      </p>
    </li>
  );
};

RecommendItem.propTypes = {
  recommend: PropTypes.shape({
    slug: PropTypes.string.isRequired,
    photo: PropTypes.string,
    categories: PropTypes.array,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default RecommendItem;
