import { Link } from 'react-router-dom';

function Meal({ name, id, image }) {
  const linkUrl = `/meal/${id}`;

  return (
    <div className="card">
      <div className="card-image">
        <img src={image} alt={name} />
      </div>
      <div className="card-content">
        <span className="card-title">{name}</span>
      </div>
      <div className="card-action">
        <Link to={linkUrl} className="btn">
          Watch recipe
        </Link>
      </div>
    </div>
  );
}

export default Meal;
