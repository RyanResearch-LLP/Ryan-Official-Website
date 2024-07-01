import PropTypes from 'prop-types';
import './CategoriesTable.css'; // Assuming this is your new CSS file

const CategoriesTable = ({ categories, onCategorySelect, selectedCategory }) => {
  return (
    <div className="rct-container">
      <button
        className={`rct-button ${selectedCategory === null ? 'rct-button-selected' : 'rct-button-normal'}`}
        onClick={() => onCategorySelect(null)}
      >
        All Recommends
      </button>
      {categories && categories.map((category) => (
        <button
          key={category._id}
          className={`rct-button ${selectedCategory === category.title ? 'rct-button-selected' : 'rct-button-normal'}`}
          onClick={() => onCategorySelect(category.title)}
        >
          {category.title}
        </button>
      ))}
    </div>
  );
};

CategoriesTable.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.shape({
    _id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  })),
  onCategorySelect: PropTypes.func.isRequired,
  selectedCategory: PropTypes.string,
};

export default CategoriesTable;
