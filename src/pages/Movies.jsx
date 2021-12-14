import { useParams, useHistory } from 'react-router-dom';

function Movies() {
  const { id: title } = useParams();
  const { goBack } = useHistory();
  return (
    <>
      <h1>Hello, from Movies: {title} page</h1>;
      <button className="btn" onClick={goBack}>
        Go back
      </button>
    </>
  );
}

export default Movies;
