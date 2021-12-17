import Meal from './Meal';

function MealList({ meals }) {
  const items = meals.map((meal) => <Meal key={meal.id} {...meal} />);

  return <div className="list">{items}</div>;
}
export default MealList;
