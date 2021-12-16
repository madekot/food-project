import Item from './Item';

function List({ catalog }) {
  const catalogItems = catalog.map((item) => {
    const { id, ...propsItem } = item;

    return <Item key={id} {...propsItem} />;
  });

  return <div className="list">{catalogItems}</div>;
}

export default List;
