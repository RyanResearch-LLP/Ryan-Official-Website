import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { getAllCategories } from "../../../services/index/recommendCategories";
import RecommendItem from "./RecommendItem";
import CategoriesTable from "./CategoriesTable";
import "./RecommendList.css"; // Import the new CSS file

const RecommendList = ({ recommends, className }) => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      const allCategories = await getAllCategories();
      setCategories(allCategories);
    };
    fetchCategories();
  }, []);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  const filteredRecommendations = selectedCategory
    ? recommends.filter((recommend) =>
        recommend.categories.some((category) => category.title === selectedCategory)
      )
    : recommends;

  return (
    <div className={`rcml-container ${className}`}>
      <div>
        <CategoriesTable
          categories={categories?.data}
          onCategorySelect={handleCategorySelect}
          selectedCategory={selectedCategory}
        />
      </div>
      <ul className="rcml-flex ">
        {filteredRecommendations?.map((item) => (
          <RecommendItem key={item._id} recommend={item} />
        ))}
      </ul>
    </div>
  );
};

RecommendList.propTypes = {
  recommends: PropTypes.arrayOf(PropTypes.shape({
    _id: PropTypes.string.isRequired,
    categories: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string,
    })),
  })).isRequired,
  className: PropTypes.string,
};

export default RecommendList;
