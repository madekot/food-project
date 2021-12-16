import { API_URL } from './config';

const transformData = (data) => {
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

const getMealById = async (mealId) => {
  const response = await fetch(API_URL + `lookup.php?i` + mealId);
  const data = await response.json();
  return transformData(data.categories);
};

const getAllCategories = async () => {
  const response = await fetch(API_URL + `categories.php`);
  const data = await response.json();
  return transformData(data.categories);
};

const getFilteredCategory = async (catName) => {
  const response = await fetch(API_URL + `filter.php?c=Seafood` + catName);
  const data = await response.json();
  return transformData(data.categories);
};

export { getMealById, getAllCategories, getFilteredCategory };
