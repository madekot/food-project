import { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { getMealById } from '../api';
import Preloader from '../components/Preloader';

function Recipe() {
  const [recipe, setRecipe] = useState({});
  const { id } = useParams();
  const { goBack } = useHistory();

  useEffect(() => {
    getMealById(id).then(({ meals }) => {
      setRecipe(meals[0]);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <>
      <button className="btn" onClick={goBack}>
        Go Back
      </button>
      {!recipe.idMeal ? (
        <Preloader />
      ) : (
        <div className="recipe">
          <img src={recipe.strMealThumb} alt={recipe.strMeal} />
          <h1>{recipe.strMeal}</h1>
        </div>
      )}
    </>
  );
}

export default Recipe;
