import { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { getFilteredCategory } from '../api';
import Preloader from '../components/Preloader';

import MealList from '../components/MealList';

function Category() {
  const { goBack } = useHistory();
  const { name } = useParams();
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    getFilteredCategory(name).then((data) => setMeals(data));
  }, [name]);

  const content =
    meals.length === 0 ? <Preloader /> : <MealList meals={meals} />;

  return (
    <>
      <button className="btn" onClick={goBack}>
        Go back
      </button>
      {content}
    </>
  );
}

export default Category;
