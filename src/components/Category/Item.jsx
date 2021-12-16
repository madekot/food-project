function Item(props) {
  console.log(props);
  const { name } = props;
  return <li className="card">{name}</li>;
}

export default Item;
