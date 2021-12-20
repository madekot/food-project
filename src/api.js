import { API_URL } from './config';

const transformCategoriesData = ({ categories: data }) => {
  return data.map((item) => {
    const {
      idCategory: id,
      strCategory: name,
      strCategoryDescription: description,
      strCategoryThumb: image,
    } = item;

    return { id, name, description, image };
  });
};

const transformFilteredData = ({ meals: data }) => {
  return data.map((item) => {
    const { idMeal: id, strMeal: name, strMealThumb: image } = item;
    return { id, name, image };
  });
};

const getMealById = async (mealId) => {
  const response = await fetch(API_URL + `lookup.php?i=` + mealId);
  const data = await response.json();
  // return transformCategoriesData(data);
  return data;
};

const getAllCategories = async () => {
  const response = await fetch(API_URL + `categories.php`);
  const data = await response.json();
  return transformCategoriesData(data);
};

const getFilteredCategory = async (catName) => {
  const response = await fetch(API_URL + `filter.php?c=` + catName);
  const data = await response.json();
  return transformFilteredData(data);
};

export { getMealById, getAllCategories, getFilteredCategory };
